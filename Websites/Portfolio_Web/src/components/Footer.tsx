/* ─── Imports ─── */
import styles from './Footer.module.css';

/* ─── Constants ─── */
const NAV_LINKS = [
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const SOCIAL_LINKS = [
  { label: 'IG', href: '#' },
  { label: 'FB', href: '#' },
  { label: 'TW', href: '#' },
  { label: 'LI', href: '#' },
];

/* ─── Component ─── */
export default function Footer() {
  /* ─── Handlers ─── */
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  /* ─── Render ─── */
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Brand / Bio column */}
        <div>
          <div className={styles.brand}>
            Captur<span className={styles.brandAccent}>e</span>
          </div>
          <p className={styles.description}>
            Portland-based freelance photographer specializing in portrait,
            lifestyle, and documentary photography. Every frame tells a story.
          </p>
          <div className={styles.socialLinks}>
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={styles.socialLink}
                aria-label={link.label}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Navigation column */}
        <div>
          <h3 className={styles.columnTitle}>Navigation</h3>
          <div className={styles.columnLinks}>
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className={styles.columnLink}>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Contact column */}
        <div>
          <h3 className={styles.columnTitle}>Contact</h3>
          <div className={styles.columnLinks}>
            <span className={styles.columnLink}>hello@capturephoto.com</span>
            <span className={styles.columnLink}>+1 (503) 555-0142</span>
            <span className={styles.columnLink}>Portland, OR</span>
          </div>
        </div>
      </div>

      {/* Bottom bar: copyright + back-to-top */}
      <div className={styles.bottom}>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} Capture Photography. All rights reserved.
        </p>
        <button
          className={styles.backToTop}
          onClick={handleBackToTop}
          type="button"
        >
          Back to top
        </button>
      </div>
    </footer>
  );
}
