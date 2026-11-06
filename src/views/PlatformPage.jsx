'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import SubpageHero from '@/components/SubpageHero';

const eyebrow = 'text-xs font-semibold tracking-[0.18em] text-tof-indigo/70 sm:text-sm';
const heading =
  'font-heading text-3xl font-semibold tracking-tight text-tof-indigo md:text-4xl lg:text-[2.75rem]';
const body = 'text-base leading-relaxed text-tof-indigo/80 md:text-lg md:leading-8';
const yellowButton =
  'inline-flex items-center justify-center rounded-full bg-tof-yellow px-6 py-3 text-sm font-semibold text-tof-indigo transition hover:bg-tof-yellow/90 md:px-7 md:py-3.5 md:text-base';
const outlineButton =
  'inline-flex items-center justify-center rounded-full border-2 border-tof-indigo px-6 py-3 text-sm font-semibold text-tof-indigo transition hover:bg-tof-indigo hover:text-tof-yellow md:px-7 md:py-3.5 md:text-base';

const AppShot = ({ src, alt, className = '' }) => (
  <div className={`overflow-hidden ${className}`}>
    <Image
      src={src}
      alt={alt}
      width={780}
      height={1688}
      className="mx-auto h-auto w-full max-w-[320px] object-contain md:max-w-[360px]"
      sizes="(max-width: 768px) 80vw, 360px"
      quality={90}
    />
  </div>
);

const introCards = [
  {
    title: 'Structured coaching',
    text: 'Access development objectives, instructional videos and coaching resources connected to the TOF methodology.',
  },
  {
    title: 'Player progression',
    text: 'Follow individual development through skill levels, mastered objectives and the interactive TOF Swirl.',
  },
  {
    title: 'Organisation management',
    text: 'Manage players, trainers, groups and clubs within a shared digital environment.',
  },
];

const swirlFeatures = [
  {
    title: 'Visual development pathway',
    text: 'Explore development phases and learning objectives through the interactive TOF Swirl.',
  },
  {
    title: 'Track mastered levels',
    text: 'Record completed skill levels and follow progress across the development framework.',
  },
  {
    title: 'Connected coaching videos',
    text: 'Access instructional content linked to development areas directly within the Swirl.',
  },
  {
    title: 'Flexible views',
    text: 'Switch between the interactive visualisation and a clear list of development phases and levels.',
  },
];

const resources = [
  'TOF methodology and development framework',
  'Interactive Swirl and development levels',
  'Coaching videos linked to development objectives',
  'Sport-specific coaching content',
  'Player progress tracking',
  'Structured development phases and learning objectives',
];

const progressCards = [
  {
    title: 'Mastered levels',
    text: 'Track the number of development levels players have completed over time.',
  },
  {
    title: 'Development overview',
    text: 'View player, group and progress information through an accessible dashboard.',
  },
  {
    title: 'Player advice',
    text: 'Work with development-level requirements and player advice to support consistent guidance.',
  },
  {
    title: 'Progress insights',
    text: 'Follow development activity through visual reports, including mastered levels over time.',
  },
];

const management = [
  {
    title: 'Player management',
    text: 'Organise players within your TOF environment and connect them to development activities.',
  },
  {
    title: 'Trainer management',
    text: 'Manage the coaches and trainers working within your organisation.',
  },
  {
    title: 'Club management',
    text: 'Create and manage clubs, with centralised access to club information and administration.',
  },
  {
    title: 'Group management',
    text: 'Organise players and coaching activities through groups within the platform.',
  },
  {
    title: 'Organisation overview',
    text: 'Access key figures covering players, trainers, clubs, groups and recent development activity.',
  },
  {
    title: 'Data export',
    text: 'Export supported club information in CSV format for administration and reporting.',
  },
];

const sports = [
  {
    title: 'Tennis',
    text: 'Work with development phases, skill levels and coaching resources designed for structured tennis development.',
  },
  {
    title: 'Padel',
    text: 'Access dedicated padel coaching content and development resources within the TOF environment.',
  },
  {
    title: 'Wheelchair tennis',
    text: 'Support wheelchair tennis development with specialist content and adapted coaching resources.',
  },
];

const scale = [
  {
    title: 'Your language',
    text: "Introduce TOF in your organisation's preferred language through available localisation options.",
  },
  {
    title: 'Your branding',
    text: "Create a recognisable environment with your organisation's identity and branding.",
  },
  {
    title: 'Your content',
    text: 'Strategic partners can explore adding their own coaching videos, development programmes and educational resources.',
  },
  {
    title: 'Your infrastructure',
    text: 'Dedicated environments, databases, dashboards and integrations can be considered within strategic partnership arrangements.',
  },
];

