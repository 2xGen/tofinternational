import { NextResponse } from 'next/server';

const TOF_EMAIL = process.env.ORDER_NOTIFICATION_EMAIL || 'info@tofsports.nl';

export async function POST(request) {
  try {
    const body = await request.json();
    const name = String(body?.name || '').trim();
    const email = String(body?.email || '').trim();
    const country = String(body?.country || '').trim();
    const role = String(body?.role || '').trim();
    const consent = body?.consent === true;

    if (!name || !email || !country || !role || !consent || !email.includes('@')) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.warn('RESEND_API_KEY not set: interest registration stored in logs only.', {
        name,
        email,
        country,
        role,
      });
      return NextResponse.json({ ok: true, skipped: true });
    }

    const { Resend } = await import('resend');
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'TOF Sports <onboarding@resend.dev>';
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: TOF_EMAIL,
      replyTo: email,
      subject: `International interest: ${name} (${country})`,
      text: [
        'New TOF Sports International registration',
        '',
        `Name: ${name}`,
        `Email: ${email}`,
        `Country: ${country}`,
        `I am a: ${role}`,
        'Agreed to the terms and privacy policy: yes',
      ].join('\n'),
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ ok: false }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Register interest error:', error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
