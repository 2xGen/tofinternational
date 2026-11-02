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
      title: 'TOF Sports International — Helping young players play, learn and grow',
      description:
        'Practical tools, the TOF Matrix and the TOF Teachers App for tennis and padel coaches, clubs and academies.',
    };

export default function Page() {
  if (MAINTENANCE_MODE) {
    return <MaintenancePage />;
  }

  return <HomePage />;
}
