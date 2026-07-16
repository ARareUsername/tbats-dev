import { useState, useEffect } from 'react';
import { Outlet, useRouteLoaderData, useLocation } from 'react-router';
import { AnimatePresence, m } from 'framer-motion';
import Header from '@components/Header';
import Footer from '@components/Footer';
import BackToTop from '@components/BackToTop';
import ReadyToGetStarted from '@components/ReadyToGetStarted';

export default function Layout() {
  const rootData = useRouteLoaderData('root') as { theme: 'light' | 'dark' } | null;
  const initialTheme = rootData?.theme || 'dark';
  const [theme, setThemeState] = useState<'light' | 'dark'>(initialTheme);
  const location = useLocation();

  const setTheme = (newTheme: 'light' | 'dark') => {
    setThemeState(newTheme);
    document.cookie = `theme=${newTheme}; Path=/; Max-Age=31536000; SameSite=Lax`;
    if (newTheme === 'light') {
      document.documentElement.classList.add('theme-light');
      document.body.classList.add('theme-light');
    } else {
      document.documentElement.classList.remove('theme-light');
      document.body.classList.remove('theme-light');
    }
  };

  // Sync theme class on mount/updates
  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('theme-light');
      document.body.classList.add('theme-light');
    } else {
      document.documentElement.classList.remove('theme-light');
      document.body.classList.remove('theme-light');
    }
  }, [theme]);

  return (
    <div style={{ position: 'relative', overflow: 'hidden', zIndex: 1 }}>
      <Header theme={theme} setTheme={setTheme} />

      <AnimatePresence mode="wait">
        <m.div
          key={location.pathname}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
        >
          <Outlet context={{ theme }} />
        </m.div>
      </AnimatePresence>

      {location.pathname !== '/contact' && <ReadyToGetStarted />}
      <Footer />
      <BackToTop />
    </div>
  );
}
