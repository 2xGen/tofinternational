import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const TOF_EMAIL = process.env.ORDER_NOTIFICATION_EMAIL || 'info@tofsports.nl';
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

export async function POST(request) {
  try {
    const body = await request.json();
    const name = String(body?.name || '').trim();
    const email = String(body?.email || '').trim();
    const country = String(body?.country || '').trim();
    const role = String(body?.role || '').trim();
    const consent = body?.consent === true;
    const organisation = String(body?.organisation || '').trim();
    const message = String(body?.message || '').trim();
    const interest = String(body?.interest || '').trim();

    if (!name || !email || !country || !role || !consent || !email.includes('@')) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }

    if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
      return NextResponse.json({ ok: false }, { status: 500 });
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
      auth: { autoRefreshToken: false, persistSession: false },
    });

    const row = { name, email, country, role, consent: true };
    if ('organisation' in body) row.organisation = organisation || null;
    if ('message' in body) row.message = message || null;
    if ('interest' in body) row.interest = interest || null;

    const { error: insertError } = await supabase.from('interest_registrations').insert(row);

    if (insertError) {
      console.error('Supabase insert error:', insertError);
      return NextResponse.json({ ok: false }, { status: 500 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ ok: true, email: false });
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
        interest ? `Interested in: ${interest}` : null,
        organisation ? `Organisation: ${organisation}` : null,
        message ? `Message: ${message}` : null,
        'Agreed to the terms and privacy policy: yes',
      ]
        .filter(Boolean)
        .join('\n'),
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ ok: true, email: false });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Register interest error:', error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
