import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, email, preferredTime, message } = body

    // Validate required fields
    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email configuration
    const clinicEmail = 'info@promotionphysiotherapy.ca'
    
    // Create email content
    const emailSubject = `New Appointment Request from ${name}`
    const emailBody = `
New Appointment Request

Name: ${name}
Phone: ${phone}
Email: ${email}
Preferred Day/Time: ${preferredTime || 'Not specified'}
Message: ${message || 'No message provided'}

---
This email was sent from the Pro Motion Physiotherapy website contact form.
    `.trim()

    // Send email using Resend
    // Note: Update 'from' address after verifying your domain in Resend
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'Pro Motion Physiotherapy <onboarding@resend.dev>'
    
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [clinicEmail],
      replyTo: email,
      subject: emailSubject,
      text: emailBody,
    })

    if (error) {
      console.error('Resend error:', error)
      throw new Error('Failed to send email')
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Your appointment request has been submitted successfully. We will contact you soon.' 
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

