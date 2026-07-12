/* eslint-disable react-refresh/only-export-components */
import type { ReactNode } from 'react';
import type { ActionFunctionArgs } from 'react-router';
import { useRouteLoaderData, useFetcher } from 'react-router';
import { m } from 'framer-motion';
import useReducedMotion from '@hooks/useReducedMotion';

import Header from '@components/Header';
import Hero from '@components/Hero';
import ServicesList from '@components/ServicesList';
import Portfolio from '@components/Portfolio';
import ClientTimeline from '@components/ClientTimeline';
import InteractiveEstimator from '@components/InteractiveEstimator';
import Testimonials from '@components/Testimonials';
import FAQAccordion from '@components/FAQAccordion';
import ConsultationForm from '@components/ConsultationForm';
import Footer from '@components/Footer';

export function meta() {
  return [
    { title: 'tbats.dev | Premium Web Development & Design Studio' },
    {
      name: 'description',
      content:
        'Premium web development and design agency crafting high-converting, blazing-fast, and visually stunning digital experiences.',
    },
  ];
}

const ScrollReveal = ({ children }: { children: ReactNode }) => {
  const prefersReducedMotion = useReducedMotion();
  return (
    <m.div
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: prefersReducedMotion ? 0.25 : 0.7, ease: 'easeOut' }}
    >
      {children}
    </m.div>
  );
};

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const intent = formData.get('intent');

  if (intent === 'theme') {
    const theme = formData.get('theme');
    if (theme === 'light' || theme === 'dark') {
      return new Response(JSON.stringify({ success: true }), {
        headers: {
          'Set-Cookie': `theme=${theme}; Path=/; Max-Age=31536000; SameSite=Lax`,
          'Content-Type': 'application/json',
        },
      });
    }
    return new Response(JSON.stringify({ error: 'Invalid theme' }), { status: 400 });
  }

  return new Response('Unknown intent', { status: 400 });
}

export default function LandingRoute() {
  const rootData = useRouteLoaderData('root') as { theme: 'light' | 'dark' } | null;
  const theme = rootData?.theme || 'dark';
  const fetcher = useFetcher();

  const setTheme = (newTheme: 'light' | 'dark') => {
    void fetcher.submit({ intent: 'theme', theme: newTheme }, { method: 'post' });
  };

  return (
    <div style={{ position: 'relative', overflow: 'hidden', zIndex: 1 }}>
      <Header theme={theme} setTheme={setTheme} />
      <Hero />

      <div className="section-divider" />
      <ScrollReveal>
        <ServicesList />
      </ScrollReveal>

      <div className="section-divider" />
      <ScrollReveal>
        <Portfolio />
      </ScrollReveal>

      <div className="section-divider" />
      <ScrollReveal>
        <ClientTimeline />
      </ScrollReveal>

      <div className="section-divider" />
      <ScrollReveal>
        <InteractiveEstimator />
      </ScrollReveal>

      <div className="section-divider" />
      <ScrollReveal>
        <Testimonials />
      </ScrollReveal>

      <div className="section-divider" />
      <ScrollReveal>
        <FAQAccordion />
      </ScrollReveal>

      <div className="section-divider" />
      <ScrollReveal>
        <ConsultationForm />
      </ScrollReveal>

      <div className="section-divider" />
      <Footer />
    </div>
  );
}
