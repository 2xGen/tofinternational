'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import {
  motion,
  AnimatePresence,
  useInView,
  useScroll,
  useTransform,
} from 'framer-motion';
import { ChevronDown } from 'lucide-react';

/** Pre-masked pie frames with yellow border — rotate every 4s */
const HERO_PIE_IMAGES = [
  '/hero-pie.png',
  '/hero-pie-02.png',
  '/hero-pie-03.png',
  '/hero-pie-04.png',
];

const PIE_INTERVAL_MS = 4000;
/** One “click” of the wheel — feels like a roulette segment settling */
const PIE_SPIN_DEG = 90;

const HeroPieFrame = ({ src, alt, sizes, priority = false }) => (
  <motion.div
    initial={{ rotate: -PIE_SPIN_DEG, opacity: 0 }}
    animate={{ rotate: 0, opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1.55, ease: [0.22, 0.8, 0.2, 1] }}
    className="absolute inset-0 origin-[18%_22%]"
  >
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      className="select-none object-contain object-left-top"
      sizes={sizes}
    />
  </motion.div>
);

const HeroSection = () => {
  const [pieIndex, setPieIndex] = useState(0);
  const sectionRef = useRef(null);
  const heroInView = useInView(sectionRef, { once: false, amount: 0.25 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const copyY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const pieY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  const pieSrc = HERO_PIE_IMAGES[pieIndex];

  useEffect(() => {
    HERO_PIE_IMAGES.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => {
      setPieIndex((i) => (i + 1) % HERO_PIE_IMAGES.length);
    }, PIE_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative min-h-svh overflow-hidden bg-white pb-16 pt-20 md:pb-20"
    >
      <div className="relative z-10 aspect-square w-[min(108vw,520px)] -translate-x-[18%] -translate-y-[22%] sm:w-[min(96vw,560px)] lg:hidden">
        <AnimatePresence mode="sync" initial={false}>
          <HeroPieFrame
            key={pieIndex}
            src={pieSrc}
            alt="The TOF Matrix swirl"
            sizes="(max-width: 1023px) 90vw, 1px"
            priority={pieIndex === 0}
          />
        </AnimatePresence>
      </div>

      <motion.div
        style={{ y: pieY }}
        className="pointer-events-none absolute left-0 top-20 z-10 hidden w-[min(54vw,840px)] lg:block xl:w-[min(52vw,960px)] 2xl:w-[min(48vw,1080px)]"
      >
        <div className="relative aspect-square -translate-x-[9%] -translate-y-[26%]">
          <AnimatePresence mode="sync" initial={false}>
            <HeroPieFrame
              key={pieIndex}
              src={pieSrc}
              alt=""
              sizes="(min-width: 1024px) 50vw, 1px"
              priority={pieIndex === 0}
            />
          </AnimatePresence>
        </div>
      </motion.div>

      <div className="relative z-20 mx-auto flex w-full max-w-7xl flex-col justify-center px-4 sm:px-6 lg:min-h-[calc(100svh-5rem)] lg:flex-row lg:items-center lg:px-8 xl:max-w-[90rem] 2xl:max-w-[100rem]">
        <motion.div
          style={{ y: copyY }}
          className="-mt-8 w-full max-w-xl sm:-mt-4 lg:ml-auto lg:mr-12 lg:mt-0 lg:w-[min(42%,32rem)] lg:max-w-none"
        >
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs font-semibold tracking-[0.18em] text-tof-indigo/70 sm:text-sm"
          >
            Training • objectives • framework
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 font-heading text-[1.65rem] font-semibold leading-[1.25] tracking-tight text-tof-indigo sm:text-3xl lg:text-[2.05rem] xl:text-[2.25rem]"
          >
            Every player deserves a clear path to progress.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-base leading-relaxed text-tof-indigo/80 md:text-lg md:leading-8"
          >
            TOF sports combines a skill-based development methodology, clear learning objectives and
            practical coaching tools to help every player reach their potential.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-row flex-nowrap items-center gap-2 sm:gap-3"
          >
            <a
              href="/licenses"
              className="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-tof-yellow px-4 py-2.5 text-xs font-semibold text-tof-indigo transition hover:bg-tof-yellow/90 sm:px-5 sm:py-3 sm:text-sm"
            >
              Explore TOF licenses
            </a>
            <a
              href="/methodology"
              className="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full border-2 border-tof-indigo px-4 py-2.5 text-xs font-semibold text-tof-indigo transition hover:bg-tof-indigo hover:text-tof-yellow sm:px-5 sm:py-3 sm:text-sm"
            >
              Discover the methodology
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#methodology"
        className="absolute bottom-5 left-1/2 z-30 -translate-x-1/2 text-tof-indigo/70 transition-colors hover:text-tof-indigo md:bottom-6"
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Discover the TOF methodology"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="h-8 w-8" />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default HeroSection;
