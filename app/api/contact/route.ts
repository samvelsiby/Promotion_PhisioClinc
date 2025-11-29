import { NextRequest, NextResponse } from 'next/server'

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

    // Email configuration - Update with your clinic email
    const clinicEmail = process.env.CLINIC_EMAIL || 'info@promotionphysio.com'
    
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

    // For now, we'll use a simple approach
    // You can integrate with services like:
    // - Resend (recommended for Next.js)
    // - SendGrid
    // - Nodemailer with SMTP
    // - Formspree
    // - EmailJS

    // Example with fetch to an email service API
    // Replace this with your preferred email service
    const emailServiceUrl = process.env.EMAIL_SERVICE_URL
    
    if (emailServiceUrl) {
      // If you have an email service configured
      const response = await fetch(emailServiceUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: clinicEmail,
          subject: emailSubject,
          text: emailBody,
          from: email,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to send email')
      }
    } else {
      // Log to console for development
      // In production, configure an email service
      console.log('=== NEW APPOINTMENT REQUEST ===')
      console.log(emailBody)
      console.log('===============================')
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

