import dynamic from 'next/dynamic';

const ContactPage = dynamic(() => import('@/views/ContactPage'));

export const metadata = {
  title: 'Contact TOF Sports International | Get in Touch',
  description:
    'Contact TOF Sports International to learn more about our digital coaching platform, licensing options and international partnerships.',
};

export default function Page() {
  return <ContactPage />;
}
