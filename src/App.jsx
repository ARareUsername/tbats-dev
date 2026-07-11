import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesList from './components/ServicesList';
import Portfolio from './components/Portfolio';
import ClientTimeline from './components/ClientTimeline';
import InteractiveEstimator from './components/InteractiveEstimator';
import Testimonials from './components/Testimonials';
import FAQAccordion from './components/FAQAccordion';
import ConsultationForm from './components/ConsultationForm';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

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

function App() {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
      <CustomCursor />
      
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <Header />
        <Hero />

        <ScrollReveal>
          <ServicesList />
        </ScrollReveal>
        <ScrollReveal>
          <Portfolio />
        </ScrollReveal>
        <ScrollReveal>
          <ClientTimeline />
        </ScrollReveal>
        <ScrollReveal>
          <InteractiveEstimator />
        </ScrollReveal>
        <ScrollReveal>
          <Testimonials />
        </ScrollReveal>
        <ScrollReveal>
          <FAQAccordion />
        </ScrollReveal>
        <ScrollReveal>
          <ConsultationForm />
        </ScrollReveal>
        <Footer />
      </div>
    </>
  );
}

export default App;
