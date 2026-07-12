import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import MainLandingPage from './pages/MainLandingPage';
import GlobalFeatures from './components/GlobalFeatures';

const EcommerceSamplerPage = lazy(() => import('./pages/EcommerceSamplerPage'));

function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });

  // Track cursor position on document root for high-performance background spotlight grid
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Sync theme changes with body class list and localStorage
  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('theme-light');
    } else {
      document.body.classList.remove('theme-light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <BrowserRouter>
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
      
      <GlobalFeatures theme={theme} />
      
      <Suspense fallback={<div className="demo-loading-screen">Loading Demo...</div>}>
        <Routes>
          <Route path="/" element={<MainLandingPage theme={theme} setTheme={setTheme} />} />
          <Route path="/demo/:projectId" element={<EcommerceSamplerPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
