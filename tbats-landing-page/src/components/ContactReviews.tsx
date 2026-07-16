import { Link } from 'react-router';
import { m } from 'framer-motion';
import Section from '@components/ui/Section';
import Card from '@components/ui/Card';
import Avatar from '@components/ui/Avatar';
import Button from '@components/ui/Button';
import useReducedMotion from '@hooks/useReducedMotion';
import styles from './ContactReviews.module.css';

interface Review {
  initials: string;
  name: string;
  business: string;
  text: string;
}

const reviews: readonly Review[] = [
  {
    initials: 'JD',
    name: 'Juan Dela Cruz',
    business: 'Sample Business Co.',
    text: 'Placeholder review text. This is example content to show the layout until real Google reviews are added.',
  },
  {
    initials: 'MA',
    name: 'Maria Angeles',
    business: 'Example Services',
    text: 'Another placeholder review. The real quotes from Google will replace these once connected.',
  },
] as const;

function Stars() {
  return (
    <div className={styles.stars} role="img" aria-label="5 out of 5 stars">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function ContactReviews() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.reviewsHeader}>
          <div className={styles.googleBadge}>
            <Stars />
            <span className={styles.googleScore}>5.0 on Google</span>
          </div>
          <h2 className={`${styles.title} text-gradient`}>See Why Clients Choose Us</h2>
          <p className={styles.disclaimer}>
            Real reviews from real clients. Every word is from Google.
          </p>
        </div>

        <div className={styles.reviewsGrid}>
          {reviews.map((review, i) => (
            <Card key={i} variant="editorial" className={styles.card}>
              <Stars />
              <p className={styles.text}>&ldquo;{review.text}&rdquo;</p>
              <div className={styles.client}>
                <Avatar initials={review.initials} size="sm" className={styles.avatar} />
                <div>
                  <div className={styles.name}>{review.name}</div>
                  <div className={styles.business}>{review.business}</div>
                </div>
                <span className={styles.googleTag}>Google</span>
              </div>
            </Card>
          ))}
        </div>

        <m.div
          className={styles.cta}
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: prefersReducedMotion ? 0.25 : 0.6 }}
        >
          <h3 className={styles.ctaTitle}>Prefer to Text? We&apos;re Here</h3>
          <p className={styles.ctaText}>Send us a quick message — we respond fast.</p>
          <div className={styles.ctaBtns}>
            <Button as="a" href="sms:+639171234567" variant="secondary" size="lg">
              <span className={`material-symbols-outlined ${styles.ctaIcon}`} aria-hidden="true">
                sms
              </span>
              Text Us
            </Button>
            <Button as={Link} to="/contact" variant="primary" size="lg">
              <span className={`material-symbols-outlined ${styles.ctaIcon}`} aria-hidden="true">
                send
              </span>
              Send Us a Message
            </Button>
          </div>
        </m.div>
      </div>
    </Section>
  );
}
