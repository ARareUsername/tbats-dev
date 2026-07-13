import { m } from 'framer-motion';
import Card from '@components/ui/Card';
import Section from '@components/ui/Section';
import Container from '@components/ui/Container';
import styles from './ServicesList.module.css';

interface ServicePillar {
  id: number;
  title: string;
  icon: string;
  description: string;
  capabilities: string[];
}

const pillars: readonly ServicePillar[] = [
  {
    id: 1,
    title: 'Bespoke Design',
    icon: 'token',
    description:
      'We craft unique, brand-specific digital designs from scratch. No templates, just pure creative layouts built to convert.',
    capabilities: [
      'Art Direction & Identity',
      'High-Fidelity Wireframes',
      'Interactive Prototyping',
      'Typography & UI Systems',
    ],
  },
  {
    id: 2,
    title: 'Custom Development',
    icon: 'code',
    description:
      'Blazing-fast digital applications built using React, Vite, and Next.js. Clean, modular architectures with flawless transitions.',
    capabilities: [
      'React & Next.js Builds',
      'Advanced CSS/SVG Animations',
      'Headless CMS Integrations',
      'API & Backend Engineering',
    ],
  },
  {
    id: 3,
    title: 'SEO & Optimization',
    icon: 'speed',
    description:
      'Achieve perfect lighthouse scores and search engine dominance with hyper-optimized, clean code implementations.',
    capabilities: [
      'Core Web Vitals Strategy',
      'Semantic HTML & Accessibility',
      'Page Load Speed Tuning',
      'Responsive Scaling Checks',
    ],
  },
] as const;

const MotionCard = m(Card);

export default function ServicesList() {
  return (
    <Section id="services">
      <Container>
        <div className={styles.header}>
          <span className={`text-accent ${styles.subtitle}`}>Expertise</span>
          <h2 className={`text-gradient ${styles.title}`}>Our Capabilities</h2>
          <p className={styles.description}>
            We combine high-end aesthetic vision with top-tier technical implementation to deliver
            award-winning websites.
          </p>
        </div>

        <div className="grid-3">
          {pillars.map(pillar => (
            <MotionCard
              key={pillar.id}
              variant="editorial"
              className={styles.cardWrapper}
              whileHover={{ borderColor: 'rgba(255, 255, 255, 0.4)' }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <div className={styles.cardHeader}>
                  <div className={styles.iconContainer}>
                    <span className={`material-symbols-outlined text-accent ${styles.icon}`} aria-hidden="true">
                      {pillar.icon}
                    </span>
                  </div>
                  <h3 className={styles.cardTitle}>{pillar.title}</h3>
                </div>

                <p className={styles.cardDescription}>{pillar.description}</p>
              </div>

              <div>
                <h4 className={styles.competenciesTitle}>Core Competencies</h4>
                <ul className={styles.competenciesList}>
                  {pillar.capabilities.map(capability => (
                    <li key={capability} className={styles.competencyItem}>
                      <span className={`material-symbols-outlined text-accent ${styles.checkIcon}`} aria-hidden="true">
                        check
                      </span>
                      {capability}
                    </li>
                  ))}
                </ul>
              </div>
            </MotionCard>
          ))}
        </div>
      </Container>
    </Section>
  );
}
