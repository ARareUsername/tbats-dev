import { useState, useEffect } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router';
import Container from '@components/ui/Container';
import Button from '@components/ui/Button';
import styles from './Header.module.css';

interface HeaderProps {
  theme: 'light' | 'dark';
  setTheme: (_theme: 'light' | 'dark') => void;
}

export default function Header({ theme, setTheme }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isWorkOpen, setIsWorkOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileWorkOpen, setIsMobileWorkOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isAboutActive = location.pathname === '/about';
  const isServicesActive = location.pathname.startsWith('/services');
  const isWorkActive = location.pathname.startsWith('/our-work');
  const isPricingActive = location.pathname === '/pricing';
  const isContactActive = location.pathname === '/contact';

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
    <nav className={`glass-nav${isScrolled ? ' scrolled' : ''}`}>
      <Container className={styles.navContainer}>
        <Link to="/" className={styles.logoContainer} onClick={() => setIsOpen(false)}>
          <span
            className={`material-symbols-outlined ${styles.logoIcon}`}
            style={{ fontSize: '28px' }}
            aria-hidden="true"
          >
            code_blocks
          </span>
          <span className={styles.logoText}>
            tbats<span className={styles.logoDot}>.dev</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className={styles.desktopNav}>
          <div className={styles.navLinks}>
            <Link
              to="/about"
              className={`${styles.navLink}${isAboutActive ? ` ${styles.navLinkActive}` : ''}`}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div
              className={`${styles.dropdownContainer} ${styles.dropdownServices}`}
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
              onFocus={() => setIsServicesOpen(true)}
              onBlur={e => {
                if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                  setIsServicesOpen(false);
                }
              }}
            >
              <button
                className={`${styles.navLink} ${styles.dropdownToggle}${isServicesActive ? ` ${styles.navLinkActive}` : ''}`}
                aria-haspopup="menu"
                aria-expanded={isServicesOpen}
              >
                Services
                <span
                  className={`material-symbols-outlined ${styles.arrowIcon}`}
                  aria-hidden="true"
                >
                  keyboard_arrow_down
                </span>
              </button>
              <AnimatePresence>
                {isServicesOpen && (
                  <m.div
                    className={styles.dropdownMenu}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.15 }}
                    role="menu"
                  >
                    <Link
                      to="/services/web-design"
                      className={styles.dropdownItem}
                      role="menuitem"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      <span
                        className={`${styles.dropdownIcon} ${styles.iconGreen} material-symbols-outlined`}
                      >
                        desktop_windows
                      </span>
                      <div className={styles.dropdownItemText}>
                        <span className={styles.dropdownItemTitle}>Web Design</span>
                        <span className={styles.dropdownItemDesc}>
                          Bespoke high-end websites built from scratch
                        </span>
                      </div>
                    </Link>
                    <Link
                      to="/services/seo"
                      className={styles.dropdownItem}
                      role="menuitem"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      <span
                        className={`${styles.dropdownIcon} ${styles.iconBlue} material-symbols-outlined`}
                      >
                        query_stats
                      </span>
                      <div className={styles.dropdownItemText}>
                        <span className={styles.dropdownItemTitle}>SEO & Growth</span>
                        <span className={styles.dropdownItemDesc}>
                          Local & technical SEO to rank on Google
                        </span>
                      </div>
                    </Link>
                    <Link
                      to="/services/ai-solutions"
                      className={styles.dropdownItem}
                      role="menuitem"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      <span
                        className={`${styles.dropdownIcon} ${styles.iconPurple} material-symbols-outlined`}
                      >
                        psychology
                      </span>
                      <div className={styles.dropdownItemText}>
                        <span className={styles.dropdownItemTitle}>AI Solutions</span>
                        <span className={styles.dropdownItemDesc}>
                          Integrate custom LLMs and automate workflows
                        </span>
                      </div>
                    </Link>
                    <Link
                      to="/services/1-on-1-help"
                      className={styles.dropdownItem}
                      role="menuitem"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      <span
                        className={`${styles.dropdownIcon} ${styles.iconGold} material-symbols-outlined`}
                      >
                        support_agent
                      </span>
                      <div className={styles.dropdownItemText}>
                        <span className={styles.dropdownItemTitle}>1-on-1 Help</span>
                        <span className={styles.dropdownItemDesc}>
                          Debugging, setup, and consulting sessions
                        </span>
                      </div>
                    </Link>
                  </m.div>
                )}
              </AnimatePresence>
            </div>

            {/* Our Work Dropdown */}
            <div
              className={`${styles.dropdownContainer} ${styles.dropdownWork}`}
              onMouseEnter={() => setIsWorkOpen(true)}
              onMouseLeave={() => setIsWorkOpen(false)}
              onFocus={() => setIsWorkOpen(true)}
              onBlur={e => {
                if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                  setIsWorkOpen(false);
                }
              }}
            >
              <button
                className={`${styles.navLink} ${styles.dropdownToggle}${isWorkActive ? ` ${styles.navLinkActive}` : ''}`}
                aria-haspopup="menu"
                aria-expanded={isWorkOpen}
              >
                Our Work
                <span
                  className={`material-symbols-outlined ${styles.arrowIcon}`}
                  aria-hidden="true"
                >
                  keyboard_arrow_down
                </span>
              </button>
              <AnimatePresence>
                {isWorkOpen && (
                  <m.div
                    className={styles.dropdownMenu}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.15 }}
                    role="menu"
                  >
                    <Link
                      to="/our-work"
                      className={styles.dropdownItem}
                      role="menuitem"
                      onClick={() => setIsWorkOpen(false)}
                    >
                      <span
                        className={`${styles.dropdownIcon} ${styles.iconTeal} material-symbols-outlined`}
                      >
                        dashboard
                      </span>
                      <div className={styles.dropdownItemText}>
                        <span className={styles.dropdownItemTitle}>Overview</span>
                        <span className={styles.dropdownItemDesc}>
                          Deep dive into our engineering catalog
                        </span>
                      </div>
                    </Link>
                    <Link
                      to="/our-work/case-studies"
                      className={styles.dropdownItem}
                      role="menuitem"
                      onClick={() => setIsWorkOpen(false)}
                    >
                      <span
                        className={`${styles.dropdownIcon} ${styles.iconPink} material-symbols-outlined`}
                      >
                        menu_book
                      </span>
                      <div className={styles.dropdownItemText}>
                        <span className={styles.dropdownItemTitle}>Case Studies</span>
                        <span className={styles.dropdownItemDesc}>
                          Explore detailed client success stories
                        </span>
                      </div>
                    </Link>
                    <Link
                      to="/our-work/portfolio"
                      className={styles.dropdownItem}
                      role="menuitem"
                      onClick={() => setIsWorkOpen(false)}
                    >
                      <span
                        className={`${styles.dropdownIcon} ${styles.iconTeal} material-symbols-outlined`}
                      >
                        grid_view
                      </span>
                      <div className={styles.dropdownItemText}>
                        <span className={styles.dropdownItemTitle}>Portfolio</span>
                        <span className={styles.dropdownItemDesc}>
                          Full gallery of our custom web platforms
                        </span>
                      </div>
                    </Link>
                  </m.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/pricing"
              className={`${styles.navLink}${isPricingActive ? ` ${styles.navLinkActive}` : ''}`}
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className={`${styles.navLink}${isContactActive ? ` ${styles.navLinkActive}` : ''}`}
            >
              Contact
            </Link>
          </div>

          {/* Theme toggler */}
          <div className={styles.themeToggleWrapper}>
            <m.button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={`${styles.themeButton} clickable`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            >
              <span
                className="material-symbols-outlined"
                style={{ fontSize: '18px' }}
                aria-hidden="true"
              >
                {theme === 'dark' ? 'light_mode' : 'dark_mode'}
              </span>
            </m.button>
          </div>

          <Button as={Link} to="/contact" variant="primary" size="sm">
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
          <span
            className="material-symbols-outlined"
            style={{ fontSize: '28px' }}
            aria-hidden="true"
          >
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
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className={`${styles.mobileNavLink}${isAboutActive ? ` ${styles.mobileNavLinkActive}` : ''}`}
            >
              About
            </Link>

            {/* Mobile Services Accordion */}
            <div className={styles.mobileDropdown}>
              <button
                className={styles.mobileDropdownToggle}
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                aria-expanded={isMobileServicesOpen}
              >
                Services
                <span className="material-symbols-outlined">
                  {isMobileServicesOpen ? 'expand_less' : 'expand_more'}
                </span>
              </button>
              <AnimatePresence>
                {isMobileServicesOpen && (
                  <m.div
                    className={styles.mobileDropdownMenu}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <Link
                      to="/services/web-design"
                      onClick={() => setIsOpen(false)}
                      className={styles.mobileDropdownItem}
                    >
                      Web Design
                    </Link>
                    <Link
                      to="/services/seo"
                      onClick={() => setIsOpen(false)}
                      className={styles.mobileDropdownItem}
                    >
                      SEO & Growth
                    </Link>
                    <Link
                      to="/services/ai-solutions"
                      onClick={() => setIsOpen(false)}
                      className={styles.mobileDropdownItem}
                    >
                      AI Solutions
                    </Link>
                    <Link
                      to="/services/1-on-1-help"
                      onClick={() => setIsOpen(false)}
                      className={styles.mobileDropdownItem}
                    >
                      1-on-1 Help
                    </Link>
                  </m.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Our Work Accordion */}
            <div className={styles.mobileDropdown}>
              <button
                className={styles.mobileDropdownToggle}
                onClick={() => setIsMobileWorkOpen(!isMobileWorkOpen)}
                aria-expanded={isMobileWorkOpen}
              >
                Our Work
                <span className="material-symbols-outlined">
                  {isMobileWorkOpen ? 'expand_less' : 'expand_more'}
                </span>
              </button>
              <AnimatePresence>
                {isMobileWorkOpen && (
                  <m.div
                    className={styles.mobileDropdownMenu}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <Link
                      to="/our-work"
                      onClick={() => setIsOpen(false)}
                      className={styles.mobileDropdownItem}
                      style={{ fontWeight: 600 }}
                    >
                      Overview
                    </Link>
                    <Link
                      to="/our-work/case-studies"
                      onClick={() => setIsOpen(false)}
                      className={styles.mobileDropdownItem}
                    >
                      Case Studies
                    </Link>
                    <Link
                      to="/our-work/portfolio"
                      onClick={() => setIsOpen(false)}
                      className={styles.mobileDropdownItem}
                    >
                      Portfolio
                    </Link>
                  </m.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/pricing"
              onClick={() => setIsOpen(false)}
              className={`${styles.mobileNavLink}${isPricingActive ? ` ${styles.mobileNavLinkActive}` : ''}`}
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={`${styles.mobileNavLink}${isContactActive ? ` ${styles.mobileNavLinkActive}` : ''}`}
            >
              Contact
            </Link>

            {/* Style Toggles in Mobile */}
            <div className={styles.mobileMenuActions}>
              <m.button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className={`${styles.mobileThemeButton} clickable`}
                whileTap={{ scale: 0.95 }}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: '20px' }}
                  aria-hidden="true"
                >
                  {theme === 'dark' ? 'light_mode' : 'dark_mode'}
                </span>
              </m.button>
            </div>

            <Button
              as={Link}
              to="/contact"
              variant="primary"
              onClick={() => {
                setIsOpen(false);
              }}
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
