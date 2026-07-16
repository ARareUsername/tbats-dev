import { type CSSProperties } from 'react';
import { m } from 'framer-motion';
import { Link } from 'react-router';
import Button from '@components/ui/Button';
import useReducedMotion from '@hooks/useReducedMotion';
import styles from './ReadyToGetStarted.module.css';

const MOTE_COUNT = 24;

export default function ReadyToGetStarted() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="get-started" className={styles.section}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.motes} aria-hidden="true">
        {Array.from({ length: MOTE_COUNT }, (_, i) => (
          <span
            key={i}
            className={styles.mote}
            style={
              {
                '--i': i,
                top: `${(i * 37) % 90 + 5}%`,
                left: `${(i * 53) % 92 + 4}%`,
              } as CSSProperties
            }
          />
        ))}
      </div>

      <m.div
        className={styles.fluidContent}
        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: prefersReducedMotion ? 0.25 : 0.6 }}
      >
        <h2 className={`text-gradient ${styles.title}`}>Ready to Get Started?</h2>
        <p className={styles.description}>
          Whether you want to build a brand new site or resolve complex technical bugs, we are
          here to bring your vision to life.
        </p>

        <div className={styles.pill}>
          <span className={styles.pillDot} aria-hidden="true" />
          Now booking — Q3 2026
        </div>

        <div className={styles.btnGroup}>
          <Button as="a" href="sms:+639171234567" variant="secondary" size="lg">
            <span className={`material-symbols-outlined ${styles.btnIcon}`} aria-hidden="true">
              sms
            </span>
            Text Us
          </Button>
          <Button as={Link} to="/contact" variant="primary" size="lg">
            <span className={`material-symbols-outlined ${styles.btnIcon}`} aria-hidden="true">
              send
            </span>
            Send us a Message
          </Button>
        </div>
      </m.div>
    </section>
  );
}
