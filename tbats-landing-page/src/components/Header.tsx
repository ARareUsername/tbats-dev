import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  theme: 'light' | 'dark';
  setTheme: (_theme: 'light' | 'dark') => void;
}

export default function Header({ theme, setTheme }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="glass-nav">
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span className="material-symbols-outlined" style={{ color: 'var(--color-accent)', fontSize: '28px' }}>
            code_blocks
          </span>
          <span style={{ 
            fontSize: '1.4rem', 
            fontWeight: 800, 
            letterSpacing: '0.02em',
            fontFamily: 'var(--font-serif)'
          }}>
            tbats<span style={{ color: 'var(--color-accent)' }}>.dev</span>
          </span>
        </div>
        
        {/* Desktop Nav */}
        <div className="desktop-nav" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '1.5rem', marginRight: '1rem' }} className="nav-links">
            <a href="#services" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s' }}>Services</a>
            <a href="#portfolio" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s' }}>Sandbox</a>
            <a href="#process" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s' }}>Process</a>
            <a href="#contact" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s' }}>Contact</a>
            <a href="#pricing" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s' }}>Pricing</a>
            <a href="#about" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s' }}>About</a>
          </div>
          
          {/* Custom style toggler for color theme */}
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginRight: '0.5rem' }}>
            {/* Light/Dark Toggle */}
            <motion.button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="clickable"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1.5px solid var(--border-color)',
                borderRadius: '50%',
                width: '34px',
                height: '34px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--text-primary)',
                transition: 'background 0.3s, border-color 0.3s'
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                {theme === 'dark' ? 'light_mode' : 'dark_mode'}
              </span>
            </motion.button>
          </div>

          <a href="#contact" className="btn-primary" style={{ padding: '0.5rem 1.2rem', fontSize: '0.85rem' }}>
            Start a Project
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <button 
          className="mobile-nav-toggle clickable"
          onClick={() => setIsOpen(!isOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-primary)',
            cursor: 'pointer',
            display: 'none',
            padding: '0.5rem'
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>
            {isOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'absolute',
              top: '80px',
              left: 0,
              width: '100%',
              background: 'var(--nav-bg)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              borderBottom: '1px solid var(--border-color)',
              display: 'flex',
              flexDirection: 'column',
              padding: '2rem',
              gap: '1.5rem'
            }}
          >
            <a href="#services" onClick={() => setIsOpen(false)} style={{ color: 'var(--text-primary)', textDecoration: 'none', fontSize: '1.1rem' }}>Services</a>
            <a href="#portfolio" onClick={() => setIsOpen(false)} style={{ color: 'var(--text-primary)', textDecoration: 'none', fontSize: '1.1rem' }}>Sandbox</a>
            <a href="#process" onClick={() => setIsOpen(false)} style={{ color: 'var(--text-primary)', textDecoration: 'none', fontSize: '1.1rem' }}>Process</a>
            <a href="#contact" onClick={() => setIsOpen(false)} style={{ color: 'var(--text-primary)', textDecoration: 'none', fontSize: '1.1rem' }}>Contact</a>
            <a href="#pricing" onClick={() => setIsOpen(false)} style={{ color: 'var(--text-primary)', textDecoration: 'none', fontSize: '1.1rem' }}>Pricing</a>
            <a href="#about" onClick={() => setIsOpen(false)} style={{ color: 'var(--text-primary)', textDecoration: 'none', fontSize: '1.1rem' }}>About</a>
            
            {/* Style Toggles in Mobile */}
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '0.5rem' }}>
              <motion.button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="clickable"
                whileTap={{ scale: 0.95 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1.5px solid var(--border-color)',
                  borderRadius: '50%',
                  width: '38px',
                  height: '38px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: 'var(--text-primary)',
                  transition: 'background 0.3s, border-color 0.3s'
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                  {theme === 'dark' ? 'light_mode' : 'dark_mode'}
                </span>
              </motion.button>
            </div>

            <a href="#contact" onClick={() => setIsOpen(false)} className="btn-primary" style={{ textAlign: 'center', marginTop: '1rem', justifyContent: 'center' }}>
              Start a Project
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}