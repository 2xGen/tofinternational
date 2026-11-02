'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const footerLinkClass = 'text-sm text-white/80 transition-colors hover:text-tof-yellow';

const Footer = () => {
  return (
    <footer className="bg-tof-indigo text-white">
      <div className="container mx-auto px-4 py-14 md:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="sm:col-span-2">
            <a
              href="#top"
              className="inline-flex items-center justify-center rounded-3xl bg-tof-yellow p-5 transition hover:bg-tof-yellow/90 md:p-6"
            >
              <Image
                src="/tof-logo-blauw.png"
                alt="TOF Sports"
                width={280}
                height={160}
                className="h-24 w-auto md:h-28"
              />
            </a>
            <p className="mt-6 text-sm font-semibold tracking-wide text-white">
              Training • Objectives • Framework
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70">
              Helping tennis and padel coaches develop, motivate and engage young players.
            </p>
            <p className="mt-6 text-sm text-white/70">© 2026 TOF Sports. All rights reserved.</p>
          </div>

          <div>
            <h3 className="mb-4 text-base font-semibold text-white">Navigation</h3>
            <ul className="space-y-1">
              <li>
                <a href="#about" className={footerLinkClass}>
                  About TOF
                </a>
              </li>
              <li>
                <a href="#method" className={footerLinkClass}>
                  TOF Method
                </a>
              </li>
              <li>
                <a href="#contact" className={footerLinkClass}>
                  Contact
                </a>
              </li>
              <li>
                <Link href="/terms" className={footerLinkClass}>
                  Terms and conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className={footerLinkClass}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    if (typeof window !== 'undefined' && window.openCookieSettings) {
                      window.openCookieSettings();
                    }
                  }}
                  className={footerLinkClass}
                >
                  Cookie Settings
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-base font-semibold text-white">Contact</h3>
            <a href="mailto:info@tofsports.nl" className="text-sm text-white/80 transition-colors hover:text-tof-yellow">
              info@tofsports.nl
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
