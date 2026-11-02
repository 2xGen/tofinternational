import PrivacyPage from '@/views/PrivacyPage';
import { ot } from '@/i18n/content/overTof';
import { PRIVACY } from '@/i18n/content/privacy';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://tofsports.com';

export function generateMetadata() {
  const title = `${ot('en', PRIVACY.heroTitle)} - TOF Sports`;
  const description = ot('en', PRIVACY.intro);

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}/privacy`,
    },
  };
}

export default function Privacy() {
  return <PrivacyPage />;
}
