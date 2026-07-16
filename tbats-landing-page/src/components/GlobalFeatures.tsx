import { useEffect, useState } from 'react';
import CustomCursor from './CustomCursor';
import ScrollProgress from './ScrollProgress';
import useReducedMotion from '@hooks/useReducedMotion';

interface GlobalFeaturesProps {
  theme: 'light' | 'dark';
}

export default function GlobalFeatures({ theme }: GlobalFeaturesProps) {
  const prefersReducedMotion = useReducedMotion();
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia('(pointer: coarse)').matches);
  }, []);

  const effectsEnabled = !isTouchDevice && !prefersReducedMotion;

  // Track cursor position on document root using high-performance single requestAnimationFrame
  useEffect(() => {
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
  }, []);

  return (
    <>
      <CustomCursor theme={theme} />
      <div className="dot-matrix-grid" />
      <ScrollProgress enabled={effectsEnabled} />
    </>
  );
}
