import { useState, useEffect } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import Container from '@components/ui/Container';
import Button from '@components/ui/Button';
import useActiveSection from '@hooks/useActiveSection';
import styles from './Header.module.css';

interface HeaderProps {
  theme: 'light' | 'dark';
  setTheme: (_theme: 'light' | 'dark') => void;
}

export default function Header({ theme, setTheme }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useActiveSection([
    'services',
    'portfolio',
    'process',
    'pricing',
    'contact',
  ]);

  // Trap focus inside mobile menu when open
  useEffect(() => {
    if (!isOpen) return;

    const menuElement = document.querySelector(`.${styles.mobileMenu}`);
    if (!menuElement) return;

    const focusableSelector =
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const focusableElements = menuElement.querySelectorAll(focusableSelector);
    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    // Focus first link in mobile menu initially
    firstElement.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <nav className="glass-nav">
      <Container className={styles.navContainer}>
        <div className={styles.logoContainer}>
          <span
            className={`material-symbols-outlined ${styles.logoIcon}`}
            style={{ fontSize: '28px' }}
          >
            code_blocks
          </span>
          <span className={styles.logoText}>
            tbats<span className={styles.logoDot}>.dev</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className={styles.desktopNav}>
          <div className={styles.navLinks}>
            <a
              href="#services"
              className={`${styles.navLink}${activeSection === 'services' ? ` ${styles.navLinkActive}` : ''}`}
            >
              Services
            </a>
            <a
              href="#portfolio"
              className={`${styles.navLink}${activeSection === 'portfolio' ? ` ${styles.navLinkActive}` : ''}`}
            >
              Sandbox
            </a>
            <a
              href="#process"
              className={`${styles.navLink}${activeSection === 'process' ? ` ${styles.navLinkActive}` : ''}`}
            >
              Process
            </a>
            <a
              href="#pricing"
              className={`${styles.navLink}${activeSection === 'pricing' ? ` ${styles.navLinkActive}` : ''}`}
            >
              Pricing
            </a>
            <a
              href="#contact"
              className={`${styles.navLink}${activeSection === 'contact' ? ` ${styles.navLinkActive}` : ''}`}
            >
              Contact
            </a>
          </div>

          {/* Custom style toggler for color theme */}
          <div className={styles.themeToggleWrapper}>
            {/* Light/Dark Toggle */}
            <m.button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={`${styles.themeButton} clickable`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                {theme === 'dark' ? 'light_mode' : 'dark_mode'}
              </span>
            </m.button>
          </div>

          <Button as="a" href="#contact" variant="primary" size="sm">
            Start a Project
          </Button>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className={`${styles.mobileNavToggle} clickable`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-nav-menu"
        >
          <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>
            {isOpen ? 'close' : 'menu'}
          </span>
        </button>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <m.div
            id="mobile-nav-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={styles.mobileMenu}
          >
            <a
              href="#services"
              onClick={() => setIsOpen(false)}
              className={`${styles.mobileNavLink}${activeSection === 'services' ? ` ${styles.mobileNavLinkActive}` : ''}`}
            >
              Services
            </a>
            <a
              href="#portfolio"
              onClick={() => setIsOpen(false)}
              className={`${styles.mobileNavLink}${activeSection === 'portfolio' ? ` ${styles.mobileNavLinkActive}` : ''}`}
            >
              Sandbox
            </a>
            <a
              href="#process"
              onClick={() => setIsOpen(false)}
              className={`${styles.mobileNavLink}${activeSection === 'process' ? ` ${styles.mobileNavLinkActive}` : ''}`}
            >
              Process
            </a>
            <a
              href="#pricing"
              onClick={() => setIsOpen(false)}
              className={`${styles.mobileNavLink}${activeSection === 'pricing' ? ` ${styles.mobileNavLinkActive}` : ''}`}
            >
              Pricing
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className={`${styles.mobileNavLink}${activeSection === 'contact' ? ` ${styles.mobileNavLinkActive}` : ''}`}
            >
              Contact
            </a>
            {/* Style Toggles in Mobile */}
            <div className={styles.mobileMenuActions}>
              <m.button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className={`${styles.mobileThemeButton} clickable`}
                whileTap={{ scale: 0.95 }}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                  {theme === 'dark' ? 'light_mode' : 'dark_mode'}
                </span>
              </m.button>
            </div>

            <Button
              as="a"
              href="#contact"
              variant="primary"
              onClick={() => setIsOpen(false)}
              style={{ textAlign: 'center', marginTop: '1rem', justifyContent: 'center' }}
            >
              Start a Project
            </Button>
          </m.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
