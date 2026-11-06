'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import SubpageHero from '@/components/SubpageHero';

const eyebrow = 'text-xs font-semibold tracking-[0.18em] text-tof-indigo/70 sm:text-sm';
const heading =
  'font-heading text-3xl font-semibold tracking-tight text-tof-indigo md:text-4xl lg:text-[2.75rem]';
const yellowButton =
  'inline-flex items-center justify-center rounded-full bg-tof-yellow px-6 py-3 text-sm font-semibold text-tof-indigo transition hover:bg-tof-yellow/90 md:px-7 md:py-3.5 md:text-base';

const startPrices = [
  ['1 sport', '€7.50'],
  ['2 sports', '€12.50'],
  ['3 sports', '€15.00'],
];

const growPrices = [
  ['0–30', '€2,500', '1 day'],
  ['31–100', '€3,000', '2 days'],
  ['101–250', '€5,000', '2.5 days'],
  ['251–500', '€7,500', '4 days'],
  ['501–1,000', '€12,500', '7 days'],
  ['More than 1,000', '€20,000', 'On request'],
];

const comparison = [
  ['TOF methodology', '✓', '✓', '✓'],
  ['English-language app', '✓', '✓', '✓'],
  ['Own language', '—', 'Add-on', '✓'],
  ['Club management', '—', '✓', '✓'],
  ['Trainer management', '—', '✓', '✓'],
  ['Player management', '—', '✓', '✓'],
  ['Organisation branding', '—', '✓', '✓'],
  ['Data exports', '—', '✓', '✓'],
  ['Implementation support', '—', '✓', '✓'],
  ['Key-trainer programme', '—', '—', '✓'],
  ['Own dashboard', '—', '—', '✓'],
  ['Own database', '—', '—', '✓'],
  ['Own video content', '—', 'Add-on', '✓'],
  ['Own content library', '—', 'Add-on', '✓'],
  ['Integrations & APIs', '—', '—', '✓'],
  ['Custom development', '—', '—', '✓'],
];

const licenseOptions = [
  'Start — individual coach',
  'Grow — organisation license',
  'Lead — strategic partner',
  'Not sure yet',
];

const fieldClass =
  'h-12 w-full rounded-xl border border-tof-indigo/15 bg-[#F7F7F8] px-4 text-sm text-tof-indigo placeholder:text-tof-indigo/40 focus:border-tof-indigo focus:bg-white focus:outline-none focus:ring-2 focus:ring-tof-yellow';

const LicenseRequestForm = () => {
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
        Thank you for your interest in TOF sports! We&apos;ve received your request and will be in
        touch.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-tof-indigo">Full name</span>
          <input name="name" type="text" required autoComplete="name" className={fieldClass} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-tof-indigo">Email address</span>
          <input name="email" type="email" required autoComplete="email" className={fieldClass} />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-tof-indigo">
            Organisation / club <span className="font-normal text-tof-indigo/50">(optional)</span>
          </span>
          <input name="organisation" type="text" autoComplete="organization" className={fieldClass} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-tof-indigo">Country</span>
          <input name="country" type="text" required autoComplete="country-name" className={fieldClass} />
        </label>
      </div>
      <fieldset>
        <legend className="mb-2 text-sm font-semibold text-tof-indigo">
          Which license are you interested in?
        </legend>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {licenseOptions.map((option) => (
            <label key={option} className="cursor-pointer">
              <input type="radio" name="role" value={option} required className="peer sr-only" />
              <span className="flex min-h-11 items-center justify-center rounded-full border border-tof-indigo/15 bg-[#F7F7F8] px-3 py-2 text-center text-sm font-semibold text-tof-indigo transition peer-checked:border-tof-indigo peer-checked:bg-tof-indigo peer-checked:text-tof-yellow peer-focus-visible:ring-2 peer-focus-visible:ring-tof-yellow">
                {option}
              </span>
            </label>
          ))}
        </div>
      </fieldset>
      <label className="block">
        <span className="mb-1.5 block text-sm font-semibold text-tof-indigo">
          Message <span className="font-normal text-tof-indigo/50">(optional)</span>
        </span>
        <textarea name="message" rows={4} className={`${fieldClass} h-auto py-3`} />
      </label>
      <label className="flex items-start gap-3 pt-1">
        <input name="consent" type="checkbox" required className="mt-0.5 h-4 w-4 shrink-0 accent-tof-indigo" />
        <span className="text-sm leading-relaxed text-tof-indigo/80">
          I agree to the{' '}
          <a href="/privacy" className="font-semibold underline underline-offset-2">
            Privacy policy
          </a>{' '}
          and consent to TOF sports contacting me about my inquiry.
        </span>
      </label>
      {error && <p className="text-sm font-semibold text-red-700">{error}</p>}
      <button
        type="submit"
        disabled={sending}
        className="inline-flex w-full items-center justify-center rounded-full bg-tof-yellow px-6 py-3.5 text-base font-semibold text-tof-indigo transition hover:bg-tof-yellow/90 disabled:opacity-60"
      >
        {sending ? 'Sending…' : 'Request your TOF license'}
      </button>
    </form>
  );
};

