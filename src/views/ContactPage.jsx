'use client';

import React, { useState } from 'react';
import SubpageHero from '@/components/SubpageHero';

const eyebrow = 'text-xs font-semibold tracking-[0.18em] text-tof-indigo/70 sm:text-sm';
const heading =
  'font-heading text-3xl font-semibold tracking-tight text-tof-indigo md:text-4xl lg:text-[2.75rem]';
const body = 'text-base leading-relaxed text-tof-indigo/80 md:text-lg md:leading-8';
const yellowButton =
  'inline-flex items-center justify-center rounded-full bg-tof-yellow px-6 py-3 text-sm font-semibold text-tof-indigo transition hover:bg-tof-yellow/90 md:px-7 md:py-3.5 md:text-base';
const fieldClass =
  'h-12 w-full rounded-xl border border-tof-indigo/15 bg-[#F7F7F8] px-4 text-sm text-tof-indigo placeholder:text-tof-indigo/40 focus:border-tof-indigo focus:bg-white focus:outline-none focus:ring-2 focus:ring-tof-yellow';

const roles = [
  'Individual coach / trainer',
  'Club representative',
  'Academy owner / manager',
  'Federation / national organisation',
  'Other',
];

const interests = [
  'Start — individual coach license',
  'Grow — organisation license',
  'Lead — strategic partner license',
  'Platform demo',
  'General question',
  'Partnership opportunity',
];

const solutions = [
  {
    title: 'Start — individual coaches',
    text: 'Access the TOF methodology and digital coaching tools through a personal license.',
    price: 'From €7.50/month',
    cta: 'Explore start',
    href: '/licenses#start',
  },
  {
    title: 'Grow — clubs & academies',
    text: 'Bring coaches and players together within one organisation environment.',
    price: 'From €2,500/year',
    cta: 'Explore grow',
    href: '/licenses#grow',
  },
  {
    title: 'Lead — federations & strategic partners',
    text: 'Develop a branded and localised TOF ecosystem for your organisation.',
    price: 'Custom licensing',
    cta: 'Explore lead',
    href: '/licenses#lead',
  },
];

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setError('');
    const form = event.currentTarget;
    const data = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      organisation: form.organisation.value.trim(),
      country: form.country.value.trim(),
      role: form.role.value,
      interest: form.interest.value,
      message: form.message.value.trim(),
      consent: form.consent.checked,
    };

    setSending(true);
    try {
      const response = await fetch('/api/register-interest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Request failed');
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please email info@tofsports.nl.');
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <p className="text-base leading-relaxed text-tof-indigo md:text-lg" role="status">
        Thank you for your message. We&apos;ve received your inquiry and will get back to you as soon
        as possible.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-tof-indigo">Full name *</span>
          <input
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your full name"
            className={fieldClass}
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-tof-indigo">Email address *</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@organisation.com"
            className={fieldClass}
          />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-tof-indigo">Organisation / club</span>
          <input
            name="organisation"
            type="text"
            autoComplete="organization"
            placeholder="Name of your club, academy or organisation"
            className={fieldClass}
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-tof-indigo">Country *</span>
          <input
            name="country"
            type="text"
            required
            autoComplete="country-name"
            placeholder="Your country"
            className={fieldClass}
          />
        </label>
      </div>
      <fieldset>
        <legend className="mb-2 text-sm font-semibold text-tof-indigo">I am a... *</legend>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {roles.map((option) => (
            <label key={option} className="cursor-pointer">
              <input type="radio" name="role" value={option} required className="peer sr-only" />
              <span className="flex min-h-11 items-center justify-center rounded-full border border-tof-indigo/15 bg-[#F7F7F8] px-3 py-2 text-center text-sm font-semibold text-tof-indigo transition peer-checked:border-tof-indigo peer-checked:bg-tof-indigo peer-checked:text-tof-yellow peer-focus-visible:ring-2 peer-focus-visible:ring-tof-yellow">
                {option}
              </span>
            </label>
          ))}
        </div>
      </fieldset>
      <fieldset>
        <legend className="mb-2 text-sm font-semibold text-tof-indigo">I&apos;m interested in... *</legend>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {interests.map((option) => (
            <label key={option} className="cursor-pointer">
              <input type="radio" name="interest" value={option} required className="peer sr-only" />
              <span className="flex min-h-11 items-center justify-center rounded-full border border-tof-indigo/15 bg-[#F7F7F8] px-3 py-2 text-center text-sm font-semibold text-tof-indigo transition peer-checked:border-tof-indigo peer-checked:bg-tof-indigo peer-checked:text-tof-yellow peer-focus-visible:ring-2 peer-focus-visible:ring-tof-yellow">
                {option}
              </span>
            </label>
          ))}
        </div>
      </fieldset>
      <label className="block">
        <span className="mb-1.5 block text-sm font-semibold text-tof-indigo">Your message</span>
        <textarea
          name="message"
          rows={5}
          placeholder="Tell us a little about your organisation and how we can help."
          className={`${fieldClass} h-auto py-3`}
        />
      </label>
      <label className="flex items-start gap-3 pt-1">
        <input name="consent" type="checkbox" required className="mt-0.5 h-4 w-4 shrink-0 accent-tof-indigo" />
        <span className="text-sm leading-relaxed text-tof-indigo/80">
          I have read the{' '}
          <a href="/privacy" className="font-semibold underline underline-offset-2">
            Privacy policy
          </a>{' '}
          and agree to the processing of my personal data to respond to my inquiry.
        </span>
      </label>
      {error && <p className="text-sm font-semibold text-red-700">{error}</p>}
      <button
        type="submit"
        disabled={sending}
        className="inline-flex w-full items-center justify-center rounded-full bg-tof-yellow px-6 py-3.5 text-base font-semibold text-tof-indigo transition hover:bg-tof-yellow/90 disabled:opacity-60"
      >
        {sending ? 'Sending…' : 'Send message'}
      </button>
      <p className="text-xs leading-relaxed text-tof-indigo/60">
        We use your information to respond to your inquiry. See our{' '}
        <a href="/privacy" className="underline underline-offset-2">
          Privacy policy
        </a>{' '}
        for more information.
      </p>
    </form>
  );
};

