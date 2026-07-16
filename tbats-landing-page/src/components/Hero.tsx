import { m } from 'framer-motion';
import { Link } from 'react-router';
import Section from '@components/ui/Section';
import Container from '@components/ui/Container';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <Section className={styles.hero}>
      <Container className={styles.heroContainer}>
        <div className={styles.grid}>
          {/* Left Column: Content */}
          <div className={`${styles.content} animate-fade-in`}>
            <div className={styles.badge}>
              <span className={`${styles.dot} animate-pulse`} />
              Premium Web Development Studio
            </div>

            <h1 className={styles.title}>
              <span className={styles.titleHighlight}>Pampanga</span> Web Design Company
              <span className={styles.titleDash}> — </span>
              <span className="text-gradient">Affordable Websites That Bring You Customers</span>
            </h1>

            <p className={styles.description}>
              We build and manage your affordable, mobile-friendly website — fast, built to bring
              you more customers, and run entirely by us so you never have to worry about it.
            </p>

            <div className={styles.actions}>
              <Link to="/contact" className={`${styles.heroLink} ${styles.heroLinkPrimary}`}>
                Start a Project
              </Link>
              <a href="#process" className={`${styles.heroLink} ${styles.heroLinkSecondary}`}>
                How We Work
              </a>
            </div>
          </div>

          {/* Right Column: Floating Overlapping visual elements */}
          <div className={styles.visualsColumn}>
            {/* Card 1: Google Rank */}
            <m.div
              className={`${styles.floatingCard} ${styles.googleCard}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div
                className={styles.cardIconWrapper}
                style={{
                  backgroundColor: 'rgba(245, 158, 11, 0.15)',
                  borderColor: 'rgba(245, 158, 11, 0.3)',
                  color: '#f59e0b',
                }}
              >
                <span className="material-symbols-outlined">stars</span>
              </div>
              <div className={styles.cardTextWrapper}>
                <span className={styles.cardLabel}>SEO Authority</span>
                <span className={styles.cardValue}>#1 Google Ranking</span>
              </div>
            </m.div>

            {/* Card 2: Traffic with Graph */}
            <m.div
              className={`${styles.floatingCard} ${styles.trafficCard}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className={styles.trafficHeader}>
                <div
                  className={styles.cardIconWrapper}
                  style={{
                    backgroundColor: 'rgba(14, 165, 233, 0.15)',
                    borderColor: 'rgba(14, 165, 233, 0.3)',
                    color: '#0ea5e9',
                  }}
                >
                  <span className="material-symbols-outlined">trending_up</span>
                </div>
                <div className={styles.cardTextWrapper}>
                  <span className={styles.cardLabel}>Traffic Growth</span>
                  <span className={styles.cardValue}>+67% Visitors</span>
                </div>
              </div>
              {/* Sparkline Graph */}
              <div className={styles.chartWrapper}>
                <svg viewBox="0 0 200 60" className={styles.sparkline}>
                  <defs>
                    <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 0 50 Q 25 35 50 45 T 100 20 T 150 25 T 200 5"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 0 50 Q 25 35 50 45 T 100 20 T 150 25 T 200 5 L 200 60 L 0 60 Z"
                    fill="url(#chartGlow)"
                  />
                </svg>
              </div>
            </m.div>

            {/* Card 3: Sales amount */}
            <m.div
              className={`${styles.floatingCard} ${styles.salesCard}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <div
                className={styles.cardIconWrapper}
                style={{
                  backgroundColor: 'rgba(16, 185, 129, 0.15)',
                  borderColor: 'rgba(16, 185, 129, 0.3)',
                  color: '#10b981',
                }}
              >
                <span className="material-symbols-outlined">shopping_bag</span>
              </div>
              <div className={styles.cardTextWrapper}>
                <span className={styles.cardLabel}>Conversions</span>
                <span className={styles.cardValue}>+12 Sales</span>
              </div>
            </m.div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
