import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, subject, message, category } = await request.json();

    const data = await resend.emails.send({
      from: 'Souhardya Bose Portfolio <onboarding@resend.dev>', // Use verified domain or onboarding for testing
      to: [process.env.RESEND_FROM_EMAIL],
      reply_to: email,
      subject: `[Portfolio Inquiry] ${subject || 'New Contact Request'}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 10px; padding: 20px;">
          <h2 style="color: #3D5BF1; border-bottom: 1px solid #eee; padding-bottom: 10px;">New Portfolio Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Category:</strong> ${category || 'General Inquiry'}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
          </div>
          <p style="font-size: 12px; color: #888; margin-top: 30px; border-top: 1px solid #eee; pt: 10px;">
            Sent from your portfolio website contact form.
          </p>
        </div>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
