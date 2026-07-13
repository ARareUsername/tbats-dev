import { m } from 'framer-motion';
import useReducedMotion from '@hooks/useReducedMotion';
import Section from '@components/ui/Section';
import Container from '@components/ui/Container';
import Card from '@components/ui/Card';
import styles from './ClientTimeline.module.css';

interface TimelineStep {
  number: string;
  title: string;
  subtitle: string;
  desc: string;
  icon: string;
}

const steps: readonly TimelineStep[] = [
  {
    number: '01',
    title: 'Discovery & Briefing',
    subtitle: 'Defining the Scope',
    desc: 'We kick off with a deep dive into your business model, goals, and target audience to establish a precise blueprint and visual direction.',
    icon: 'search',
  },
  {
    number: '02',
    title: 'Bespoke UI/UX Design',
    subtitle: 'Editorial Mockups',
    desc: 'We prototype custom user flows and high-fidelity mockups. Every detail is custom-tailored to reflect your brand identity and maximize conversions.',
    icon: 'palette',
  },
  {
    number: '03',
    title: 'Interactive Development',
    subtitle: 'High-Performance Engineering',
    desc: 'We transform designs into clean React code. Implementing robust, modular architecture with fluid animations powered by Framer Motion.',
    icon: 'terminal',
  },
  {
    number: '04',
    title: 'Core Web Vitals Optimization',
    subtitle: 'Speed & SEO Audit',
    desc: 'We optimize every asset and line of code for sub-second load times, maximizing accessibility, responsive fidelity, and search engine readiness.',
    icon: 'bolt',
  },
  {
    number: '05',
    title: 'Deployment & Launch Handoff',
    subtitle: 'IP Rights & Handover',
    desc: 'We configure domains, spin up hosting servers, and completely hand over the production-ready git repository and design files.',
    icon: 'rocket_launch',
  },
] as const;

export default function ClientTimeline() {
  const prefersReducedMotion = useReducedMotion();
  return (
    <Section id="process" className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.header}>
          <span className={`${styles.timelineLabel} text-accent`}>Timeline</span>
          <h2 className={`${styles.title} text-gradient`}>How We Work</h2>
          <p className={styles.description}>
            A structured, transparent development methodology designed to take your concept to
            production in weeks.
          </p>
        </div>

        <div className={styles.stepsWrapper}>
          {/* Vertical timeline line */}
          <div className={styles.timelineLine} />

          {steps.map((step, idx) => (
            <m.div
              key={step.number}
              initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{
                duration: prefersReducedMotion ? 0.25 : 0.5,
                delay: prefersReducedMotion ? 0 : idx * 0.1,
              }}
              className={styles.stepItem}
            >
              {/* Step number bubble */}
              <div className={`${styles.bubble} step-bubble`}>
                <span className="text-accent">{step.number}</span>
              </div>

              {/* Step content card */}
              <Card variant="editorial" className={styles.card}>
                <div className={styles.cardHeader}>
                  <div>
                    <h3 className={styles.cardTitle}>{step.title}</h3>
                    <span className={styles.cardSubtitle}>{step.subtitle}</span>
                  </div>
                  <span
                    className={`${styles.cardIcon} material-symbols-outlined text-accent`}
                    aria-hidden="true"
                  >
                    {step.icon}
                  </span>
                </div>

                <p className={styles.cardDesc}>{step.desc}</p>
              </Card>
            </m.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
