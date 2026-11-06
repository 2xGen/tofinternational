'use client';

import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-8%' },
  transition: { duration: 0.5 },
};

const eyebrow = 'text-xs font-semibold tracking-[0.18em] text-tof-indigo/70 sm:text-sm';
const heading =
  'font-heading text-3xl font-semibold tracking-tight text-tof-indigo md:text-4xl lg:text-[2.75rem]';
const body = 'text-base leading-relaxed text-tof-indigo/80 md:text-lg md:leading-8';
const yellowButton =
  'inline-flex items-center justify-center rounded-full bg-tof-yellow px-6 py-3 text-sm font-semibold text-tof-indigo transition hover:bg-tof-yellow/90 md:px-7 md:py-3.5 md:text-base';
const indigoButton =
  'inline-flex items-center justify-center rounded-full bg-tof-indigo px-6 py-3 text-sm font-semibold text-tof-yellow transition hover:bg-tof-indigo/90 md:px-7 md:py-3.5 md:text-base';
const outlineButton =
  'inline-flex items-center justify-center rounded-full border-2 border-tof-indigo bg-transparent px-6 py-3 text-sm font-semibold text-tof-indigo transition hover:bg-tof-indigo hover:text-tof-yellow md:px-7 md:py-3.5 md:text-base';

const approach = [
  {
    title: 'Understand',
    text: "Identify a player's current skills and development needs.",
  },
  {
    title: 'Develop',
    text: 'Connect learning objectives with purposeful coaching activities.',
  },
  {
    title: 'Progress',
    text: 'Support advancement through clear, skill-based development milestones.',
  },
];

const ecosystem = [
  {
    title: 'The TOF Matrix',
    text: 'A shared framework for development objectives, skill assessment and player progression.',
  },
  {
    title: 'Coaching resources',
    text: 'Exercises, instructional videos, handbooks and practical coaching guidance.',
  },
  {
    title: 'Interactive game formats',
    text: 'Engaging activities and physical coaching materials that turn learning objectives into on-court experiences.',
  },
  {
    title: 'Digital platform',
    text: 'A connected environment for coaching content, player development and organisation management.',
  },
];

const licenses = [
  {
    id: 'start',
    kicker: 'Start',
    title: 'For individual coaches',
    text: "Bring structure and purpose to your coaching with access to TOF's methodology, app and training resources.",
    price: 'From €7.50/month',
    href: '/licenses#start',
  },
  {
    id: 'grow',
    kicker: 'Grow',
    title: 'For clubs & academies',
    text: 'Create a consistent development approach across your coaching team, supported by shared resources and digital management tools.',
    price: 'From €2,500/year',
    href: '/licenses#grow',
  },
  {
    id: 'lead',
    kicker: 'Lead',
    title: 'For federations & strategic partners',
    text: 'Implement a structured development framework across clubs, regions or national programmes with dedicated support and a tailored digital environment.',
    price: 'Custom licensing',
    href: '/licenses#lead',
  },
];

const benefits = [
  {
    title: 'Skill-based progression',
    text: 'Focus on what players can do, not simply how old they are.',
  },
  {
    title: 'Consistent coaching',
    text: 'Give coaches a shared methodology, clear objectives and practical training resources.',
  },
  {
    title: 'Engaging learning',
    text: 'Make development enjoyable through games, challenges and purposeful activities.',
  },
  {
    title: 'Scalable implementation',
    text: 'Bring the same development philosophy to individual lessons, clubs, academies and larger organisations.',
  },
];

const sports = [
  {
    title: 'Tennis',
    text: 'Structured learning pathways, coaching formats and development objectives.',
  },
  {
    title: 'Padel',
    text: 'Sport-specific exercises and resources supporting purposeful player development.',
  },
  {
    title: 'Wheelchair tennis',
    text: 'Adapted coaching content and development resources supported by specialist expertise.',
  },
];

