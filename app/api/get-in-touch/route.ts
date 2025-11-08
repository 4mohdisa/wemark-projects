import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { fullName, email, phoneNumber, projectName } = body

    // Validate required fields
    if (!fullName || !email || !phoneNumber) {
      return NextResponse.json(
        { error: 'Full name, email, and phone number are required' },
        { status: 400 }
      )
    }

    // Send email to your team
    const { data, error } = await resend.emails.send({
      from: 'Wemark Leads <leads@wemark.ae>',
      to: ['parm@wemark.com.au', 'chirag@wemark.com.au'],
      subject: `Property Inquiry - ${projectName || 'General'} - ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1A2D3B; border-bottom: 2px solid #D4A574; padding-bottom: 10px;">
            New Property Inquiry
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1A2D3B; margin-top: 0;">Contact Details</h3>
            <p><strong>Full Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone Number:</strong> ${phoneNumber}</p>
            ${projectName ? `<p><strong>Property of Interest:</strong> ${projectName}</p>` : ''}
          </div>
          
          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #D4A574; margin: 20px 0;">
            <h3 style="color: #1A2D3B; margin-top: 0;">Inquiry Type</h3>
            <p>The client is interested in getting in touch regarding ${projectName ? 'the above property' : 'your services'}.</p>
            <p>Please contact them at your earliest convenience.</p>
          </div>
          
          <div style="background-color: #1A2D3B; color: white; padding: 15px; border-radius: 8px; text-align: center; margin-top: 30px;">
            <p style="margin: 0;">This inquiry was submitted from the Wemark website.</p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Inquiry sent successfully', id: data?.id },
      { status: 200 }
    )
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
