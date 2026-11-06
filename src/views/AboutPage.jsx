'use client';

import React from 'react';
import SubpageHero from '@/components/SubpageHero';

const eyebrow = 'text-xs font-semibold tracking-[0.18em] text-tof-indigo/70 sm:text-sm';
const heading =
  'font-heading text-3xl font-semibold tracking-tight text-tof-indigo md:text-4xl lg:text-[2.75rem]';
const body = 'text-base leading-relaxed text-tof-indigo/80 md:text-lg md:leading-8';
const yellowButton =
  'inline-flex items-center justify-center rounded-full bg-tof-yellow px-6 py-3 text-sm font-semibold text-tof-indigo transition hover:bg-tof-yellow/90 md:px-7 md:py-3.5 md:text-base';
const outlineButton =
  'inline-flex items-center justify-center rounded-full border-2 border-tof-indigo px-6 py-3 text-sm font-semibold text-tof-indigo transition hover:bg-tof-indigo hover:text-tof-yellow md:px-7 md:py-3.5 md:text-base';

const pillars = [
  {
    title: 'Training',
    text: 'Practical coaching resources, exercises and activities that help turn development objectives into meaningful experiences on court.',
  },
  {
    title: 'Objectives',
    text: 'Clear areas of development that give coaches direction and help players build skills across different stages of their sporting journey.',
  },
  {
    title: 'Framework',
    text: 'A consistent structure that brings training, objectives, coaches and organisations together, supporting a shared approach to player development.',
  },
];

const philosophy = [
  {
    title: 'Play',
    text: 'Create opportunities for young players to enjoy sport, take part in activities and spend more time on court.',
  },
  {
    title: 'Learn',
    text: 'Support the development of skills, confidence and understanding through structured objectives and practical coaching.',
  },
  {
    title: 'Earn',
    text: 'Recognise participation and effort through TOF Score, encouraging young players to stay active and engaged.',
  },
];

const sports = [
  {
    title: 'Tennis',
    text: 'Supporting coaches and organisations with structured tennis development resources.',
  },
  {
    title: 'Padel',
    text: 'Extending the TOF framework to padel through dedicated coaching content and expertise.',
  },
  {
    title: 'Wheelchair tennis',
    text: 'Supporting inclusive player development through specialised wheelchair tennis content and collaboration.',
  },
];

const expertise = [
  {
    title: 'Coaching & player development',
    text: 'Practical knowledge from coaches and sport development specialists.',
  },
  {
    title: 'Digital innovation',
    text: 'Technology that supports the implementation of the TOF framework.',
  },
  {
    title: 'International collaboration',
    text: 'Working with specialists and organisations to adapt TOF to different sports and markets.',
  },
];

