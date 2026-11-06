'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Instagram, Facebook } from 'lucide-react';

const homeLinks = [
  { href: '/methodology', label: 'Methodology' },
  { href: '/platform', label: 'Platform' },
  { href: '/licenses', label: 'Licenses' },
  { href: '/about', label: 'About TOF' },
  { href: '/contact', label: 'Contact' },
];

const pageLinks = [
  { href: '/methodology', label: 'Methodology' },
  { href: '/platform', label: 'Platform' },
  { href: '/licenses', label: 'Licenses' },
  { href: '/about', label: 'About TOF' },
  { href: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const onLicenses = pathname.startsWith('/licenses') || pathname.startsWith('/licences');
  const links = pathname === '/' ? homeLinks : pageLinks;
  const cta = onLicenses
    ? { href: '/contact', label: 'Get started' }
    : { href: '/licenses', label: 'Explore licenses' };

  useEffect(() => {
    if (!isMenuOpen) return undefined;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isMenuOpen]);

  const closeMobile = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-tof-indigo">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between gap-4">
          <a href="/" className="flex shrink-0 items-center transition-opacity hover:opacity-90">
            <Image
              src="https://toftennis.nl/wp-content/uploads/2024/04/TOF-logo.svg"
              alt="TOF Sports"
              width={200}
              height={60}
              className="h-10 w-auto object-contain brightness-0 invert md:h-12"
              priority
              quality={90}
            />
          </a>

          <nav className="hidden flex-1 justify-center lg:flex" aria-label="Main">
            <div className="flex items-center gap-7">
              <a href="/" className="text-sm font-medium text-white/80 transition-colors hover:text-white">
                TOF sports
              </a>
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-white/80 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            <a
              href={cta.href}
              className="hidden rounded-full bg-tof-yellow px-5 py-2.5 text-sm font-semibold text-tof-indigo transition-all hover:bg-tof-yellow/90 sm:block"
            >
              {cta.label}
            </a>

            <div className="hidden items-center gap-3 md:flex">
              <a
                href="https://www.instagram.com/toftennis/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 transition-colors hover:text-tof-yellow"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/toftennis/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 transition-colors hover:text-tof-yellow"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>

            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white/80 transition-colors hover:text-white lg:hidden"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="border-t border-white/10 bg-tof-indigo lg:hidden">
            <div className="px-4 py-4">
              <a
                href="/"
                onClick={closeMobile}
                className="block border-b border-white/10 py-3 text-base font-medium text-white"
              >
                TOF sports
              </a>
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMobile}
                  className="block border-b border-white/10 py-3 text-base font-medium text-white"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={cta.href}
                onClick={closeMobile}
                className="mt-4 block rounded-full bg-tof-yellow py-3.5 text-center text-base font-semibold text-tof-indigo hover:bg-tof-yellow/90"
              >
                {cta.label}
              </a>
              <div className="mt-4 flex items-center gap-4 border-t border-white/10 pt-4">
                <a
                  href="https://www.instagram.com/toftennis/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-tof-yellow"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.facebook.com/toftennis/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-tof-yellow"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
