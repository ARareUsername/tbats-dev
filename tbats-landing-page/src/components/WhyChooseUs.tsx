import { m } from 'framer-motion';
import Section from '@components/ui/Section';
import Container from '@components/ui/Container';
import useReducedMotion from '@hooks/useReducedMotion';
import styles from './WhyChooseUs.module.css';

interface ValueProp {
  id: string;
  title: string;
  icon: string;
  description: string;
}

const values: ValueProp[] = [
  {
    id: 'pricing',
    title: 'Affordable Pricing',
    icon: 'sell',
    description:
      'Premium designs and production-grade engineering at rates tailored for growing local businesses.',
  },
  {
    id: 'mobile',
    title: 'Mobile Compatible Design',
    icon: 'devices',
    description:
      '100% responsive layouts tested across a variety of modern smartphones, tablets, and desktops.',
  },
  {
    id: 'speed',
    title: 'Rapid Deployment',
    icon: 'bolt',
    description:
      'A highly streamlined development workflow that gets your brand online and ready for users quickly.',
  },
  {
    id: 'support',
    title: 'Ongoing Support',
    icon: 'support_agent',
    description:
      'Dedicated maintenance, speed optimizations, and updates long after your project is launched.',
  },
];

export default function WhyChooseUs() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Section id="why-choose-us" className={styles.section}>
      <Container>
        <div className={styles.header}>
          <span className={`text-accent ${styles.badge}`}>Why tbats.dev</span>
          <h2 className={`text-gradient ${styles.title}`}>Why Choose Us</h2>
          <p className={styles.description}>
            We build performant digital products tailored to your needs. No templated code, no
            bloated frameworks, just high-converting products.
          </p>
        </div>

        <div className={styles.grid}>
          {values.map(val => (
            <m.div
              key={val.id}
              className={`card-spotlight ${styles.card}`}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: prefersReducedMotion ? 0.25 : 0.5 }}
              whileHover={
                prefersReducedMotion
                  ? {}
                  : {
                      y: -4,
                      borderColor: 'var(--color-accent)',
                    }
              }
            >
              <div className={styles.iconContainer}>
                <span className={`material-symbols-outlined ${styles.icon}`} aria-hidden="true">
                  {val.icon}
                </span>
              </div>
              <h3 className={styles.cardTitle}>{val.title}</h3>
              <p className={styles.cardDescription}>{val.description}</p>
            </m.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