const CheckList = ({ items, className = 'text-tof-indigo/80', onDark = false, compact = false }) => (
  <ul
    className={`${compact ? 'mt-4 space-y-2.5 text-sm' : 'mt-5 space-y-3 text-sm md:text-base'} leading-relaxed ${className}`}
  >
    {items.map((item) => (
      <li key={item} className="flex items-start gap-3">
        <span
          className={`mt-0.5 flex shrink-0 items-center justify-center rounded-full ${
            compact ? 'h-6 w-6' : 'h-8 w-8'
          } ${onDark ? 'bg-tof-yellow' : 'bg-white'}`}
        >
          <Image
            src="/icon-check.png"
            alt=""
            width={22}
            height={22}
            className={`${compact ? 'h-3.5 w-3.5' : 'h-5 w-5'} object-contain`}
          />
        </span>
        <span className={compact ? 'pt-0.5' : 'pt-1'}>{item}</span>
      </li>
    ))}
  </ul>
);

const planCards = [
  {
    id: 'start',
    kicker: 'Start',
    title: 'Individual coaches, trainers and teachers',
    text: 'Personal account with the English-language app and the sports you coach.',
    price: 'From €7.50/month',
    items: [
      'TOF methodology & branding',
      'TOF app (English version)',
      'Access to your selected sport(s)',
      'Personal account',
      'Continuous product updates',
    ],
    cta: 'Start using TOF',
  },
  {
    id: 'grow',
    kicker: 'Grow',
    title: 'Clubs, schools, academies and organisations',
    text: 'Shared digital environment with management, branding and implementation support.',
    price: 'From €2,500/year',
    items: [
      'Club, trainer & player management',
      'Organisation name & logo in the app',
      'English-language coaching videos',
      'Player data exports',
      'Implementation support',
    ],
    cta: 'Bring TOF to your organisation',
  },
  {
    id: 'lead',
    kicker: 'Lead',
    title: 'National federations and strategic partners',
    text: 'Fully branded, localised TOF ecosystem for national development programmes.',
    price: 'Custom licensing',
    items: [
      'Dedicated environment & database',
      'Localisation & organisation branding',
      'Own content, videos and pathways',
      'Key-trainer programme',
      'Strategic partner consultation',
    ],
    cta: 'Contact us about Lead',
  },
];

