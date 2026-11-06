import dynamic from 'next/dynamic';
import MaintenancePage from '@/views/MaintenancePage';
import { MAINTENANCE_MODE } from '@/config/site';

const HomePage = MAINTENANCE_MODE
  ? null
  : dynamic(() => import('@/views/HomePage'));

export const metadata = MAINTENANCE_MODE
  ? {
      title: 'TOF Sports International',
      description:
        'Practical tools, structured development methods and engaging activities for tennis and padel coaches, clubs and academies.',
    }
  : {
      title: 'TOF sports international — Structured development. Engaging coaching.',
      description:
        'TOF Sports brings structure to player development through a proven coaching methodology, clear learning objectives and practical training tools.',
    };

export default function Page() {
  if (MAINTENANCE_MODE) {
    return <MaintenancePage />;
  }

  return <HomePage />;
}