const access = [
  {
    title: 'Start — individual coaches',
    text: 'Access the TOF methodology, interactive development tools and coaching resources through a personal license.',
    price: 'From €7.50/month',
    cta: 'Explore start',
    href: '/licenses#start',
  },
  {
    title: 'Grow — clubs & academies',
    text: 'Bring coaches, players and groups together with shared development tools, organisation management and implementation support.',
    price: 'From €2,500/year',
    cta: 'Explore grow',
    href: '/licenses#grow',
  },
  {
    title: 'Lead — federations & strategic partners',
    text: 'Implement a tailored TOF ecosystem with localisation, branding, content management and strategic support.',
    price: 'Custom licensing',
    cta: 'Explore lead',
    href: '/licenses#lead',
  },
];

const faqs = [
  {
    q: 'What is the TOF platform?',
    a: 'The TOF platform is a digital environment that supports the TOF coaching methodology through interactive development tools, instructional resources, player progress tracking and organisation management.',
  },
  {
    q: 'What is the TOF Swirl?',
    a: 'The TOF Swirl is an interactive visual representation of development phases and learning objectives. Coaches can use it to explore skill levels, access supporting content and record mastered levels.',
  },
  {
    q: 'Can coaches track player development?',
    a: 'Yes. The platform includes tools for recording mastered levels and viewing development activity through dashboards and progress reports.',
  },
  {
    q: 'Does TOF support clubs and academies?',
    a: 'Yes. The platform includes functionality for managing players, trainers, groups and clubs. Access to organisational features depends on the selected license.',
  },
  {
    q: 'Can we use TOF for different sports?',
    a: 'TOF currently supports tennis, padel and wheelchair tennis through dedicated coaching and development content.',
  },
  {
    q: 'Can federations customise the platform?',
    a: 'TOF offers strategic licensing arrangements that can include localisation, branding, custom content and dedicated technical implementation. The exact scope is agreed individually.',
  },
];

const FaqItem = ({ item }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-tof-indigo/15">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-start justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-heading text-lg font-semibold text-tof-indigo md:text-xl">{item.q}</span>
        <span className="mt-1 text-xl font-semibold text-tof-indigo" aria-hidden>
          {open ? '−' : '+'}
        </span>
      </button>
      {open && <p className={`pb-5 ${body}`}>{item.a}</p>}
    </div>
  );
};

