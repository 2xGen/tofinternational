import dynamic from 'next/dynamic';

const MethodologyPage = dynamic(() => import('@/views/MethodologyPage'));

export const metadata = {
  title: 'The TOF Methodology | Skill-Based Player Development',
  description:
    'Discover the TOF methodology and Matrix. A structured approach to youth tennis development, connecting player skills, learning objectives and practical coaching activities.',
};

export default function Page() {
  return <MethodologyPage />;
}
