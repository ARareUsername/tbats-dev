/* ─── Imports ─── */
import styles from './Hero.module.css';

/* ─── Component ─── */
export default function Hero() {
  /* ─── Handlers ─── */
  const handleCtaClick = () => {
    const nextSection = document.getElementById('portfolio');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  /* ─── Render ─── */
  return (
    <section className={styles.hero} id="home">
      {/* Background layers */}
      <div className={styles.background} />
      <div className={styles.overlay} />

      {/* Foreground content */}
      <div className={styles.content}>
        <h1 className={styles.name}>
          Alex Morgan
        </h1>
        <p className={styles.tagline}>
          Capturing raw emotion and fleeting moments through the lens.
          Portrait &amp; documentary photographer based in Portland.
        </p>
        <button
          className={styles.cta}
          onClick={handleCtaClick}
          type="button"
        >
          View Portfolio
        </button>
      </div>

      {/* Scroll-down indicator */}
      <div className={styles.scrollIndicator}>
        <span>Scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