const PlatformPage = () => {
  return (
    <div className="bg-white pt-20 text-tof-indigo">
      <SubpageHero route="/platform" />

      {/* 1. Hero copy — text sticks and travels down while visuals scroll */}
      <section className="bg-white pb-16 pt-8 md:pb-24 md:pt-10">
        <div className="container mx-auto grid items-start gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className={eyebrow}>The TOF platform</p>
            <h1 className={`mt-4 ${heading}`}>One connected platform for player development.</h1>
            <div className={`mt-6 space-y-4 ${body}`}>
              <p>
                Bring the TOF methodology to life with interactive development tools, coaching
                resources and player progress tracking.
              </p>
              <p>
                From individual coaches to national federations, TOF connects learning objectives,
                player development and organisation management in one digital environment.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="/licenses" className={yellowButton}>
                Explore TOF licenses
              </a>
              <a href="#features" className={outlineButton}>
                Discover platform features
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <AppShot
              src="/platform/swirl.png"
              alt="TOF interactive Swirl showing development phases and learning objectives"
              className="flex justify-center"
            />
            <AppShot
              src="/platform/swirl-list.png"
              alt="TOF Swirl list view with development phases"
              className="flex justify-center"
            />
          </div>
        </div>
      </section>

      {/* 2. Platform introduction */}
      <section id="features" className="scroll-mt-24 bg-white pb-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className={eyebrow}>Training • objectives • framework</p>
            <h2 className={`mt-4 ${heading}`}>From coaching methodology to measurable progress.</h2>
            <div className={`mt-6 space-y-4 ${body}`}>
              <p>
                The TOF platform connects the development framework with everyday coaching
                activities.
              </p>
              <p>
                Coaches can work with structured learning objectives, track mastered levels and
                access practical resources to support each player&apos;s development.
              </p>
              <p>
                For clubs and organisations, the same environment brings players, trainers and club
                management together, creating a shared approach to coaching and progression.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
            {introCards.map((item) => (
              <article key={item.title} className="bg-[#F3F3F5] p-6 md:p-8">
                <h3 className="font-heading text-xl font-semibold text-tof-indigo md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-tof-indigo/80 md:text-base">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Interactive Swirl */}
      <section id="swirl" className="scroll-mt-24 bg-white pb-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className={eyebrow}>Built for player development</p>
            <h2 className={`mt-4 ${heading}`}>Make every step of progress visible.</h2>
            <div className={`mt-6 space-y-4 ${body}`}>
              <p>
                The TOF Swirl transforms the development methodology into an interactive, visual
                experience.
              </p>
              <p>
                Organised around development phases and learning objectives, the Swirl helps coaches
                work through individual skills and record progress as players master new levels.
              </p>
              <p>
                Switch between the visual Swirl and a structured list view to explore development
                objectives, access supporting videos and follow the learning journey.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
            <AppShot
              src="/platform/swirl.png"
              alt="Interactive TOF Swirl with development phases and skill levels"
              className="flex justify-center py-6"
            />
            <AppShot
              src="/platform/swirl-list.png"
              alt="TOF Swirl list view showing development phases with video icons"
              className="flex justify-center py-6"
            />
          </div>

          <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
            {swirlFeatures.map((item) => (
              <article key={item.title} className="bg-[#F3F3F5] p-6 md:p-8">
                <h3 className="font-heading text-xl font-semibold text-tof-indigo md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-tof-indigo/80 md:text-base">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
          <p className={`mx-auto mt-10 max-w-3xl text-center font-semibold text-tof-indigo`}>
            A clearer view of what players have achieved and what comes next.
          </p>
        </div>
      </section>

      {/* 4. Coaching resources */}
      <section className="bg-white pb-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid overflow-hidden md:grid-cols-2">
            <div className="flex flex-col justify-center bg-[#F3F3F5] px-6 py-10 sm:px-10 md:px-14 md:py-16">
              <p className={eyebrow}>Built for coaches</p>
              <h2 className={`mt-4 ${heading}`}>Practical coaching tools, always within reach.</h2>
              <div className={`mt-6 space-y-4 ${body}`}>
                <p>
                  Good coaching requires more than a collection of exercises. It requires clear
                  objectives and the right resources to help players achieve them.
                </p>
                <p>
                  The TOF platform connects development phases with instructional content and
                  practical coaching materials, helping coaches prepare sessions and support
                  individual learning needs.
                </p>
                <p>
                  Whether you&apos;re working on tennis skills, footwork, serving or court
                  positioning, relevant development objectives and supporting resources are
                  accessible within the platform.
                </p>
              </div>
              <h3 className="mt-8 font-heading text-xl font-semibold text-tof-indigo">
                Platform resources include
              </h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-tof-indigo/80 md:text-base">
                {resources.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a href="/licenses" className={`${yellowButton} mt-8 w-fit`}>
                Find your TOF license
              </a>
            </div>
            <AppShot
              src="/platform/swirl-list.png"
              alt="Swirl list view with Tennis Skills, Footwork and Starting the Point"
              className="flex justify-center py-8"
            />
          </div>
        </div>
      </section>

      {/* 5. Player development & progress */}
      <section id="progress" className="scroll-mt-24 bg-white pb-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 overflow-hidden md:grid-cols-2 md:gap-0">
            <AppShot
              src="/platform/player-advice.png"
              alt="Player advice screen with development-level requirements"
              className="flex justify-center py-8 order-2 md:order-1"
            />
            <div className="flex flex-col justify-center bg-[#F3F3F5] px-6 py-10 sm:px-10 md:px-14 md:py-16 order-1 md:order-2">
              <p className={eyebrow}>Understand • track • develop</p>
              <h2 className={`mt-4 ${heading}`}>
                Turn player development into meaningful insights.
              </h2>
              <div className={`mt-6 space-y-4 ${body}`}>
                <p>Every player follows a different development journey.</p>
                <p>
                  The TOF platform helps coaches move beyond simply recording participation by
                  providing tools to follow learning objectives, mastered levels and player
                  progression.
                </p>
                <p>
                  Through a structured development framework, coaches can see how players are
                  progressing and identify areas that need further attention.
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-4 grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
            {progressCards.map((item) => (
              <article key={item.title} className="bg-[#F3F3F5] p-6 md:p-8">
                <h3 className="font-heading text-xl font-semibold text-tof-indigo md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-tof-indigo/80 md:text-base">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
          <p className={`mx-auto mt-10 max-w-3xl text-center font-semibold text-tof-indigo`}>
            Progress becomes easier to understand, discuss and support.
          </p>
        </div>
      </section>

      {/* 6. Organisation management */}
      <section className="bg-white pb-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 overflow-hidden md:grid-cols-2 md:gap-0">
            <div className="flex flex-col justify-center bg-[#F3F3F5] px-6 py-10 sm:px-10 md:px-14 md:py-16">
              <p className={eyebrow}>Built for clubs & organisations</p>
              <h2 className={`mt-4 ${heading}`}>Connect your entire coaching environment.</h2>
              <div className={`mt-6 space-y-4 ${body}`}>
                <p>
                  A consistent development programme requires coaches, players and organisations to
                  work from the same foundation.
                </p>
                <p>
                  TOF provides a shared digital environment for managing coaching teams, player
                  groups and club structures.
                </p>
                <p>
                  Instead of relying on disconnected records and separate systems, organisations can
                  manage their TOF programme within one platform.
                </p>
              </div>
            </div>
            <AppShot
              src="/platform/overview.png"
              alt="TOF organisation overview with mastered levels and new players per month"
              className="flex justify-center py-8"
            />
          </div>
          <div className="mx-auto mt-4 grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-5">
            {management.map((item) => (
              <article key={item.title} className="bg-[#F3F3F5] p-6 md:p-8">
                <h3 className="font-heading text-xl font-semibold text-tof-indigo md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-tof-indigo/80 md:text-base">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a href="/licenses#grow" className={yellowButton}>
              Explore organisation licensing
            </a>
          </div>
        </div>
      </section>

      {/* 7. Development across disciplines */}
      <section className="bg-tof-indigo py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold tracking-[0.18em] text-tof-yellow sm:text-sm">
              Sport-specific content
            </p>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-[2.75rem]">
              One development philosophy. Dedicated coaching resources.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/85 md:text-lg md:leading-8">
              The TOF platform supports tennis, padel and wheelchair tennis through dedicated
              development content and coaching resources.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/85 md:text-lg md:leading-8">
              Each discipline has its own practical requirements, while the wider TOF approach
              connects structured learning objectives with purposeful coaching activities.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
            {sports.map((item) => (
              <article key={item.title} className="bg-white p-6 md:p-8">
                <h3 className="font-heading text-xl font-semibold text-tof-indigo md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-tof-indigo/80 md:text-base">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Built to scale */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className={eyebrow}>From individual coaches to national federations</p>
            <h2 className={`mt-4 ${heading}`}>One platform. Built around your organisation.</h2>
            <div className={`mt-6 space-y-4 ${body}`}>
              <p>
                TOF supports different levels of implementation, from individual coaching
                environments to larger organisational structures.
              </p>
              <p>
                Individual coaches can access the methodology and development resources through a
                personal license.
              </p>
              <p>
                Clubs and academies can bring their coaches, players and groups together within a
                shared environment.
              </p>
              <p>
                For federations and strategic partners, TOF offers tailored opportunities for
                localisation, branding, content management and technical implementation.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
            {scale.map((item) => (
              <article key={item.title} className="bg-[#F3F3F5] p-6 md:p-8">
                <h3 className="font-heading text-xl font-semibold text-tof-indigo md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-tof-indigo/80 md:text-base">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a href="/licenses#lead" className={yellowButton}>
              Explore strategic licensing
            </a>
          </div>
        </div>
      </section>

      {/* 9. Licensing */}
      <section className="bg-white pb-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F3F3F5] px-6 py-14 sm:px-10 md:px-16 md:py-20">
            <p className={`${eyebrow} text-center`}>Start • grow • lead</p>
            <h2 className={`mx-auto mt-4 max-w-3xl text-center ${heading}`}>
              The right tools for every stage of growth.
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
              {access.map((item) => (
                <article key={item.title} className="flex h-full flex-col bg-white p-6 md:p-8">
                  <h3 className="font-heading text-2xl font-semibold text-tof-indigo">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-tof-indigo/80 md:text-base">
                    {item.text}
                  </p>
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

      {/* 10. FAQ */}
      <section className="bg-white pb-16 md:pb-24">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className={`${eyebrow} text-center`}>Platform FAQ</p>
          <h2 className={`mt-4 text-center ${heading}`}>Common questions about the platform.</h2>
          <div className="mt-10">
            {faqs.map((item) => (
              <FaqItem key={item.q} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* 11. Final CTA */}
      <section className="bg-white pb-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F3F3F5] px-6 py-14 text-center sm:px-10 md:px-16 md:py-20">
            <p className={eyebrow}>Bring TOF to your organisation</p>
            <h2 className={`mt-4 ${heading}`}>Make player development more connected.</h2>
            <div className={`mx-auto mt-6 max-w-3xl space-y-4 ${body}`}>
              <p>
                From interactive learning objectives and player progress tracking to coaching
                resources and club management, TOF brings the tools for structured development
                together.
              </p>
              <p>Discover how the TOF platform can support your coaching programme.</p>
            </div>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="/licenses#compare" className={yellowButton}>
                Compare TOF licenses
              </a>
              <a href="/contact" className={outlineButton}>
                Contact our team
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlatformPage;
