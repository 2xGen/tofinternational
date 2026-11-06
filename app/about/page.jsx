import dynamic from 'next/dynamic';

const AboutPage = dynamic(() => import('@/views/AboutPage'));

export const metadata = {
  title: 'About TOF Sports | Our Story, Vision & International Development',
  description:
    'Learn about TOF Sports International, our origins in the Netherlands and our mission to support youth tennis, padel and wheelchair tennis development worldwide.',
};

export default function Page() {
  return <AboutPage />;
}
