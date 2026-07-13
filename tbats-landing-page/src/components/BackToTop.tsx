import { useState, useEffect } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import useReducedMotion from '@hooks/useReducedMotion';
import styles from './BackToTop.module.css';

export default function BackToTop() {
  const prefersReducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <m.a
          href="#"
          onClick={e => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
          }}
          className={styles.button}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: prefersReducedMotion ? 0.15 : 0.25 }}
          aria-label="Back to top"
        >
          <span
            className="material-symbols-outlined"
            aria-hidden="true"
            style={{ fontSize: '24px' }}
          >
            arrow_upward
          </span>
        </m.a>
      )}
    </AnimatePresence>
  );
}
