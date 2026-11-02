import { Analytics } from '@vercel/analytics/next';
import { Poppins } from 'next/font/google';
import ConditionalNavbar from '@/components/ConditionalNavbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import Providers from '@/components/Providers';
import HtmlLang from '@/components/HtmlLang';
import { Toaster } from '@/components/ui/toaster';
import { MAINTENANCE_MODE } from '@/config/site';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-poppins',
  display: 'swap',
});

const siteIcons = {
  icon: 'https://toftennis.nl/wp-content/uploads/2024/04/TOF-logo.svg',
  shortcut: 'https://toftennis.nl/wp-content/uploads/2024/04/TOF-logo.svg',
  apple: 'https://toftennis.nl/wp-content/uploads/2024/04/TOF-logo.svg',
};

export const metadata = MAINTENANCE_MODE
  ? {
      title: 'TOF Sports International',
      description:
        'Practical tools, structured development methods and engaging activities for tennis and padel coaches, clubs and academies.',
      icons: siteIcons,
      openGraph: {
        title: 'TOF Sports International',
        description:
          'Practical tools, structured development methods and engaging activities for tennis and padel coaches, clubs and academies.',
        type: 'website',
        locale: 'en',
      },
    }
  : {
      title: 'TOF Sports International — Helping young players play, learn and grow',
      description:
        'TOF Sports provides tennis and padel coaches, clubs and academies with the TOF Matrix, the TOF Teachers App and practical tools that keep young players playing and improving.',
      icons: siteIcons,
      openGraph: {
        title: 'TOF Sports International — Helping young players play, learn and grow',
        description:
          'From the TOF Matrix to the TOF Teachers App, practical tools that support coaches and make player development more engaging.',
        type: 'website',
        locale: 'en',
      },
    };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="flex min-h-screen flex-col bg-tof-indigo font-sans font-normal text-white">
        <Providers>
          <HtmlLang />
          {!MAINTENANCE_MODE && <ConditionalNavbar />}
          <main className="flex-grow">{children}</main>
          {!MAINTENANCE_MODE && <Footer />}
          {!MAINTENANCE_MODE && <CookieConsent />}
          {!MAINTENANCE_MODE && <Toaster />}
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
