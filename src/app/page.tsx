import HomePage from './components/Home';
import type { Metadata } from 'next';

export const metadata:Metadata = {
    title: 'Home | ReKnew AI Solutions',
    description:
      'ReKnew helps organizations reduce inefficiencies, automate workflows, and unlock growth opportunities using enterprise AI.',
    keywords: ['ReKnew', 'AI Solutions', 'Enterprise Automation', 'Workflow Automation'],
    openGraph: {
      title: 'ReKnew AI Solutions',
      description:
        'Discover ReKnew’s AI-powered tools and solutions for enterprise workflow automation and transformation.',
      url: 'https://reknew-nextjs-new-k5z2-git-main-djs-projects-223c96fb.vercel.app',
    },
  };

export default function Home() {
  return (
    <main>
      <HomePage />
    </main>
  );
}
