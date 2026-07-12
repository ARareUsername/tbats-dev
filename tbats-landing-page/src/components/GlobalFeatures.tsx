import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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

  if (isDemoRoute) return null;

  return (
    <>
      <CustomCursor theme={theme} />
      <div className="dot-matrix-grid" />
    </>
  );
}