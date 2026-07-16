import type { ReactNode } from 'react';
import { m } from 'framer-motion';
import useReducedMotion from '@hooks/useReducedMotion';

import Hero from '@components/Hero';
import BentoServices from '@components/BentoServices';
import ProjectGallery from '@components/ProjectGallery';
import WhyChooseUs from '@components/WhyChooseUs';

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

export default function LandingRoute() {
  return (
    <div style={{ position: 'relative', overflow: 'hidden', zIndex: 1 }}>
      <Hero />

      <div className="section-divider" />
      <ScrollReveal>
        <BentoServices />
      </ScrollReveal>

      <div className="section-divider" />
      <ScrollReveal>
        <ProjectGallery />
      </ScrollReveal>

      <div className="section-divider" />
      <ScrollReveal>
        <WhyChooseUs />
      </ScrollReveal>

    </div>
  );
}
