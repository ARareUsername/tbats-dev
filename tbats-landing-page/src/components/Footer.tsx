import { Link } from 'react-router';
import Container from '@components/ui/Container';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className="grid-2" style={{ alignItems: 'start', gap: '2rem' }}>
          <div>
            <div className={styles.logoContainer}>
              <span className={`material-symbols-outlined ${styles.logoIcon}`} aria-hidden="true">
                code_blocks
              </span>
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
              <h4 className={styles.linksTitle}>Services</h4>
              <ul className={styles.linksList}>
                <li>
                  <Link to="/services/web-design" className={styles.link}>
                    Web Design
                  </Link>
                </li>
                <li>
                  <Link to="/services/seo" className={styles.link}>
                    SEO & Growth
                  </Link>
                </li>
                <li>
                  <Link to="/services/ai-solutions" className={styles.link}>
                    AI Solutions
                  </Link>
                </li>
                <li>
                  <Link to="/services/1-on-1-help" className={styles.link}>
                    1-on-1 Help
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className={styles.linksTitle}>Company</h4>
              <ul className={styles.linksList}>
                <li>
                  <Link to="/about" className={styles.link}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className={styles.link}>
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/our-work/case-studies" className={styles.link}>
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link to="/our-work/portfolio" className={styles.link}>
                    Portfolio
                  </Link>
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
            <span className={`material-symbols-outlined ${styles.icon}`} aria-hidden="true">
              language
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
