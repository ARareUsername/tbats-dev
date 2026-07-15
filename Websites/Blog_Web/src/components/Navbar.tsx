import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import ThemeToggle from '@components/ThemeToggle'
import styles from './Navbar.module.css'

interface NavbarProps {
  theme: 'light' | 'dark'
  onToggleTheme: () => void
  onNavigate?: (route: string) => void
  currentRoute?: string
}

const links = [
  { label: 'Home', route: 'home' },
  { label: 'Posts', route: 'posts' },
  { label: 'Depths', route: 'depths' },
  { label: 'About', route: 'about' },
  { label: 'Contact', route: 'contact' },
]

export default function Navbar({ theme, onToggleTheme, onNavigate, currentRoute = 'home' }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className={styles.navbar}>
      <div className={styles.inner}>
        <button
          className={styles.logo}
          onClick={() => onNavigate?.('home')}
        >
          <span className={styles.logoIcon}>~</span>
          <span className={styles.logoText}>Ocean Blog</span>
        </button>

        <div className={styles.desktopLinks}>
          {links.map(link => (
            <button
              key={link.route}
              className={`${styles.link} ${currentRoute === link.route ? styles.active : ''}`}
              onClick={() => onNavigate?.(link.route)}
            >
              {link.label}
            </button>
          ))}
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>

        <div className={styles.mobileControls}>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className={`${styles.hamburgerLine} ${menuOpen ? styles.open : ''}`} />
            <span className={`${styles.hamburgerLine} ${menuOpen ? styles.open : ''}`} />
            <span className={`${styles.hamburgerLine} ${menuOpen ? styles.open : ''}`} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
          >
            {links.map(link => (
              <button
                key={link.route}
                className={`${styles.mobileLink} ${currentRoute === link.route ? styles.active : ''}`}
                onClick={() => {
                  onNavigate?.(link.route)
                  setMenuOpen(false)
                }}
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
