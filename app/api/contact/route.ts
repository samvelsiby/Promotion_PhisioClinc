import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { COMPANY_CONTACT, NAP_LINE } from '@/lib/constants'

const resend = new Resend(process.env.RESEND_API_KEY)

const SUCCESS_MESSAGE = 'Your appointment request has been submitted successfully. We will contact you soon.'
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Best-effort flood guard. Each serverless instance keeps its own memory, so
// this slows a single noisy sender rather than giving a hard global limit.
const WINDOW_MS = 10 * 60 * 1000
const MAX_PER_WINDOW = 5
const recent = new Map<string, number[]>()

function rateLimited(ip: string): boolean {
  const now = Date.now()
  const hits = (recent.get(ip) || []).filter((time) => now - time < WINDOW_MS)
  if (hits.length >= MAX_PER_WINDOW) {
    recent.set(ip, hits)
    return true
  }
  hits.push(now)
  recent.set(ip, hits)
  if (recent.size > 5000) {
    recent.forEach((times, key) => {
      if (times.every((time) => now - time >= WINDOW_MS)) recent.delete(key)
    })
  }
  return false
}

// One line, trimmed and capped, so a field can never add an email header.
function field(value: unknown, max: number): string {
  return typeof value === 'string' ? value.replace(/[\r\n]+/g, ' ').trim().slice(0, max) : ''
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Honeypot: the field is hidden from people. A filled value is a bot, which
    // gets the normal success reply and no email.
    if (field(body.company, 200)) {
      console.log(JSON.stringify({ type: 'contact_request', at: new Date().toISOString(), outcome: 'honeypot' }))
      return NextResponse.json({ success: true, message: SUCCESS_MESSAGE }, { status: 200 })
    }

    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || request.ip || 'unknown'
    if (rateLimited(ip)) {
      console.log(JSON.stringify({ type: 'contact_request', at: new Date().toISOString(), outcome: 'rate_limited' }))
      return NextResponse.json(
        { error: `Too many requests. Please call us at ${COMPANY_CONTACT.PHONE_DISPLAY}.` },
        { status: 429 }
      )
    }

    const name = field(body.name, 100)
    const phone = field(body.phone, 40)
    const email = field(body.email, 200)
    const preferredTime = field(body.preferredTime, 200)
    const message = typeof body.message === 'string' ? body.message.trim().slice(0, 2000) : ''

    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    if (!EMAIL_PATTERN.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      )
    }

    const replyTo = `${name.replace(/[<>"]/g, '')} <${email}>`

    // A second inbox is the backup if the main one is missed. Enquiries are not
    // stored anywhere else: names with health details belong in the clinic system.
    const clinicEmail = process.env.RESEND_CLINIC_EMAIL || COMPANY_CONTACT.EMAIL
    const backupEmail = process.env.RESEND_CLINIC_BACKUP_EMAIL
    const toEmails = backupEmail && backupEmail !== clinicEmail ? [clinicEmail, backupEmail] : [clinicEmail]

    const emailSubject = `New Appointment Request from ${name}`
    const emailBody = `
New Appointment Request

Name: ${name}
Phone: ${phone}
Email: ${email}
Preferred Day/Time: ${preferredTime || 'Not specified'}
Message: ${message || 'No message provided'}

---
This email was sent from the Pro-Motion Physiotherapy website contact form.
    `.trim()

    // Without a verified sending domain Resend only delivers to the account owner,
    // so the clinic would silently receive nothing. Make that visible in the logs.
    const verifiedFrom = process.env.RESEND_FROM_EMAIL
    if (!verifiedFrom) console.warn('RESEND_FROM_EMAIL is not set: contact emails are using the Resend test sender and may not be delivered.')
    const fromEmail = verifiedFrom || 'Pro-Motion Physiotherapy <onboarding@resend.dev>'

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmails,
      replyTo,
      subject: emailSubject,
      text: emailBody,
    })

    if (error) {
      console.error('Resend error:', error)
      throw new Error('Failed to send email')
    }

    // Count-only log line (no personal details) so deliveries can be reconciled
    // against GA4 `generate_lead` and the inbox.
    console.log(JSON.stringify({ type: 'contact_request', at: new Date().toISOString(), outcome: 'delivered' }))

    // Acknowledge the enquiry to the sender. A reply to an enquiry is permitted
    // under CASL; it carries no promotion and does not repeat what they wrote.
    if (verifiedFrom) {
      const acknowledgement = `
Hi ${name.split(' ')[0]},

Thank you for contacting ${COMPANY_CONTACT.NAME}. We have received your appointment request and will reply during clinic hours.

If you need an appointment within 24 hours, please call ${COMPANY_CONTACT.PHONE_DISPLAY}.

This message only confirms that your request arrived. Please do not reply with medical details.

${COMPANY_CONTACT.NAME}
${NAP_LINE}
${COMPANY_CONTACT.PHONE_DISPLAY}
      `.trim()
      try {
        const result = await resend.emails.send({
          from: verifiedFrom,
          to: [email],
          replyTo: clinicEmail,
          subject: `We received your request | ${COMPANY_CONTACT.NAME}`,
          text: acknowledgement,
        })
        if (result.error) console.error('Acknowledgement email failed:', result.error)
      } catch (acknowledgementError) {
        // The clinic already has the request; never fail the enquiry over this.
        console.error('Acknowledgement email failed:', acknowledgementError)
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: SUCCESS_MESSAGE
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing form submission:', error)
    return NextResponse.json(
      {
        error: 'Failed to submit your request. Please try again or call us directly.'
      },
      { status: 500 }
    )
  }
}
