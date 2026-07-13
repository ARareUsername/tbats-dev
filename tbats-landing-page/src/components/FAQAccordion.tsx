import { useState } from 'react';
import { m } from 'framer-motion';
import Section from '@components/ui/Section';
import styles from './FAQAccordion.module.css';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: readonly FAQItem[] = [
  {
    question: 'What is your general timeline for a web project?',
    answer:
      'Typically, a custom web design and development project takes between 3 to 6 weeks. This includes the initial discovery, design sprints, development phase, testing, and final launch coordination.',
  },
  {
    question: 'Do I own the code and design assets once complete?',
    answer:
      'Absolutely. Upon final payment, 100% intellectual property ownership of the codebase, custom designs, and assets are transferred to you. We deliver clean Git repositories and Figma design files.',
  },
  {
    question: 'How does the pricing model work?',
    answer:
      'We operate on a transparent, fixed-price project model based on scope. We do not have hidden fees or hourly surprises. You can use our Interactive Estimator tool above to get a preliminary ballpark estimate.',
  },
  {
    question: 'What technologies do you build websites with?',
    answer:
      'We specialize in React, Next.js, Vite, and Framer Motion for high-performance frontend interfaces. For headless e-commerce and content management, we integrate Shopify, Sanity, or custom APIs.',
  },
] as const;

export default function FAQAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Section id="faq" className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <span className={`${styles.label} text-accent`}>FAQ</span>
          <h2 className={`${styles.title} text-gradient`}>Common Inquiries</h2>
          <p className={styles.description}>
            Have a question about working together? Here are answers to the most common queries.
          </p>
        </div>

        <div className={styles.faqList}>
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div key={index} className={styles.faqItem}>
                <button
                  onClick={() => toggleFAQ(index)}
                  className={styles.button}
                  aria-expanded={isOpen}
                  aria-label={isOpen ? 'Collapse answer' : 'Expand answer'}
                >
                  <span>{faq.question}</span>
                  <m.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="material-symbols-outlined text-accent"
                    aria-hidden="true"
                  >
                    keyboard_arrow_down
                  </m.span>
                </button>

                <div
                  className={styles.answerWrapper}
                  style={{
                    gridTemplateRows: isOpen ? '1fr' : '0fr',
                    transition: 'grid-template-rows 0.3s ease-in-out',
                  }}
                >
                  <div className={styles.answerInner}>
                    <p className={styles.answerText}>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
