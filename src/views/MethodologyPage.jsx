'use client';

import React, { useState } from 'react';
import SubpageHero from '@/components/SubpageHero';

const eyebrow = 'text-xs font-semibold tracking-[0.18em] text-tof-indigo/70 sm:text-sm';
const heading =
  'font-heading text-3xl font-semibold tracking-tight text-tof-indigo md:text-4xl lg:text-[2.75rem]';
const body = 'text-base leading-relaxed text-tof-indigo/80 md:text-lg md:leading-8';
const yellowButton =
  'inline-flex items-center justify-center rounded-full bg-tof-yellow px-6 py-3 text-sm font-semibold text-tof-indigo transition hover:bg-tof-yellow/90 md:px-7 md:py-3.5 md:text-base';
const outlineButton =
  'inline-flex items-center justify-center rounded-full border-2 border-tof-indigo px-6 py-3 text-sm font-semibold text-tof-indigo transition hover:bg-tof-indigo hover:text-tof-yellow md:px-7 md:py-3.5 md:text-base';

const matrix = [
  {
    title: 'Development phases',
    text: 'Organise the player development journey into recognisable stages, with objectives suited to different abilities and learning needs.',
  },
  {
    title: 'Learning objectives',
    text: 'Understand the skills and competencies players are working towards within each phase and level.',
  },
  {
    title: 'Player progression',
    text: 'Use development objectives to support decisions about when players are ready for new challenges and the next stage of their development.',
  },
  {
    title: 'Coaching consistency',
    text: 'Provide coaches with a shared reference for planning training sessions, discussing player development and aligning coaching approaches.',
  },
];

const steps = [
  {
    number: '01',
    title: 'Understand the player',
    paragraphs: [
      "Every development journey begins with understanding the player's current abilities.",
      'Coaches use the TOF framework to identify relevant skills, learning needs and development objectives.',
      'This helps create a clearer picture of what the player is ready to work on.',
    ],
  },
  {
    number: '02',
    title: 'Develop through purposeful practice',
    paragraphs: [
      'Once development objectives are identified, coaches connect them to suitable training activities.',
      'TOF provides practical exercises, coaching resources and interactive game formats designed to make learning structured, engaging and enjoyable.',
      'Players work towards meaningful objectives through activities that encourage participation, repetition and improvement.',
    ],
  },
  {
    number: '03',
    title: 'Support progression',
    paragraphs: [
      'As players develop, their learning objectives evolve.',
      'The TOF Matrix provides a consistent reference for recognising progress and identifying appropriate new challenges.',
      'This allows coaches to support development according to demonstrated skills and learning needs, rather than using age as the only indicator.',
    ],
  },
];

const phases = [
  {
    title: 'Clear objectives',
    text: 'Each development phase and level is connected to learning objectives that guide coaching and player development.',
  },
  {
    title: 'Individual progress',
    text: 'Players can develop at different speeds, with coaching activities adapted to their current abilities.',
  },
  {
    title: 'Shared understanding',
    text: 'A structured framework helps coaches communicate development objectives more consistently across sessions and coaching teams.',
  },
];

const play = [
  {
    title: 'Games with a purpose',
    text: 'Use structured games and challenges that encourage players to practise specific skills while enjoying the experience.',
  },
  {
    title: 'Visible challenges',
    text: 'Physical coaching formats and player materials can help make activities, goals and progress easier to understand.',
  },
  {
    title: 'Practical coaching resources',
    text: 'Support sessions with exercises, instructional videos, handbooks and coaching guidance connected to the development framework.',
  },
  {
    title: 'Active participation',
    text: 'Create training environments that encourage players to participate, practise and take an active role in their learning.',
  },
];

const audiences = [
  {
    title: 'For individual coaches',
    text: 'Bring greater structure to training sessions with clear development objectives and supporting resources.',
  },
  {
    title: 'For clubs & academies',
    text: 'Align coaching teams around a shared approach to player development.',
  },
  {
    title: 'For federations & organisations',
    text: 'Support the implementation of a consistent development methodology across multiple coaching environments.',
  },
];