const AboutPage = () => {
  return (
    <div className="bg-white pt-20 text-tof-indigo">
      <SubpageHero route="/about" objectPosition="object-[center_28%]" />

      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className={eyebrow}>About TOF sports</p>
          <h1 className={`mt-4 ${heading}`}>Built around the next generation of players.</h1>
          <div className={`mt-6 space-y-4 ${body}`}>
            <p>
              TOF sports was born from a simple belief: young players deserve more than a weekly
              training session.
            </p>
            <p>
              By combining practical coaching experience, structured development objectives and
              digital tools, TOF helps coaches and organisations create environments where players
              can learn, improve and enjoy sport.
            </p>
            <p>
              What started in the Netherlands is growing into an international development ecosystem
              for tennis, padel and wheelchair tennis.
            </p>
          </div>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="/platform" className={yellowButton}>
              Explore the TOF platform
            </a>
            <a href="/licenses" className={outlineButton}>
              Discover our licenses
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white pb-16 md:pb-24">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className={eyebrow}>From the Netherlands to the world</p>
          <h2 className={`mt-4 ${heading}`}>A practical idea with international ambition.</h2>
          <div className={`mt-6 space-y-4 ${body}`}>
            <p>
              TOF sports originated in the Netherlands with a focus on improving how young players
              experience tennis and padel.
            </p>
            <p>
              The idea was straightforward: make player development more structured, enjoyable and
              accessible, while giving coaches practical tools to support their work.
            </p>
            <p>
              Through the development of coaching formats, training resources and digital tools, TOF
              has grown into a broader framework that connects training, objectives and player
              engagement.
            </p>
            <p>
              Today, TOF sports international is taking that approach beyond the Netherlands, making
              it accessible to individual coaches, academies, clubs and national sport organisations.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white pb-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className={eyebrow}>Training • objectives • framework</p>
            <h2 className={`mt-4 ${heading}`}>Structure with a purpose.</h2>
            <p className={`mt-6 ${body}`}>
              TOF connects three essential elements of player development.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
            {pillars.map((item) => (
              <article key={item.title} className="bg-[#F3F3F5] p-6 md:p-8">
                <h3 className="font-heading text-xl font-semibold text-tof-indigo md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-tof-indigo/80 md:text-base">{item.text}</p>
              </article>
            ))}
          </div>
          <p className={`mx-auto mt-10 max-w-3xl text-center ${body}`}>
            Together, these elements form the foundation of TOF sports.
          </p>
        </div>
      </section>

      <section className="bg-white pb-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className={eyebrow}>Play • learn • earn</p>
            <h2 className={`mt-4 ${heading}`}>Development goes beyond the training session.</h2>
            <p className={`mt-6 ${body}`}>
              At TOF, we believe young players develop through a combination of structured learning,
              enjoyable experiences and regular participation.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
            {philosophy.map((item) => (
              <article key={item.title} className="bg-[#F3F3F5] p-6 md:p-8">
                <h3 className="font-heading text-xl font-semibold text-tof-indigo md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-tof-indigo/80 md:text-base">{item.text}</p>
              </article>
            ))}
          </div>
          <p className={`mx-auto mt-10 max-w-3xl text-center ${body}`}>
            Our philosophy is about creating an environment where children want to keep playing,
            learning and developing.
          </p>
        </div>
      </section>

      <section className="bg-white pb-16 md:pb-24">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className={eyebrow}>The next step in player development</p>
          <h2 className={`mt-4 ${heading}`}>Connecting coaches, players and organisations.</h2>
          <div className={`mt-6 space-y-4 ${body}`}>
            <p>TOF has evolved beyond individual training formats and coaching materials.</p>
            <p>
              Through the TOF digital platform, the methodology can be used across different levels
              of sport, from independent coaches to large organisations.
            </p>
            <p>
              The platform brings together coaching resources, player development and organisational
              management within a shared environment.
            </p>
            <p>
              For clubs and academies, this creates a more consistent approach across coaching teams.
              For larger organisations and federations, TOF offers opportunities to implement a
              common development framework across multiple locations.
            </p>
          </div>
          <a href="/platform" className={`${yellowButton} mt-8`}>
            Discover the TOF platform
          </a>
        </div>
      </section>

      <section className="bg-tof-indigo py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold tracking-[0.18em] text-tof-yellow sm:text-sm">
              One methodology. Multiple sports.
            </p>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-[2.75rem]">
              Local expertise. International possibilities.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/85 md:text-lg md:leading-8">
              TOF sports international is designed to support different sports, languages and
              organisational structures.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/85 md:text-lg md:leading-8">
              Our international approach brings together expertise in coaching, sport development,
              digital innovation and implementation.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
            {sports.map((item) => (
              <article key={item.title} className="bg-white p-6 md:p-8">
                <h3 className="font-heading text-xl font-semibold text-tof-indigo md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-tof-indigo/80 md:text-base">{item.text}</p>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-relaxed text-white/85 md:text-lg md:leading-8">
            Our ambition is to make structured player development accessible to more coaches, clubs
            and organisations around the world.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className={eyebrow}>Built through collaboration</p>
            <h2 className={`mt-4 ${heading}`}>Expertise from across sport and technology.</h2>
            <div className={`mt-6 space-y-4 ${body}`}>
              <p>
                TOF sports brings together coaching experience, technical development and specialist
                expertise to create practical solutions for player development.
              </p>
              <p>
                Our work is supported by people and organisations contributing knowledge in tennis,
                padel, wheelchair tennis, digital innovation and international implementation.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
            {expertise.map((item) => (
              <article key={item.title} className="bg-[#F3F3F5] p-6 md:p-8">
                <h3 className="font-heading text-xl font-semibold text-tof-indigo md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-tof-indigo/80 md:text-base">{item.text}</p>
              </article>
            ))}
          </div>
          <p className={`mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-tof-indigo/60 md:text-base`}>
            Partner logos, approved testimonials and individual profiles can be added here as
            international collaborations are confirmed.
          </p>
        </div>
      </section>

      <section className="bg-[#F3F3F5] py-16 md:py-24">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className={eyebrow}>Looking ahead</p>
          <h2 className={`mt-4 ${heading}`}>One framework. A world of possibilities.</h2>
          <div className={`mt-6 space-y-4 ${body}`}>
            <p>
              Our vision is to create an international development ecosystem where coaches, players,
              clubs and federations can work with a shared approach to youth sport.
            </p>
            <p>
              A framework that adapts to different sports and cultures while keeping player
              development at its centre.
            </p>
            <p>
              From a single coach working with a small group of players to a national federation
              supporting thousands of participants, TOF aims to make structured development
              practical, accessible and scalable.
            </p>
            <p className="font-semibold text-tof-indigo">
              One methodology. Multiple sports. Unlimited development.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white pb-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F3F3F5] px-6 py-14 text-center sm:px-10 md:px-16 md:py-20">
            <p className={eyebrow}>Grow with TOF</p>
            <h2 className={`mt-4 ${heading}`}>Bring TOF to your coaching programme.</h2>
            <p className={`mx-auto mt-6 max-w-3xl ${body}`}>
              Whether you&apos;re an independent coach, academy owner or federation representative,
              discover how TOF sports international can support your development ambitions.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="/platform" className={yellowButton}>
                Explore the platform
              </a>
              <a href="/licenses" className={outlineButton}>
                View licensing options
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
