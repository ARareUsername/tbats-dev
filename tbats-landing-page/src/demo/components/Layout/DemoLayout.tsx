import { useState, useEffect, type ReactNode } from 'react';
import DemoSidebar from './DemoSidebar';
import DemoHeader from './DemoHeader';
import { usePreset } from '../../hooks/usePreset';

interface DemoLayoutProps {
  children: ReactNode;
  projectName: string;
}

export default function DemoLayout({ children, projectName }: DemoLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(false);
  const { activePreset } = usePreset();

  // Close mobile sidebar on preset change
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [activePreset.id]);

  // Lock body scroll when mobile sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isSidebarOpen]);

  return (
    <div className={`demo-layout ${isSidebarMinimized ? 'minimized' : ''}`}>
      {/* Mobile Sidebar Overlay */}
      <div 
        className={`demo-sidebar-overlay ${isSidebarOpen ? 'active' : ''}`}
        onClick={() => setIsSidebarOpen(false)}
        role="button"
        tabIndex={-1}
        aria-label="Close sidebar"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            setIsSidebarOpen(false);
          }
        }}
      />

      {/* Sidebar (fixed on desktop, drawer on mobile) */}
      <DemoSidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
        projectName={projectName}
        isMinimized={isSidebarMinimized}
        onToggleMinimize={() => setIsSidebarMinimized(!isSidebarMinimized)}
      />

      {/* Main Viewport */}
      <div className="demo-main-viewport">
        <DemoHeader 
          projectName={projectName} 
          onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} 
          isSidebarMinimized={isSidebarMinimized}
          onToggleMinimize={() => setIsSidebarMinimized(false)}
        />
        
        <main className="demo-main-content">
          {children}
        </main>
      </div>
    </div>
  );
}