const ecosystem = [
  {
    title: 'TOF Matrix',
    text: 'The structured reference for development phases, levels and learning objectives.',
  },
  {
    title: 'Digital platform',
    text: 'Access coaching resources and support player, coach and organisation management.',
  },
  {
    title: 'Coaching content',
    text: 'Use exercises, instructional videos and educational materials to support purposeful training.',
  },
  {
    title: 'Physical game formats',
    text: 'Bring development objectives into practical sessions through engaging activities, games and challenges.',
  },
  {
    title: 'Implementation support',
    text: 'Help coaching teams introduce the TOF approach into their existing programmes.',
  },
  {
    title: 'Ongoing guidance & support',
    text: 'Get practical advice, feedback and ongoing support from the TOF team.',
  },
];

const faqs = [
  {
    q: 'What is the TOF methodology?',
    a: 'The TOF methodology is a structured approach to player development that connects learning objectives, coaching activities and progression within a shared framework. It helps coaches plan purposeful training and support individual development.',
  },
  {
    q: 'What is the TOF Matrix?',
    a: 'The TOF Matrix is the structured framework at the centre of the methodology. It organises development phases, levels and learning objectives, providing coaches with a consistent reference for player development.',
  },
  {
    q: 'How is TOF different from traditional age-based development?',
    a: "TOF places greater emphasis on demonstrated skills and learning objectives rather than relying on age alone. Age can still play a role in organising training, but the methodology focuses on understanding each player's current abilities and development needs.",
  },
  {
    q: 'Does TOF replace Red, Orange and Green tennis?',
    a: 'TOF does not necessarily replace these familiar stages. Instead, its methodology aims to connect development phases and levels more closely to specific skills and learning objectives.',
  },
  {
    q: 'Is TOF only for tennis?',
    a: 'No. TOF currently supports tennis, padel and wheelchair tennis through sport-specific coaching resources and development content.',
  },
  {
    q: 'Do coaches need to use the digital platform?',
    a: 'The methodology is the foundation of TOF. Digital tools and coaching resources support its implementation. Available resources and functionality depend on the selected license.',
  },
  {
    q: 'Can clubs and federations use the same methodology?',
    a: 'Yes. TOF offers licensing options for individual coaches, clubs, academies and larger organisations, allowing a shared development approach to be implemented at different organisational levels.',
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

const MethodologyPage = () => {
  return (
    <div className="bg-white pt-20 text-tof-indigo">
      <SubpageHero route="/methodology" />

      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className={eyebrow}>The TOF methodology</p>
          <h1 className={`mt-4 ${heading}`}>
            Every player develops differently. Every player deserves a clear path.
          </h1>
          <div className={`mt-6 space-y-4 ${body}`}>
            <p>Great coaching starts with understanding the player.</p>
            <p>
              The TOF methodology brings structure to player development by connecting individual
              skills, clear learning objectives and purposeful coaching activities.
            </p>
            <p>
              Rather than relying on age alone, TOF helps coaches focus on what players can do, what
              they need to learn and how to support their next steps.
            </p>
            <p>
              Built around the TOF Matrix, the methodology provides a consistent approach to
              development that can be applied across coaches, clubs and organisations.
            </p>
          </div>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="/platform" className={yellowButton}>
              Explore the TOF platform
            </a>
            <a href="/licenses" className={outlineButton}>
              Discover TOF licenses
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white pb-16 md:pb-24">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className={eyebrow}>A different approach to development</p>
          <h2 className={`mt-4 ${heading}`}>Same age. Different skills. Different needs.</h2>
          <div className={`mt-6 space-y-4 ${body}`}>
            <p>Every young player follows their own development journey.</p>
            <p>
              Some children develop strong rally skills early. Others may demonstrate good
              coordination, tactical understanding or confidence in match situations.
            </p>
            <p>
              Traditional age-based groupings provide a useful organisational structure, but age
              alone cannot fully describe a player&apos;s abilities or learning needs.
            </p>
            <p>TOF approaches development from a different perspective.</p>
            <p>
              By working with structured learning objectives, coaches can better understand each
              player&apos;s current abilities and identify the skills they should develop next.
            </p>
            <p>The result is a more individual approach within a consistent coaching framework.</p>
            <p className="font-semibold text-tof-indigo">Not simply: How old is this player?</p>
            <p className="font-semibold text-tof-indigo">
              But: What can this player do, and what comes next?
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white pb-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className={eyebrow}>The foundation of the methodology</p>
            <h2 className={`mt-4 ${heading}`}>A clear framework for player development.</h2>
            <div className={`mt-6 space-y-4 ${body}`}>
              <p>At the heart of TOF is the TOF Matrix.</p>
              <p>
                The Matrix connects development phases, levels and learning objectives within a
                structured framework, helping coaches understand and guide player progression.
              </p>
              <p>
                Instead of treating development as a collection of unrelated exercises, TOF provides
                a clear relationship between the skills players are learning and the activities used
                to develop them.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
            {matrix.map((item) => (
              <article key={item.title} className="bg-[#F3F3F5] p-6 md:p-8">
                <h3 className="font-heading text-xl font-semibold text-tof-indigo md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-tof-indigo/80 md:text-base">{item.text}</p>
              </article>
            ))}
          </div>
          <p className={`mx-auto mt-10 max-w-3xl text-center font-semibold text-tof-indigo`}>
            The TOF Matrix connects where a player is, what they are learning and where they can
            progress next.
          </p>
        </div>
      </section>

      <section className="bg-white pb-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className={eyebrow}>Understand • develop • progress</p>
            <h2 className={`mt-4 ${heading}`}>From development objectives to on-court learning.</h2>
            <p className={`mt-6 ${body}`}>
              The TOF approach connects three essential elements of effective player development.
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-4xl space-y-4">
            {steps.map((item) => (
              <article key={item.number} className="bg-[#F3F3F5] p-6 md:p-8">
                <p className="text-xs font-semibold tracking-[0.18em] text-tof-indigo/60">
                  {item.number}
                </p>
                <h3 className="mt-3 font-heading text-2xl font-semibold text-tof-indigo">
                  {item.title}
                </h3>
                <div className="mt-4 space-y-3 text-sm leading-relaxed text-tof-indigo/80 md:text-base">
                  {item.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white pb-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className={eyebrow}>Structure with room for individual progress</p>
            <h2 className={`mt-4 ${heading}`}>A development pathway that grows with the player.</h2>
            <div className={`mt-6 space-y-4 ${body}`}>
              <p>
                Youth tennis commonly uses Red, Orange and Green stages to support the transition
                towards full-court tennis.
              </p>
              <p>
                These stages provide an accessible way to organise training environments, equipment
                and playing formats.
              </p>
              <p>
                TOF builds on the importance of structured development by connecting phases and levels
                to specific learning objectives.
              </p>
              <p>
                The ambition is to make player progression more closely connected to demonstrated
                abilities, giving coaches a clearer understanding of what players have learned and
                what they should develop next.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
            {phases.map((item) => (
              <article key={item.title} className="bg-[#F3F3F5] p-6 md:p-8">
                <h3 className="font-heading text-xl font-semibold text-tof-indigo md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-tof-indigo/80 md:text-base">{item.text}</p>
              </article>
            ))}
          </div>
          <p className={`mx-auto mt-10 max-w-3xl text-center font-semibold text-tof-indigo`}>
            A player&apos;s development is more than their age. It is the skills they build along
            the way.
          </p>
        </div>
      </section>

      <section className="bg-tof-indigo py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold tracking-[0.18em] text-tof-yellow sm:text-sm">
              Purposeful practice. Engaging experiences.
            </p>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-[2.75rem]">
              Serious development doesn&apos;t have to feel serious.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-white/85 md:text-lg md:leading-8">
              <p>Children learn through movement, exploration, repetition and play.</p>
              <p>
                TOF brings learning objectives to life through practical activities and interactive
                coaching formats that make training engaging while maintaining a clear development
                purpose.
              </p>
              <p>Rather than separating enjoyment from improvement, TOF brings them together.</p>
            </div>
          </div>
          <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
            {play.map((item) => (
              <article key={item.title} className="bg-white p-6 md:p-8">
                <h3 className="font-heading text-xl font-semibold text-tof-indigo md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-tof-indigo/80 md:text-base">{item.text}</p>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-center font-semibold text-tof-yellow">
            Every activity has a purpose. Every player has an opportunity to progress.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className={eyebrow}>Consistency across the coaching team</p>
            <h2 className={`mt-4 ${heading}`}>Different coaches. One development approach.</h2>
            <div className={`mt-6 space-y-4 ${body}`}>
              <p>
                A structured methodology becomes especially valuable when multiple coaches work with
                the same players.
              </p>
              <p>
                Without a shared framework, training objectives and approaches can vary significantly
                between sessions and coaching teams.
              </p>
              <p>
                TOF provides a common reference for understanding player development, selecting
                suitable activities and discussing progression.
              </p>
              <p>
                This helps clubs and academies create greater consistency while allowing individual
                coaches to bring their own experience and personality to the court.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
            {audiences.map((item) => (
              <article key={item.title} className="bg-[#F3F3F5] p-6 md:p-8">
                <h3 className="font-heading text-xl font-semibold text-tof-indigo md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-tof-indigo/80 md:text-base">{item.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a href="/licenses" className={yellowButton}>
              Explore TOF licenses
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white pb-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className={eyebrow}>Supported by the TOF ecosystem</p>
            <h2 className={`mt-4 ${heading}`}>The framework behind the tools.</h2>
            <p className={`mt-6 ${body}`}>
              The TOF methodology is the foundation. The TOF ecosystem provides the resources to put
              it into practice.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-5">
            {ecosystem.map((item) => (
              <article key={item.title} className="bg-[#F3F3F5] p-6 md:p-8">
                <h3 className="font-heading text-xl font-semibold text-tof-indigo md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-tof-indigo/80 md:text-base">{item.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a href="/platform" className={yellowButton}>
              Discover the TOF platform
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#F3F3F5] py-16 md:py-24">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className={eyebrow}>Built by coaches. Developed for coaches.</p>
          <h2 className={`mt-4 ${heading}`}>A methodology shaped by real coaching experience.</h2>
          <div className={`mt-6 space-y-4 ${body}`}>
            <p>
              TOF sports was developed in the Netherlands through practical experience in youth
              sports coaching and player development.
            </p>
            <p>
              The methodology combines structured learning objectives with engaging activities and
              coaching resources designed for real training environments.
            </p>
            <p>
              As TOF expands internationally, the ambition remains the same: to make player
              development clearer, coaching more consistent and learning more enjoyable.
            </p>
            <p>
              The methodology provides a common foundation while allowing coaches and organisations
              to adapt implementation to their own environment.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className={`${eyebrow} text-center`}>Frequently asked questions</p>
          <h2 className={`mt-4 text-center ${heading}`}>Common questions about the methodology.</h2>
          <div className="mt-10">
            {faqs.map((item) => (
              <FaqItem key={item.q} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white pb-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F3F3F5] px-6 py-14 text-center sm:px-10 md:px-16 md:py-20">
            <p className={eyebrow}>Put the TOF methodology into practice</p>
            <h2 className={`mt-4 ${heading}`}>Give every player a clear path to progress.</h2>
            <div className={`mx-auto mt-6 max-w-3xl space-y-4 ${body}`}>
              <p>
                Bring structure to your coaching programme with clear development objectives,
                practical training resources and a shared approach to player progression.
              </p>
              <p>
                Whether you&apos;re coaching individual players or supporting an entire organisation,
                TOF provides the methodology and tools to help you move forward.
              </p>
            </div>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="/licenses" className={yellowButton}>
                Explore TOF licenses
              </a>
              <a href="/contact" className={outlineButton}>
                Contact TOF sports
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MethodologyPage;
