import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { m } from 'framer-motion';
import { Link } from 'react-router';
import Section from '@components/ui/Section';
import Container from '@components/ui/Container';
import useReducedMotion from '@hooks/useReducedMotion';
import styles from './BentoServices.module.css';

interface ServiceItem {
  id: string;
  title: string;
  badge: string;
  icon: string;
  description: string;
  href: string;
  className: string;
  graphic: ReactNode;
}

export default function BentoServices() {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let animationFrameId: number;
    let ticking = false;
    let localX = -1000;
    let localY = -1000;

    const update = () => {
      section.style.setProperty('--sx', `${localX}px`);
      section.style.setProperty('--sy', `${localY}px`);
      ticking = false;
    };

    const handleMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      localX = e.clientX - rect.left;
      localY = e.clientY - rect.top;
      if (!ticking) {
        animationFrameId = requestAnimationFrame(update);
        ticking = true;
      }
    };

    const handleLeave = () => {
      localX = -1000;
      localY = -1000;
      if (!ticking) {
        animationFrameId = requestAnimationFrame(update);
        ticking = true;
      }
    };

    section.addEventListener('mousemove', handleMove);
    section.addEventListener('mouseleave', handleLeave);
    return () => {
      section.removeEventListener('mousemove', handleMove);
      section.removeEventListener('mouseleave', handleLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const services: ServiceItem[] = [
    {
      id: 'web-design',
      title: 'Web Design & Development',
      badge: 'Design & Code',
      icon: 'desktop_windows',
      description:
        'We build bespoke, blazing-fast websites tailored specifically for Pampanga businesses. Fully responsive layouts designed to convert visitors into customers.',
      href: '/services/web-design',
      className: styles.cardWebDesign || '',
      graphic: (
        <div className={styles.webDesignGraphic}>
          <div className={styles.graphicBar}>
            <div className={styles.graphicDot} />
            <div className={styles.graphicDot} style={{ opacity: 0.6 }} />
            <div className={styles.graphicDot} style={{ opacity: 0.3 }} />
          </div>
          <div className={styles.graphicGrid}>
            <div className={styles.graphicBox} style={{ borderStyle: 'solid' }} />
            <div style={{ display: 'grid', gap: '8px' }}>
              <div className={styles.graphicBox} />
              <div
                className={styles.graphicBox}
                style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)' }}
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'seo',
      title: 'SEO & Growth',
      badge: 'Visibility',
      icon: 'query_stats',
      description:
        'Local SEO and technical optimization to help Google find you. Improve ranks and Core Web Vitals.',
      href: '/services/seo',
      className: styles.cardSeo || '',
      graphic: (
        <svg className={styles.seoGraphic} viewBox="0 0 150 120" fill="none">
          <path d="M10 110 H140" stroke="rgba(16, 185, 129, 0.2)" strokeWidth="2" />
          <path
            d="M10 110 L45 80 L80 90 L130 30"
            stroke="var(--color-accent)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="45" cy="80" r="4" fill="var(--text-primary)" />
          <circle cx="80" cy="90" r="4" fill="var(--text-primary)" />
          <circle cx="130" cy="30" r="5" fill="var(--color-accent)" />
          <path
            d="M130 30 V50 M130 30 H110"
            stroke="var(--color-accent)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      id: 'ai-solutions',
      title: 'AI & Automations',
      badge: 'Intelligence',
      icon: 'psychology',
      description:
        'Streamline your internal operations with LLM integrations, custom chatbot agents, and Zapier flows.',
      href: '/services/ai-solutions',
      className: styles.cardAi || '',
      graphic: (
        <svg className={styles.aiGraphic} viewBox="0 0 150 120" fill="none">
          <circle cx="40" cy="60" r="6" fill="var(--color-accent)" />
          <circle cx="110" cy="30" r="6" fill="var(--color-accent)" style={{ opacity: 0.7 }} />
          <circle cx="110" cy="90" r="6" fill="var(--color-accent)" style={{ opacity: 0.7 }} />
          <line
            x1="40"
            y1="60"
            x2="110"
            y2="30"
            stroke="var(--color-accent)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <line
            x1="40"
            y1="60"
            x2="110"
            y2="90"
            stroke="var(--color-accent)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <line x1="110" y1="30" x2="110" y2="90" stroke="var(--color-accent)" strokeWidth="1.5" />
          <circle cx="75" cy="45" r="3" fill="var(--text-primary)" />
          <circle cx="75" cy="75" r="3" fill="var(--text-primary)" />
        </svg>
      ),
    },
    {
      id: '1-on-1-help',
      title: '1-on-1 Support & Debugging',
      badge: 'Live Help',
      icon: 'support_agent',
      description:
        'Live consulation sessions with our web developers. Change anything on your website without any additional fees.',
      href: '/services/1-on-1-help',
      className: styles.cardHelp || '',
      graphic: (
        <div className={styles.helpGraphic}>
          <div>const debug = (bug) =&gt; &#123;</div>
          <div style={{ paddingLeft: '15px', color: 'var(--text-primary)' }}>
            if (bug.resolved) return;
          </div>
          <div style={{ paddingLeft: '15px', color: 'var(--text-primary)' }}>
            deploy(resolve(bug));
          </div>
          <div>&#125;;</div>
          <div style={{ marginTop: '10px', color: 'var(--text-secondary)' }}>
            {'// Live 1-on-1 developer console'}
          </div>
        </div>
      ),
    },
  ];

  return (
    <Section id="services" className={styles.section} ref={sectionRef}>
      <Container>
        <div className={styles.header}>
          <span className={`text-accent ${styles.badge}`}>What We Do</span>
          <h2 className={`text-gradient ${styles.title}`}>Web Design Services in Pampanga</h2>
          <p className={styles.subtitle}>
            From highly custom interfaces to automated AI pipelines, we build high-performance
            products that set your brand apart.
          </p>
          <div className={styles.locationChip}>
            <span className={`material-symbols-outlined ${styles.locationIcon}`} aria-hidden="true">
              location_on
            </span>
            Pampanga, Philippines
          </div>
        </div>

        <div className={styles.grid}>
          {services.map(service => (
            <m.div
              key={service.id}
              className={`${styles.card} ${service.className}`}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: prefersReducedMotion ? 0.25 : 0.5 }}
              whileHover={
                prefersReducedMotion
                  ? {}
                  : {
                      y: -5,
                      scale: 1.015,
                      borderColor: 'var(--border-hover)',
                    }
              }
            >
              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconContainer}>
                    <span
                      className={`material-symbols-outlined text-accent ${styles.icon}`}
                      aria-hidden="true"
                    >
                      {service.icon}
                    </span>
                  </div>
                  <div>
                    <span
                      className="text-accent"
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {service.badge}
                    </span>
                    <h3 className={styles.cardTitle}>{service.title}</h3>
                  </div>
                </div>

                <p className={styles.cardDescription}>{service.description}</p>

                <Link to={service.href} className={styles.learnMoreBtn}>
                  Learn More
                  <span
                    className={`material-symbols-outlined ${styles.learnMoreArrow}`}
                    aria-hidden="true"
                  >
                    arrow_forward
                  </span>
                </Link>
              </div>

              <div className={service.id === 'web-design' ? '' : styles.graphicContainer}>
                {service.graphic}
              </div>
            </m.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