const ContactPage = () => {
  return (
    <div className="bg-white pt-20 text-tof-indigo">
      <SubpageHero route="/contact" />

      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className={eyebrow}>Get in touch</p>
          <h1 className={`mt-4 ${heading}`}>Let&apos;s bring TOF to your organisation.</h1>
          <div className={`mt-6 space-y-4 ${body}`}>
            <p>
              Whether you&apos;re an individual coach, managing a tennis academy or representing a
              national federation, we&apos;d love to hear from you.
            </p>
            <p>
              Have a question about the TOF platform, our licensing options or opportunities to work
              together? Tell us a little about yourself and our team will help you take the next
              step.
            </p>
          </div>
        </div>
      </section>

      <section id="form" className="scroll-mt-24 bg-white pb-16 md:pb-24">
        <div className="container mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className={eyebrow}>Contact TOF international</p>
            <h2 className={`mt-4 ${heading}`}>How can we help you?</h2>
            <p className={`mt-6 ${body}`}>
              Fill out the form below and we&apos;ll get back to you as soon as possible.
            </p>
          </div>
          <div className="mt-10 bg-[#F3F3F5] p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="bg-white pb-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className={eyebrow}>Direct contact</p>
            <h2 className={`mt-4 ${heading}`}>Prefer to contact us directly?</h2>
            <p className={`mt-6 ${body}`}>
              Our team is happy to answer questions about TOF sports international, licensing and
              collaboration opportunities.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
            <article className="bg-[#F3F3F5] p-6 md:p-8">
              <h3 className="font-heading text-xl font-semibold text-tof-indigo md:text-2xl">Email</h3>
              <a
                href="mailto:info@tofsports.nl"
                className="mt-3 inline-block text-base font-semibold text-tof-indigo underline underline-offset-2 md:text-lg"
              >
                info@tofsports.nl
              </a>
              <p className="mt-3 text-sm leading-relaxed text-tof-indigo/80 md:text-base">
                For general inquiries, licensing questions and international partnerships.
              </p>
            </article>
            <article className="bg-[#F3F3F5] p-6 md:p-8">
              <h3 className="font-heading text-xl font-semibold text-tof-indigo md:text-2xl">
                Based in the Netherlands
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-tof-indigo/80 md:text-base">
                TOF sports originated in the Netherlands and is expanding internationally.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-tof-indigo/80 md:text-base">
                We work with coaches, clubs and sport organisations across different countries.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white pb-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F3F3F5] px-6 py-14 sm:px-10 md:px-16 md:py-20">
            <p className={`${eyebrow} text-center`}>Not sure where to start?</p>
            <h2 className={`mx-auto mt-4 max-w-3xl text-center ${heading}`}>
              Explore our licensing options.
            </h2>
            <p className={`mx-auto mt-6 max-w-3xl text-center ${body}`}>
              TOF offers three licensing models, designed to support different levels of coaching and
              organisational development.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
              {solutions.map((item) => (
                <article key={item.title} className="flex h-full flex-col bg-white p-6 md:p-8">
                  <h3 className="font-heading text-2xl font-semibold text-tof-indigo">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-tof-indigo/80 md:text-base">{item.text}</p>
                  <p className="mt-auto min-h-[3.5rem] pt-6 font-heading text-xl font-semibold text-tof-indigo">
                    {item.price}
                  </p>
                  <div className="pt-8">
                    <a href={item.href} className={`${yellowButton} h-12 whitespace-nowrap md:h-14`}>
                      {item.cta}
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F3F3F5] px-6 py-14 text-center sm:px-10 md:px-16 md:py-20">
            <p className={eyebrow}>Discover the TOF platform</p>
            <h2 className={`mt-4 ${heading}`}>Want to see how TOF works?</h2>
            <p className={`mx-auto mt-6 max-w-3xl ${body}`}>
              Explore the TOF digital platform and discover how our framework connects coaching
              resources, player development and organisation management.
            </p>
            <a href="/platform" className={`${yellowButton} mt-8`}>
              Explore the platform
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
