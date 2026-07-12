import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'What is your general timeline for a web project?',
    answer: 'Typically, a custom web design and development project takes between 3 to 6 weeks. This includes the initial discovery, design sprints, development phase, testing, and final launch coordination.'
  },
  {
    question: 'Do I own the code and design assets once complete?',
    answer: 'Absolutely. Upon final payment, 100% intellectual property ownership of the codebase, custom designs, and assets are transferred to you. We deliver clean Git repositories and Figma design files.'
  },
  {
    question: 'How does the pricing model work?',
    answer: 'We operate on a transparent, fixed-price project model based on scope. We do not have hidden fees or hourly surprises. You can use our Interactive Estimator tool above to get a preliminary ballpark estimate.'
  },
  {
    question: 'What technologies do you build websites with?',
    answer: 'We specialize in React, Next.js, Vite, and Framer Motion for high-performance frontend interfaces. For headless e-commerce and content management, we integrate Shopify, Sanity, or custom APIs.'
  }
];

export default function FAQAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" style={{ background: 'transparent' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <span className="text-accent" style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 600 }}>FAQ</span>
          <h2 style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', marginTop: '0.5rem', marginBottom: '1rem' }} className="text-gradient">Common Inquiries</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            Have a question about working together? Here are answers to the most common queries.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                style={{
                  borderBottom: '1px solid var(--border-color)',
                  paddingBottom: '1rem'
                }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  style={{
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    color: 'var(--text-primary)',
                    fontSize: 'clamp(1rem, 4vw, 1.25rem)',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 500,
                    padding: '1rem 0',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <span>{faq.question}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="material-symbols-outlined text-accent"
                  >
                    keyboard_arrow_down
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p style={{ color: 'var(--text-secondary)', paddingBottom: '1rem', lineHeight: '1.7', fontSize: '0.95rem' }}>
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
