'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';

const pillars = [
  { lines: ['Play', 'More playing'] },
  { lines: ['Learn', 'Clear objectives'] },
  { lines: ['Earn', 'TOF Score'] },
];

const stories = [
  {
    title: 'More play moments',
    text: 'Children develop faster when fun, challenge and repetition come together on court. TOF Sports motivates juniors to join club activities where playful formats and challenges meet — learning and playing together.',
    cta: 'Read more about play moments',
    href: '#method',
    image:
      'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/waarom%20tof%20500.jpg',
    imageAlt: 'Juniors playing and training at the club',
  },
  {
    title: 'More engagement',
    text: 'Through game formats, challenges and TOF Score, juniors become more active and engaged — with more interaction between players, coaches and the club.',
    cta: 'Read more about engagement',
    href: '#about',
    image:
      'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/waarom%20tof%20500kb.jpg',
    imageAlt: 'Children actively involved at the club',
  },
  {
    title: 'Less preparation',
    text: 'With ready-to-use formats, materials and tools, coaches always have enough inspiration and structure for engaging sessions and activities.',
    cta: 'Read more about supporting coaches',
    href: '#interest',
    image:
      'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/Waarom%20TOF.jpg',
    imageAlt: 'Coaches using TOF formats at the club',
  },
];

const roles = ['Coach', 'Club', 'Academy', 'Other'];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-8%' },
  transition: { duration: 0.5 },
};

const InterestForm = () => {
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
      country: form.country.value.trim(),
      role: form.role.value,
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
        Thank you for your interest in TOF Sports! We&apos;ll be in touch.
      </p>
    );
  }

  const fieldClass =
    'h-12 w-full rounded-xl border border-tof-indigo/15 bg-[#F7F7F8] px-4 text-sm text-tof-indigo placeholder:text-tof-indigo/40 focus:border-tof-indigo focus:bg-white focus:outline-none focus:ring-2 focus:ring-tof-yellow';

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-tof-indigo">Name</span>
          <input name="name" type="text" required autoComplete="name" className={fieldClass} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-tof-indigo">Country</span>
          <input
            name="country"
            type="text"
            required
            autoComplete="country-name"
            className={fieldClass}
          />
        </label>
      </div>
      <label className="block">
        <span className="mb-1.5 block text-sm font-semibold text-tof-indigo">Email address</span>
        <input name="email" type="email" required autoComplete="email" className={fieldClass} />
      </label>
      <fieldset>
        <legend className="mb-2 text-sm font-semibold text-tof-indigo">I am a</legend>
        <div className="grid grid-cols-2 gap-2">
          {roles.map((role) => (
            <label key={role} className="cursor-pointer">
              <input type="radio" name="role" value={role} required className="peer sr-only" />
              <span className="flex h-11 items-center justify-center rounded-full border border-tof-indigo/15 bg-[#F7F7F8] text-sm font-semibold text-tof-indigo transition peer-checked:border-tof-indigo peer-checked:bg-tof-indigo peer-checked:text-tof-yellow peer-focus-visible:ring-2 peer-focus-visible:ring-tof-yellow">
                {role}
              </span>
            </label>
          ))}
        </div>
      </fieldset>
      <label className="flex items-start gap-3 pt-1">
        <input
          name="consent"
          type="checkbox"
          required
          className="mt-0.5 h-4 w-4 shrink-0 accent-tof-indigo"
        />
        <span className="text-sm leading-relaxed text-tof-indigo/80">
          I agree to the{' '}
          <a
            href="/terms"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-tof-indigo underline decoration-tof-indigo/30 underline-offset-2 hover:decoration-tof-indigo"
          >
            terms and conditions
          </a>{' '}
          and the{' '}
          <a
            href="/privacy"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-tof-indigo underline decoration-tof-indigo/30 underline-offset-2 hover:decoration-tof-indigo"
          >
            privacy policy
          </a>
          .
        </span>
      </label>
      {error && <p className="text-sm font-semibold text-red-700">{error}</p>}
      <button
        type="submit"
        disabled={sending}
        className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-tof-yellow px-6 py-3.5 text-base font-semibold text-tof-indigo transition hover:bg-tof-yellow/90 disabled:opacity-60"
      >
        {sending ? 'Sending…' : 'Register Your Interest'}
      </button>
    </form>
  );
};

