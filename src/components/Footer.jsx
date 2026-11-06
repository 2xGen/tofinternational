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
          <div>
            <a
              href="/"
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
              TOF sports international
            </p>
            <p className="mt-2 text-sm text-white/70">Structured development. Engaging coaching.</p>
          </div>

          <div>
            <h3 className="mb-4 text-base font-semibold text-white">Snelle Links</h3>
            <ul className="space-y-1">
              <li>
                <Link href="/" className={footerLinkClass}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className={footerLinkClass}>
                  Over TOF
                </Link>
              </li>
              <li>
                <Link href="/platform" className={footerLinkClass}>
                  Platform
                </Link>
              </li>
              <li>
                <Link href="/licenses" className={footerLinkClass}>
                  Licenses
                </Link>
              </li>
              <li>
                <Link href="/contact" className={footerLinkClass}>
                  Contact
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
                  Cookie Instellingen
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-base font-semibold text-white">TOF Methode</h3>
            <ul className="space-y-1">
              <li>
                <Link href="/methodology" className={footerLinkClass}>
                  Over de methode
                </Link>
              </li>
              <li>
                <Link href="/methodology" className={footerLinkClass}>
                  Spelen
                </Link>
              </li>
              <li>
                <Link href="/methodology" className={footerLinkClass}>
                  Leren
                </Link>
              </li>
              <li>
                <Link href="/methodology" className={footerLinkClass}>
                  Sparen
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-base font-semibold text-white">Contact</h3>
            <div className="space-y-1 text-sm text-white/80">
              <p>M. van Nispenstraat 16</p>
              <p>3201KC Spijkenisse</p>
              <p>
                <a href="tel:+31613252559" className="transition-colors hover:text-tof-yellow">
                  06 13 25 25 59
                </a>
              </p>
              <p>
                <a href="mailto:info@tofsports.nl" className="transition-colors hover:text-tof-yellow">
                  info@tofsports.nl
                </a>
              </p>
            </div>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center justify-center rounded-full bg-tof-yellow px-5 py-2.5 text-sm font-semibold text-tof-indigo transition hover:bg-tof-yellow/90"
            >
              Contact opnemen
            </Link>

            <h3 className="mb-3 mt-8 text-base font-semibold text-white">Bedrijfsgegevens</h3>
            <div className="space-y-1 text-sm text-white/80">
              <p>KVK: 70507929</p>
              <p>BTW: NL858349954B01</p>
              <p>IBAN: NL56KNAB0257029400</p>
              <p>BIC: KNABNL2H</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-6 text-center">
          <p className="text-sm leading-relaxed text-white/70">
            Powered by KNLTB. Professionele, speelse tools voor een modern tennis- en
            padelprogramma.
          </p>
          <p className="mt-3 text-sm text-white/70">
            © TOF Sports 2018-2026. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
