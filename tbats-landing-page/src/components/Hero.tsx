import Section from '@components/ui/Section';
import Container from '@components/ui/Container';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <Section className={styles.hero}>
      <Container className={styles.heroContainer}>
        <div className={`${styles.content} animate-fade-in`}>
          <div className={styles.badge}>
            <span className={`${styles.dot} animate-pulse`} />
            Premium Web Development Studio
          </div>

          <h1 className={styles.title}>
            Crafting Digital Experiences That <span className="text-gradient">Convert</span>.
          </h1>

          <p className={styles.description}>
            We build high-end, responsive, and blazing-fast websites for forward-thinking
            businesses. No technical jargon, just results.
          </p>

          <div className={styles.actions}>
            <a href="#contact" className={`${styles.heroLink} ${styles.heroLinkPrimary}`}>
              Start a Project
            </a>
            <a href="#process" className={`${styles.heroLink} ${styles.heroLinkSecondary}`}>
              How We Work
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
