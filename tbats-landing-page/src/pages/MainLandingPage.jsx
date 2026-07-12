import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ServicesList from '../components/ServicesList';
import Team from '../components/Team';
import Portfolio from '../components/Portfolio';
import ClientTimeline from '../components/ClientTimeline';
import InteractiveEstimator from '../components/InteractiveEstimator';
import Testimonials from '../components/Testimonials';
import FAQAccordion from '../components/FAQAccordion';
import ConsultationForm from '../components/ConsultationForm';
import Footer from '../components/Footer';

import { motion } from 'framer-motion';

const ScrollReveal = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.7, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);

function MainLandingPage({ theme, setTheme }) {
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
        <Team />
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

export default MainLandingPage;