const HomePage = () => {
  return (
    <>
      <HeroSection />

      <section id="discover" className="scroll-mt-24 bg-white pb-6 pt-12 md:pb-8 md:pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
            <div className="space-y-4 text-base leading-relaxed text-tof-indigo/80 md:text-lg md:leading-8">
              <p>
                TOF Sports provides tennis and padel coaches, clubs and academies with practical
                tools, structured development methods and engaging activities that encourage young
                players to keep playing and improving.
              </p>
              <p>
                From the TOF Matrix to the TOF Teachers App, everything is designed to support
                coaches and make player development more engaging.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="method" className="scroll-mt-24 bg-white pb-16 pt-8 md:pb-24 md:pt-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="bg-tof-yellow px-6 py-14 sm:px-10 sm:py-16 md:px-16 md:py-20">
            <h2 className="mx-auto max-w-3xl text-center font-heading text-3xl font-semibold tracking-tight text-tof-indigo md:text-4xl lg:text-[2.75rem]">
              More than a weekly training session.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-tof-indigo/80 md:text-lg md:leading-8">
              At TOF Sports, we believe young players develop best when sport is about more than
              one lesson a week. Our method combines structured learning, enjoyable playing
              opportunities and participation-based rewards to help children develop their skills,
              confidence and connection to their club.
            </p>

            <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-12 sm:mt-14 sm:grid-cols-3 sm:gap-8 md:mt-16 md:gap-12">
              {pillars.map((item, index) => (
                <motion.article
                  key={item.lines[0]}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.22, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-sm sm:h-28 sm:w-28 md:mb-6 md:h-32 md:w-32">
                    <Image
                      src="/icon-check.png"
                      alt=""
                      width={72}
                      height={72}
                      className="h-12 w-12 object-contain sm:h-14 sm:w-14 md:h-16 md:w-16"
                    />
                  </div>
                  <h3 className="font-heading text-xl font-semibold leading-snug text-tof-indigo md:text-2xl">
                    {item.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </h3>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white pb-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-10 md:gap-12 lg:gap-14">
            {stories.map((card, index) => {
              const imageOnLeft = index % 2 === 1;
              return (
                <motion.article
                  key={card.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="grid overflow-hidden md:grid-cols-2"
                >
                  <div
                    className={`relative aspect-[16/10] w-full md:aspect-auto md:min-h-[320px] lg:min-h-[380px] ${
                      imageOnLeft ? 'md:order-1' : 'md:order-2'
                    }`}
                  >
                    <Image
                      src={card.image}
                      alt={card.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div
                    className={`flex flex-col justify-center bg-[#F3F3F5] px-8 py-10 sm:px-12 sm:py-12 md:px-14 lg:px-16 lg:py-16 ${
                      imageOnLeft ? 'md:order-2' : 'md:order-1'
                    }`}
                  >
                    <Image
                      src="/icon-check.png"
                      alt=""
                      width={56}
                      height={56}
                      className="mb-5 h-10 w-10 object-contain md:mb-6 md:h-12 md:w-12"
                    />
                    <h3 className="font-heading text-2xl font-semibold tracking-tight text-tof-indigo md:text-3xl">
                      {card.title}
                    </h3>
                    <p className="mt-4 max-w-md text-base leading-relaxed text-tof-indigo/75 md:mt-5 md:text-lg md:leading-8">
                      {card.text}
                    </p>
                    <a
                      href={card.href}
                      className="mt-8 inline-flex w-fit items-center rounded-full bg-tof-yellow px-6 py-3 text-sm font-semibold text-tof-indigo transition hover:bg-tof-yellow/90 md:mt-10 md:px-7 md:py-3.5 md:text-base"
                    >
                      {card.cta}
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="interest" className="scroll-mt-24 bg-tof-yellow py-16 md:py-24">
        <div
          id="contact"
          className="container mx-auto grid scroll-mt-24 items-center gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,28rem)] lg:gap-16 lg:px-8"
        >
          <motion.div {...fadeUp}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-tof-indigo/70 sm:text-sm">
              TOF Sports International
            </p>
            <h2 className="mt-4 max-w-xl font-heading text-3xl font-semibold tracking-tight text-tof-indigo md:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Bring TOF to your club or academy.
            </h2>
            <div className="mt-6 max-w-xl space-y-4 text-base leading-relaxed text-tof-indigo/80 md:text-lg md:leading-8">
              <p>TOF Sports is expanding internationally.</p>
              <p>
                Are you a tennis or padel coach, club manager or academy owner interested in
                bringing TOF to your training program?
              </p>
              <p>
                Leave your details and we&apos;ll keep you informed about international availability
                and opportunities to work with TOF Sports.
              </p>
            </div>
          </motion.div>
          <motion.div
            {...fadeUp}
            className="rounded-[24px] bg-white p-6 shadow-[0_16px_40px_rgba(30,20,70,0.12)] sm:p-8"
          >
            <InterestForm />
          </motion.div>
        </div>
      </section>

      <section id="about" className="scroll-mt-24 bg-tof-indigo py-16 md:py-24 lg:py-28">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-tof-yellow sm:text-sm">
              About us
            </p>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-[2.75rem]">
              Built around the development of young players.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-white/90 md:text-lg md:leading-8">
              <p>
                TOF Sports originated in the Netherlands with a mission to make tennis and padel
                more engaging, accessible and enjoyable for young players.
              </p>
              <p>
                Through practical coaching tools, structured development methods and innovative
                playing formats, TOF helps coaches and clubs encourage children to become active,
                confident and motivated players.
              </p>
              <p>
                Our philosophy is built around three principles:{' '}
                <strong className="font-semibold text-tof-yellow">Play, Learn and Earn</strong>.
              </p>
              <p>
                And one long-term ambition: helping children stay involved in sport throughout the
                year, not just during their weekly lesson.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-tof-yellow py-14 md:py-20">
        <div className="container mx-auto flex justify-center px-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-tof-indigo px-8 py-3.5 text-base font-semibold text-tof-yellow transition hover:bg-tof-indigo/90 md:px-10 md:py-4 md:text-lg"
          >
            Register Your Interest
          </a>
        </div>
      </section>
    </>
  );
};

export default HomePage;
