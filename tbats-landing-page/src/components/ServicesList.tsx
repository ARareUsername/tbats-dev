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
  wide?: boolean;
}

const pillars: readonly ServicePillar[] = [
  {
    id: 1,
    title: 'A Brand That Stands Out',
    icon: 'palette',
    description:
      'We create brand identities that captivate on first view — no templates, just custom design crafted around what makes your business unique.',
    capabilities: [
      'A brand look that is uniquely yours',
      'See exactly what your site will look like before we build',
      'Test your site experience early, so there are no surprises',
      'Clean, professional design across every page',
    ],
  },
  {
    id: 2,
    title: 'A Website That Works for You',
    icon: 'rocket_launch',
    description:
      'We build fast, reliable websites that handle your bookings, forms, and payments — so you can focus on running your business.',
    capabilities: [
      'A fast, modern website your customers will love',
      'Smooth animations that impress visitors',
      'Update your content anytime — no tech skills needed',
      'Handles your bookings, forms, and payments seamlessly',
    ],
  },
  {
    id: 3,
    title: 'Customers Who Find You Online',
    icon: 'trending_up',
    description:
      'We optimize your site so people searching on Google find you first — and stay because your site loads fast on any device.',
    capabilities: [
      'Your site loads fast on phone or desktop',
      'Works for every visitor and ranks higher on Google',
      'No one leaves waiting for your site to open',
      'Looks perfect on all screen sizes',
    ],
    wide: true,
  },
] as const;

const MotionCard = m(Card);

export default function ServicesList() {
  return (
    <Section id="services">
      <Container>
        <div className={styles.header}>
          <span className={`text-accent ${styles.badge}`}>Design · Code · Grow</span>
          <h2 className={`text-gradient ${styles.title}`}>What We Build</h2>
          <p className={styles.subtitle}>From Concept to Conversion</p>
        </div>

        <div className={styles.grid}>
          {pillars.map(pillar => (
            <MotionCard
              key={pillar.id}
              variant="editorial"
              className={`${styles.card} ${pillar.wide ? styles.cardWide : ''}`}
              whileHover={{ borderColor: 'rgba(255, 255, 255, 0.4)' }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.iconContainer}>
                <span
                  className={`material-symbols-outlined text-accent ${styles.icon}`}
                  aria-hidden="true"
                >
                  {pillar.icon}
                </span>
              </div>

              <h3 className={styles.cardTitle}>{pillar.title}</h3>

              <p className={styles.cardDescription}>{pillar.description}</p>

              <ul className={styles.list}>
                {pillar.capabilities.map(capability => (
                  <li key={capability} className={styles.listItem}>
                    <span
                      className={`material-symbols-outlined text-accent ${styles.checkIcon}`}
                      aria-hidden="true"
                    >
                      check
                    </span>
                    {capability}
                  </li>
                ))}
              </ul>
            </MotionCard>
          ))}
        </div>
      </Container>
    </Section>
  );
}
