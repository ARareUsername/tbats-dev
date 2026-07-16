import { useEffect, useState } from 'react';

interface ScrollProgressProps {
  enabled: boolean;
}

export default function ScrollProgress({ enabled }: ScrollProgressProps) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (!enabled) return;

    let animationFrameId: number;
    let ticking = false;

    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setWidth(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        animationFrameId = requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      className="scroll-progress"
      style={{ width: `${width}%` }}
      role="progressbar"
      aria-hidden="true"
    />
  );
}