const HomePage = () => {
  return (
    <>
      <HeroSection />

      <section id="methodology" className="scroll-mt-24 bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
            <p className={eyebrow}>The TOF approach</p>
            <h2 className={`mt-4 ${heading}`}>Development starts with understanding the player.</h2>
            <div className={`mx-auto mt-6 max-w-3xl space-y-4 ${body}`}>
              <p>
                Every player develops differently. TOF sports brings structure to that journey through
                a coaching methodology built around the TOF Matrix.
              </p>
              <p>
                By connecting individual skills, clear learning objectives and practical training
                tools, TOF helps coaches understand where players are, what they need to learn and how
                to support their progression based on ability rather than age alone.
              </p>
              <p>
                From individual coaches to national federations, TOF provides a shared framework for
                consistent, purposeful player development.
              </p>
            </div>
          </motion.div>
          <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
            {approach.map((item) => (
              <article key={item.title} className="bg-[#F3F3F5] p-6 md:p-8">
                <h3 className="font-heading text-xl font-semibold text-tof-indigo md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-tof-indigo/80 md:text-base">{item.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a href="/methodology" className={yellowButton}>
              Discover the TOF methodology
            </a>
          </div>
        </div>
      </section>

      <section id="ecosystem" className="scroll-mt-24 bg-white pb-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
            <p className={eyebrow}>From methodology to practice</p>
            <h2 className={`mt-4 ${heading}`}>Everything connected. One development system.</h2>
            <p className={`mt-6 ${body}`}>
              TOF combines a structured development methodology with practical coaching resources and
              digital tools.
            </p>
          </motion.div>
          <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
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
              Explore the TOF platform
            </a>
          </div>
        </div>
      </section>

      <section id="who" className="scroll-mt-24 bg-white pb-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="bg-tof-yellow px-6 py-14 sm:px-10 md:px-16 md:py-20">
            <p className={`${eyebrow} text-center`}>Start • grow • lead</p>
            <h2 className={`mx-auto mt-4 max-w-3xl text-center ${heading}`}>
              One methodology. Built to grow with you.
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-4 md:mt-14 md:grid-cols-3 md:gap-5">
              {licenses.map((item) => (
                <article key={item.id} className="flex h-full flex-col bg-white p-6 md:p-8">
                  <p className="text-xs font-semibold tracking-[0.18em] text-tof-indigo/60">
                    {item.kicker}
                  </p>
                  <h3 className="mt-3 font-heading text-2xl font-semibold text-tof-indigo">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-tof-indigo/80 md:text-base">{item.text}</p>
                  <p className="mt-auto min-h-[3.5rem] pt-6 font-heading text-xl font-semibold leading-snug text-tof-indigo">
                    {item.price}
                  </p>
                  <div className="pt-8">
                    <a
                      href={item.href}
                      className={`${yellowButton} h-12 w-fit whitespace-nowrap md:h-14`}
                    >
                      Explore {item.kicker.toLowerCase()}
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-10 text-center">
              <a href="/licenses#compare" className={indigoButton}>
                Compare TOF licenses
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white pb-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
            <p className={eyebrow}>Why TOF sports</p>
            <h2 className={`mt-4 ${heading}`}>A better way to develop players.</h2>
          </motion.div>
          <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
            {benefits.map((item) => (
              <article key={item.title} className="bg-[#F3F3F5] p-6 md:p-8">
                <h3 className="font-heading text-xl font-semibold text-tof-indigo md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-tof-indigo/80 md:text-base">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="sports" className="scroll-mt-24 bg-tof-indigo py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold tracking-[0.18em] text-tof-yellow sm:text-sm">
              Where TOF is used
            </p>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-[2.75rem]">
              Developed for the court.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/85 md:text-lg md:leading-8">
              The TOF methodology supports structured development across tennis, padel and wheelchair
              tennis, with dedicated resources adapted to each discipline.
            </p>
          </motion.div>
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
        </div>
      </section>

      <section id="about" className="scroll-mt-24 bg-white py-16 md:py-24">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp}>
            <p className={eyebrow}>Developed in the Netherlands</p>
            <h2 className={`mt-4 ${heading}`}>Built by coaches. Designed for development.</h2>
            <div className={`mt-6 space-y-4 ${body}`}>
              <p>
                TOF sports began with a simple belief: every player should have the opportunity to
                develop through clear objectives, engaging activities and purposeful coaching.
              </p>
              <p>
                Developed through practical coaching experience in the Netherlands, TOF has grown into
                a comprehensive methodology supported by physical coaching formats, educational
                resources and digital technology.
              </p>
              <p>
                Today, TOF sports international is bringing this approach to coaches, clubs, academies
                and federations around the world.
              </p>
              <p>
                Our ambition is to make structured, skill-based player development more accessible,
                consistent and enjoyable.
              </p>
            </div>
            <a href="/about" className={`${yellowButton} mt-8`}>
              About TOF sports
            </a>
          </motion.div>
        </div>
      </section>

      <section className="bg-tof-yellow py-16 md:py-24">
        <div className="container mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className={eyebrow}>Bring TOF to your organisation</p>
          <h2 className={`mt-4 ${heading}`}>Better structure. Better coaching. Better development.</h2>
          <p className={`mt-6 ${body}`}>
            Discover how TOF can support your coaching programme with a clear methodology, practical
            resources and connected digital tools.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="/licenses" className={indigoButton}>
              Explore licensing options
            </a>
            <a href="/contact" className={outlineButton}>
              Contact TOF sports
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
