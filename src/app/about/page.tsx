import type { Metadata } from 'next';

export const metadata:Metadata = {
  title: 'About | ReKnew AI Solutions',
  description:
    'ReKnew helps organizations reduce inefficiencies, automate workflows, and unlock growth opportunities using enterprise AI.',
  keywords: ['ReKnew', 'AI Solutions', 'Enterprise Automation', 'Workflow Automation'],
  openGraph: {
    title: 'ReKnew AI Solutions',
    description:
      'Discover ReKnew’s AI-powered tools and solutions for enterprise workflow automation and transformation.',
    url: 'https://reknew-nextjs-new-k5z2-git-main-djs-projects-223c96fb.vercel.app/about',
  },
};

export default function About() {
    return (
      <main>
        <h1>About Us</h1>
        <p>This is the about page of the website.</p>
      </main>
    );
  }
  