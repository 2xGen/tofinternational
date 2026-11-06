import dynamic from 'next/dynamic';

const PlatformPage = dynamic(() => import('@/views/PlatformPage'));

export const metadata = {
  title: 'TOF Platform | Player Development, Coaching & Club Management',
  description:
    'Explore the TOF digital platform. Track player development, use the interactive Swirl, access coaching videos and manage players, trainers and clubs in one environment.',
};

export default function Page() {
  return <PlatformPage />;
}
