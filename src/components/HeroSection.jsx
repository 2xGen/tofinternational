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
          className="w-full max-w-xl -mt-6 sm:-mt-4 lg:ml-auto lg:mt-0 lg:max-w-lg lg:pr-4 xl:max-w-xl 2xl:max-w-2xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-[2.15rem] font-semibold leading-[1.25] tracking-tight text-tof-indigo sm:text-4xl md:text-[2.75rem] md:leading-[1.22] lg:text-[3.15rem] xl:text-[3.35rem]"
          >
            Helping young players play, learn and grow.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8"
          >
            <a
              href="#discover"
              className="inline-flex items-center justify-center rounded-full bg-tof-yellow px-6 py-3 text-sm font-semibold text-tof-indigo transition hover:bg-tof-yellow/90 md:px-7 md:py-3.5 md:text-base"
            >
              Discover TOF Sports
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#discover"
        className="absolute bottom-5 left-1/2 z-30 -translate-x-1/2 text-tof-indigo/70 transition-colors hover:text-tof-indigo md:bottom-6"
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Discover TOF Sports"
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
