import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor({ theme }) {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cursorRef = useRef(null);
  
  const mousePosition = useRef({ x: -100, y: -100 });
  const currentPosition = useRef({ x: -100, y: -100 });
  const isHoveredRef = useRef(false);

  // Sync state with ref to avoid stale closures in animation frame loop
  useEffect(() => {
    isHoveredRef.current = isHovered;
  }, [isHovered]);

  useEffect(() => {
    // Check if device is touch-based
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    let animationFrameId;
    let firstMove = true;

    const moveCursor = (e) => {
      const targetX = e.clientX - 16;
      const targetY = e.clientY - 16;
      
      if (firstMove) {
        currentPosition.current.x = targetX;
        currentPosition.current.y = targetY;
        mousePosition.current.x = targetX;
        mousePosition.current.y = targetY;
        if (cursorRef.current) {
          cursorRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) scale(1)`;
          cursorRef.current.style.opacity = '1';
        }
        firstMove = false;
      } else {
        mousePosition.current.x = targetX;
        mousePosition.current.y = targetY;
      }
    };

    const handleMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '0';
      }
    };

    const handleMouseEnter = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '1';
        const targetX = e.clientX - 16;
        const targetY = e.clientY - 16;
        currentPosition.current.x = targetX;
        currentPosition.current.y = targetY;
        mousePosition.current.x = targetX;
        mousePosition.current.y = targetY;
      }
    };

    // Global delegation for hover states
    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, select, textarea, [role="button"], .clickable');
      if (target) {
        setIsHovered(true);
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target.closest('a, button, select, textarea, [role="button"], .clickable');
      if (target) {
        setIsHovered(false);
      }
    };

    const updatePosition = () => {
      const ease = 0.35;
      currentPosition.current.x += (mousePosition.current.x - currentPosition.current.x) * ease;
      currentPosition.current.y += (mousePosition.current.y - currentPosition.current.y) * ease;

      const scaleVal = isHoveredRef.current ? 'scale(1.4)' : 'scale(1)';

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentPosition.current.x}px, ${currentPosition.current.y}px, 0) ${scaleVal}`;
      }

      animationFrameId = requestAnimationFrame(updatePosition);
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    animationFrameId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (isTouchDevice) return null;

  const isLight = theme === 'light';

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        backgroundColor: isHovered 
          ? 'rgba(255, 255, 255, 0.95)' 
          : (isLight ? 'rgba(5, 150, 105, 0.2)' : 'rgba(16, 185, 129, 0.15)'),
        boxShadow: isHovered 
          ? 'none' 
          : (isLight ? 'none' : '0 0 20px 10px rgba(16, 185, 129, 0.1)'),
        border: isHovered 
          ? (isLight ? '1px solid rgba(0, 0, 0, 0.9)' : '1px solid rgba(255, 255, 255, 0.9)') 
          : (isLight ? '1px solid rgba(5, 150, 105, 0.4)' : '1px solid rgba(16, 185, 129, 0.3)'),
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: isHovered 
          ? 'difference' 
          : (isLight ? 'normal' : 'screen'),
        transform: 'translate3d(-100px, -100px, 0) scale(1)',
        opacity: 0,
        transition: 'opacity 0.25s ease-out, background-color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
        willChange: 'transform'
      }}
    />
  );
}
