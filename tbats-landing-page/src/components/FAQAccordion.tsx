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
    question: 'How does your pricing work?',
    answer:
      'We don’t charge the ₱15,000–₱30,000 upfront fees traditional agencies do. Instead you pay one transparent monthly fee that covers design, development, hosting, updates, and support. Choose a Starter, Growth, or Merchant plan — or talk to us about a bespoke package.',
  },
  {
    question: 'What’s included in the monthly fee?',
    answer:
      'Everything: a custom-designed, speed-optimized website, domain, hosting, SSL, daily backups, security monitoring, regular content updates, and rapid developer support. No add-ons, no surprise invoices.',
  },
  {
    question: 'Do I own my website and its assets?',
    answer:
      'Yes. You fully own your codebase, designs, and assets. We build on your accounts (domain, hosting, Google Workspace) so nothing is locked to us, and you can leave anytime with zero lock-in contracts.',
  },
  {
    question: 'How long does it take to launch?',
    answer:
      'Most sites go live in 3–6 weeks, including discovery, design, development, testing, and launch. Monthly plans are typically live fastest since the foundation is already proven.',
  },
  {
    question: 'What technologies do you use?',
    answer:
      'We build with React, Vite, and Framer Motion for fast, modern frontends, backed by clean, maintainable code. For e-commerce and content we integrate Shopify, Sanity, or custom APIs as needed.',
  },
  {
    question: 'Do you work with businesses outside Pampanga?',
    answer:
      'We’re based in Pampanga, Philippines and love serving local brands, but we work with businesses anywhere. Being remote-first means timezone-friendly communication and the same hands-on service.',
  },
  {
    question: 'Can you help if I already have a website?',
    answer:
      'Absolutely. We redesign slow or outdated sites, fix technical issues, and can migrate you onto a managed monthly plan so you stop worrying about updates, speed, and security.',
  },
  {
    question: 'What if I need something more custom?',
    answer:
      'If you need bespoke corporate platforms, complex integrations, or unique design assets, we’ll map out a tailored package custom-fit to your operations. Just reach out and we’ll scope it together.',
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