const LicensesPage = () => {
  return (
    <div className="bg-white pt-20 text-tof-indigo">
      <SubpageHero route="/licenses" />

      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className={eyebrow}>Start • grow • lead</p>
          <h1 className={`mt-4 ${heading}`}>One framework. Three ways to grow.</h1>
          <p className="mt-6 text-base leading-relaxed text-tof-indigo/80 md:text-lg md:leading-8">
            From individual coaches to national federations, TOF sports international offers scalable
            licensing solutions for tennis, padel and wheelchair tennis.
          </p>
          <p className="mt-4 text-base leading-relaxed text-tof-indigo/80 md:text-lg md:leading-8">
            Whether you&apos;re looking for personal coaching tools, an organisation-wide platform or
            a fully customised national development ecosystem, there&apos;s a TOF license for you.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#plans" className={yellowButton}>
              Compare licenses
            </a>
            <a
              href="#request"
              className="inline-flex items-center justify-center rounded-full border-2 border-tof-indigo px-6 py-3 text-sm font-semibold text-tof-indigo transition hover:bg-tof-indigo hover:text-tof-yellow md:px-7 md:py-3.5 md:text-base"
            >
              Contact our team
            </a>
          </div>
        </div>
      </section>

      <section id="plans" className="scroll-mt-24 pb-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className={eyebrow}>Choose your TOF license</p>
            <h2 className={`mt-4 ${heading}`}>Find the right solution for you.</h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-5">
            {planCards.map((plan) => (
              <article
                key={plan.id}
                id={plan.id}
                className="scroll-mt-28 flex h-full flex-col bg-tof-indigo p-6 text-white md:p-8"
              >
                <p className="text-xs font-semibold tracking-[0.18em] text-tof-yellow sm:text-sm">
                  {plan.kicker}
                </p>
                <h3 className="mt-3 font-heading text-2xl font-semibold text-white">{plan.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/85 md:text-base">{plan.text}</p>
                <p className="mt-6 font-heading text-xl font-semibold text-tof-yellow">{plan.price}</p>
                <CheckList compact onDark className="text-white/85" items={plan.items} />
                <div className="mt-auto flex flex-col gap-3 pt-8">
                  <a href="#request" className={`${yellowButton} h-12`}>
                    {plan.cta}
                  </a>
                  <a
                    href={`#details-${plan.id}`}
                    className="text-center text-sm font-semibold text-tof-yellow underline underline-offset-2"
                  >
                    View full details
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="compare" className="scroll-mt-24 bg-[#F3F3F5] py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className={eyebrow}>Feature comparison</p>
            <h2 className={`mt-4 ${heading}`}>Compare what&apos;s included.</h2>
          </div>
          <div className="mx-auto mt-10 max-w-5xl overflow-x-auto">
            <table className="w-full min-w-[40rem] text-left text-sm md:text-base">
              <thead>
                <tr className="border-b border-tof-indigo/20">
                  <th className="py-3 pr-4 font-semibold">Feature</th>
                  <th className="px-3 py-3 text-center font-semibold">Start</th>
                  <th className="px-3 py-3 text-center font-semibold">Grow</th>
                  <th className="px-3 py-3 text-center font-semibold">Lead</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map(([feature, start, grow, lead]) => (
                  <tr key={feature} className="border-b border-tof-indigo/10">
                    <td className="py-3 pr-4">{feature}</td>
                    <td className="px-3 py-3 text-center">{start}</td>
                    <td className="px-3 py-3 text-center">{grow}</td>
                    <td className="px-3 py-3 text-center">{lead}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="details" className="scroll-mt-24 bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className={eyebrow}>Full details & pricing</p>
            <h2 className={`mt-4 ${heading}`}>Everything included in each license.</h2>
          </div>

          <article
            id="details-start"
            className="scroll-mt-28 mx-auto mt-14 max-w-4xl bg-[#F3F3F5] px-6 py-10 sm:px-10 md:px-14 md:py-14"
          >
            <p className={eyebrow}>Start — individual coach license</p>
            <h3 className="mt-3 font-heading text-2xl font-semibold text-tof-indigo md:text-3xl">
              For individual coaches, trainers and teachers.
            </h3>
            <p className="mt-4 text-base leading-relaxed text-tof-indigo/80 md:text-lg">
              Get started with TOF through a personal account, access to the English-language app and
              the sports you coach.
            </p>
            <p className="mt-4 font-heading text-2xl font-semibold">Starting at €7.50/month</p>
            <h4 className="mt-8 font-semibold text-tof-indigo">What&apos;s included</h4>
            <CheckList
              items={[
                'TOF methodology & branding',
                'TOF app (English version)',
                'Access to your selected sport(s)',
                'Personal account',
                'Continuous product updates',
              ]}
            />
            <h4 className="mt-8 font-semibold text-tof-indigo">Monthly pricing</h4>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full min-w-[20rem] text-left text-sm md:text-base">
                <thead>
                  <tr className="border-b border-tof-indigo/15">
                    <th className="py-2 pr-4 font-semibold">Sports</th>
                    <th className="py-2 text-right font-semibold">Monthly price</th>
                  </tr>
                </thead>
                <tbody>
                  {startPrices.map(([sports, price]) => (
                    <tr key={sports} className="border-b border-tof-indigo/10">
                      <td className="py-2 pr-4">{sports}</td>
                      <td className="py-2 text-right">{price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <h4 className="mt-8 font-semibold text-tof-indigo">Optional extras</h4>
            <CheckList items={['TOF handbooks (English)', 'TOF player cards (English)']} />
            <a href="#request" className={`${yellowButton} mt-8`}>
              Start using TOF
            </a>
          </article>

          <article
            id="details-grow"
            className="scroll-mt-28 mx-auto mt-8 max-w-4xl bg-tof-yellow px-6 py-10 sm:px-10 md:px-14 md:py-14"
          >
            <p className={eyebrow}>Grow — organisation license pack</p>
            <h3 className="mt-3 font-heading text-2xl font-semibold text-tof-indigo md:text-3xl">
              For clubs, schools, academies and sport organisations.
            </h3>
            <p className="mt-4 text-base leading-relaxed text-tof-indigo/80 md:text-lg">
              Bring your players and coaches together in one digital environment, with organisation
              management, branding and implementation support.
            </p>
            <p className="mt-4 font-heading text-2xl font-semibold">Starting at €2,500/year</p>
            <h4 className="mt-8 font-semibold text-tof-indigo">What&apos;s included</h4>
            <CheckList
              items={[
                'TOF app & TOF branding',
                'Club, trainer & player management',
                'Organisation name & logo in the app',
                'English-language coaching videos',
                'Player data exports',
                'Implementation support from TOF specialists',
              ]}
            />
            <h4 className="mt-8 font-semibold text-tof-indigo">
              Annual pricing, including implementation
            </h4>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full min-w-[28rem] text-left text-sm md:text-base">
                <thead>
                  <tr className="border-b border-tof-indigo/20">
                    <th className="py-2 pr-4 font-semibold">Users</th>
                    <th className="py-2 pr-4 text-right font-semibold">Price / year</th>
                    <th className="py-2 text-right font-semibold">Implementation</th>
                  </tr>
                </thead>
                <tbody>
                  {growPrices.map(([users, price, days]) => (
                    <tr key={users} className="border-b border-tof-indigo/10">
                      <td className="py-2 pr-4">{users}</td>
                      <td className="py-2 pr-4 text-right">{price}</td>
                      <td className="py-2 text-right">{days}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <h4 className="mt-8 font-semibold text-tof-indigo">Available add-ons</h4>
            <CheckList
              items={[
                'Your own language',
                'Your own branding',
                'TOF handbooks & player cards',
                'Coaching videos in your own language',
                'Additional implementation support',
              ]}
            />
            <a
              href="#request"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-tof-indigo px-6 py-3 text-sm font-semibold text-tof-yellow transition hover:bg-tof-indigo/90 md:px-7 md:py-3.5 md:text-base"
            >
              Bring TOF to your organisation
            </a>
          </article>

          <article
            id="details-lead"
            className="scroll-mt-28 mx-auto mt-8 max-w-4xl bg-tof-indigo p-6 text-white md:p-10"
          >
            <p className="text-xs font-semibold tracking-[0.18em] text-tof-yellow sm:text-sm">
              Lead — strategic partner license
            </p>
            <h3 className="mt-3 font-heading text-2xl font-semibold text-white md:text-3xl">
              For national federations and strategic organisations.
            </h3>
            <p className="mt-4 text-base leading-relaxed text-white/85 md:text-lg">
              Build a fully branded and localised TOF ecosystem that supports your national player
              development strategy, coach education and long-term growth.
            </p>
            <p className="mt-4 font-heading text-2xl font-semibold text-tof-yellow">
              Custom implementation and licensing
            </p>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div>
                <h4 className="font-semibold text-tof-yellow">Platform & management</h4>
                <CheckList
                  onDark
                  className="text-white/85"
                  items={[
                    'Dedicated TOF environment and database',
                    'Full club, trainer & player management',
                    'Custom dashboard and reporting',
                    'Roles and permissions',
                    'Data exports and integrations',
                  ]}
                />
              </div>
              <div>
                <h4 className="font-semibold text-tof-yellow">Localisation & branding</h4>
                <CheckList
                  onDark
                  className="text-white/85"
                  items={[
                    'TOF framework in your preferred language',
                    'Translation of core content',
                    'Coaching videos in your own language',
                    'Branded handbooks and player cards',
                    'Organisation branding within the app',
                  ]}
                />
              </div>
              <div>
                <h4 className="font-semibold text-tof-yellow">Content & development</h4>
                <CheckList
                  onDark
                  className="text-white/85"
                  items={[
                    'Add your own coaching content, videos and programmes',
                    'Build your own learning pathways and exercise library',
                    'Support national development programmes',
                  ]}
                />
              </div>
              <div>
                <h4 className="font-semibold text-tof-yellow">Implementation & support</h4>
                <CheckList
                  onDark
                  className="text-white/85"
                  items={[
                    'Full implementation by TOF specialists',
                    'Key-trainer and train-the-trainer programme',
                    'Strategic onboarding',
                    'Adoption and growth support',
                    'Strategic partner consultation',
                    'Influence on product development',
                    'Financial benefits from co-development',
                  ]}
                />
              </div>
            </div>
            <h4 className="mt-10 font-semibold text-tof-yellow">Initial investment, one-off</h4>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full min-w-[24rem] text-left text-sm text-white/90 md:text-base">
                <tbody>
                  <tr className="border-b border-white/15">
                    <td className="py-2 pr-4">Partner setup & localisation</td>
                    <td className="py-2 text-right">€30,000–€50,000</td>
                  </tr>
                  <tr className="border-b border-white/15">
                    <td className="py-2 pr-4">Digital environment development</td>
                    <td className="py-2 text-right">€14,000</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-semibold text-white">Total initial investment</td>
                    <td className="py-2 text-right font-semibold text-tof-yellow">€44,000–€64,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h4 className="mt-8 font-semibold text-tof-yellow">Annual costs</h4>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full min-w-[24rem] text-left text-sm text-white/90 md:text-base">
                <tbody>
                  <tr className="border-b border-white/15">
                    <td className="py-2 pr-4">Strategic partner license</td>
                    <td className="py-2 text-right">€10,000</td>
                  </tr>
                  <tr className="border-b border-white/15">
                    <td className="py-2 pr-4">Hosting & maintenance</td>
                    <td className="py-2 text-right">€3,000–€5,000</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-semibold text-white">Total annual costs</td>
                    <td className="py-2 text-right font-semibold text-tof-yellow">€13,000–€15,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h4 className="mt-8 font-semibold text-tof-yellow">Optional investments</h4>
            <CheckList
              onDark
              className="text-white/85"
              items={[
                'Integrations & APIs',
                'Custom functionalities',
                'National reporting',
                'Custom dashboards',
                'Priority product development',
                'Additional languages',
              ]}
            />
            <a href="#request" className={`${yellowButton} mt-8`}>
              Contact us about strategic licensing
            </a>
          </article>
        </div>
      </section>

      <section id="request" className="scroll-mt-24 bg-white pb-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-10 bg-[#F3F3F5] px-6 py-10 sm:px-10 md:grid-cols-2 md:gap-16 md:px-14 md:py-16">
            <div>
              <p className={eyebrow}>Bring TOF to your organisation</p>
              <h2 className={`mt-4 ${heading}`}>Ready to get started with TOF?</h2>
              <p className="mt-6 text-base leading-relaxed text-tof-indigo/80 md:text-lg md:leading-8">
                Whether you&apos;re an independent coach, academy manager or national federation
                representative, we&apos;re here to help you find the right solution.
              </p>
              <p className="mt-4 text-base leading-relaxed text-tof-indigo/80 md:text-lg md:leading-8">
                Select your preferred license and leave your details. Our team will get in touch to
                discuss the next steps.
              </p>
            </div>
            <div className="bg-white p-6 sm:p-8">
              <LicenseRequestForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LicensesPage;
