import { useEffect, useState } from 'react';
import { m, useMotionValue, useSpring, useTransform } from 'framer-motion';
import useReducedMotion from '@hooks/useReducedMotion';

interface CustomCursorProps {
  theme: 'light' | 'dark';
}

export default function CustomCursor({ theme }: CustomCursorProps) {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // Motion values for positions
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth springs for cursor lag
  const springConfig = { damping: 12, stiffness: 300, mass: 0.2 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Motion value and transform for scale animation
  const hoverProgress = useMotionValue(0);
  const scale = useTransform(hoverProgress, [0, 1], [1, 1.4]);

  useEffect(() => {
    hoverProgress.set(isHovered ? 1 : 0);
  }, [isHovered, hoverProgress]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    let lastTime = 0;
    const moveCursor = (e: MouseEvent) => {
      const now = window.performance.now();
      // Throttle mousemove events to 60fps (approx 16.7ms intervals)
      if (now - lastTime < 16) return;
      lastTime = now;

      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const clickable = target?.closest('a, button, select, textarea, [role="button"], .clickable');
      if (clickable) {
        setIsHovered(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const clickable = target?.closest('a, button, select, textarea, [role="button"], .clickable');
      if (clickable) {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [cursorX, cursorY]);

  if (isTouchDevice || prefersReducedMotion) return null;

  const isLight = theme === 'light';

  return (
    <m.div
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        backgroundColor: isHovered
          ? 'rgba(255, 255, 255, 1)'
          : isLight
            ? 'rgba(5, 150, 105, 0.9)'
            : 'rgba(16, 185, 129, 0.9)',
        boxShadow: isHovered
          ? '0 0 0 4px rgba(5, 150, 105, 0.3)'
          : '0 0 0 6px rgba(5, 150, 105, 0.15)',
        outline: isHovered
          ? isLight
            ? '1.5px solid rgba(0, 0, 0, 0.8)'
            : '1.5px solid rgba(255, 255, 255, 0.8)'
          : `1.5px solid ${isLight ? 'rgba(5, 150, 105, 0.6)' : 'rgba(16, 185, 129, 0.6)'}`,
        outlineOffset: '2px',
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: isHovered ? 'difference' : 'normal',
        x: cursorXSpring,
        y: cursorYSpring,
        scale,
        transition:
          'background-color 0.25s ease, box-shadow 0.25s ease, outline-color 0.25s ease',
      }}
    />
  );
}
