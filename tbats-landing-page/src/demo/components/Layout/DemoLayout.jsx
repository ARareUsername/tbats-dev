import React, { useState, useEffect } from 'react';
import DemoSidebar from './DemoSidebar';
import DemoHeader from './DemoHeader';
import { usePreset } from '../../hooks/usePreset';

export default function DemoLayout({ children, projectName }) {
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
