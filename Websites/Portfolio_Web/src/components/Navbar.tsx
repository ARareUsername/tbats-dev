/* ─── Imports ─── */
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

/* ─── Constants ─── */
const NAV_LINKS = [
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

/* ─── Component ─── */
export default function Navbar() {
  /* ─── State ─── */
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /* ─── Scroll Effect ─── */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ─── Handlers ─── */
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  /* ─── Derived classes ─── */
  const navbarClass = [
    styles.navbar,
    scrolled ? styles.navbarScrolled : '',
  ].filter(Boolean).join(' ');

  /* ─── Render ─── */
  return (
    <>
      {/* Desktop Navbar */}
      <nav className={navbarClass}>
        <div className={styles.logo}>
          Captur<span className={styles.logoAccent}>e</span>
        </div>

        <div className={styles.navLinks}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
        </div>

        {/* Hamburger (mobile toggle) */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          type="button"
        >
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
        </button>
      </nav>

      {/* Mobile overlay menu */}
      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}
        onClick={handleLinkClick}
        onKeyDown={(e) => e.key === 'Escape' && setMenuOpen(false)}
        role="dialog"
        aria-modal="true"
      >
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} className={styles.mobileNavLink}>
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}
