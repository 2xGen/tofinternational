import dynamic from 'next/dynamic';

const LicensesPage = dynamic(() => import('@/views/LicensesPage'));

export const metadata = {
  title: 'Licenses — TOF sports international',
  description:
    'START, GROW and LEAD licenses for coaches, clubs, academies and national federations.',
};

export default function Page() {
  return <LicensesPage />;
}
