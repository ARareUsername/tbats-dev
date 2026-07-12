import Container from '@components/ui/Container';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className="grid-2" style={{ alignItems: 'start', gap: '2rem' }}>
          <div>
            <div className={styles.logoContainer}>
              <span className={`material-symbols-outlined ${styles.logoIcon}`}>code_blocks</span>
              <span className={styles.logoText}>
                tbats<span className={styles.logoDot}>.dev</span>
              </span>
            </div>
            <p className={styles.description}>
              Premium web development and design agency helping businesses build high-converting,
              visually stunning digital experiences.
            </p>
          </div>

          <div className={styles.links}>
            <div>
              <h4 className={styles.linksTitle}>Company</h4>
              <ul className={styles.linksList}>
                <li>
                  <a href="#about" className={styles.link}>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#process" className={styles.link}>
                    Our Process
                  </a>
                </li>
                <li>
                  <a href="#pricing" className={styles.link}>
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className={styles.linksTitle}>Contact</h4>
              <ul className={styles.linksList}>
                <li className={styles.linkItem}>hello@tbats.dev</li>
                <li className={styles.linkItem}>Pampanga, Philippines</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} TBATS Dev. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <span className={`material-symbols-outlined ${styles.icon}`}>language</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
