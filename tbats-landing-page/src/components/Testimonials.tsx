import Section from '@components/ui/Section';
import Card from '@components/ui/Card';
import Avatar from '@components/ui/Avatar';
import styles from './Testimonials.module.css';

interface Testimonial {
  name: string;
  business: string;
  text: string;
  stars: 5;
}

const reviews: readonly Testimonial[] = [
  {
    name: 'Sarah L.',
    business: 'Boutique Coffee Co.',
    text: 'TBATS completely transformed our online presence. Our new website is stunning, and the booking system they integrated increased our sales by 40% in the first month.',
    stars: 5,
  },
  {
    name: 'Mark T.',
    business: 'Tech Startup Founder',
    text: 'Working with TBATS was a breeze. They took our complex specifications and turned them into a sleek, fast, and highly professional platform. The editorial design is top-notch.',
    stars: 5,
  },
  {
    name: 'Elena R.',
    business: 'Real Estate Agency',
    text: 'I am not a tech person, but TBATS made the process incredibly easy to understand. They delivered on time, and the pricing was exactly as estimated. Highly recommended!',
    stars: 5,
  },
] as const;

export default function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Client Success Stories</h2>
          <p className={styles.description}>
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about
            working with us.
          </p>
        </div>

        <div className="grid-3">
          {reviews.map((review, i) => (
            <Card key={i} variant="editorial" className={styles.card}>
              <div className={styles.stars}>{'★'.repeat(review.stars)}</div>
              <p className={styles.text}>&ldquo;{review.text}&rdquo;</p>
              <div className={styles.client}>
                <Avatar
                  initials={review.name
                    .split(' ')
                    .map(n => n[0])
                    .join('')}
                  size="sm"
                  className={styles.avatar}
                />
                <div>
                  <div className={styles.name}>{review.name}</div>
                  <div className={styles.business}>{review.business}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
