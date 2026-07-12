import { useEffect } from 'react';
import { useLocation } from 'react-router';
import CustomCursor from './CustomCursor';

interface GlobalFeaturesProps {
  theme: 'light' | 'dark';
}

export default function GlobalFeatures({ theme }: GlobalFeaturesProps) {
  const location = useLocation();
  const isDemoRoute = location.pathname.startsWith('/demo');

  useEffect(() => {
    if (isDemoRoute) {
      document.body.classList.add('demo-route');
    } else {
      document.body.classList.remove('demo-route');
    }
  }, [isDemoRoute]);

  // Track cursor position on document root using high-performance single requestAnimationFrame
  useEffect(() => {
    if (isDemoRoute) return;

    let animationFrameId: number;
    let mouseX = -100;
    let mouseY = -100;
    let ticking = false;

    const updateMousePosition = () => {
      document.documentElement.style.setProperty('--mouse-x', `${mouseX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${mouseY}px`);
      ticking = false;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!ticking) {
        animationFrameId = requestAnimationFrame(updateMousePosition);
        ticking = true;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDemoRoute]);

  if (isDemoRoute) return null;

  return (
    <>
      <CustomCursor theme={theme} />
      <div className="dot-matrix-grid" />
    </>
  );
}
