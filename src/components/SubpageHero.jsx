'use client';

import React from 'react';
import PageHero from '@/components/PageHero';
import { getPageHeroImage } from '@/data/heroSlides';

/** Straight photo banner — no title, overlay, or wave (Dutch subpage style). */
const SubpageHero = ({
  route,
  minHeight = '40vh',
  objectPosition = 'object-center',
}) => (
  <PageHero
    image={getPageHeroImage(route)}
    minHeight={minHeight}
    showWave={false}
    imageOnly
    objectPosition={objectPosition}
  />
);

export default SubpageHero;
