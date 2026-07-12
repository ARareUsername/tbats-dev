import React from 'react';
import { Link } from 'react-router-dom';
import { usePreset } from '../../hooks/usePreset';

export default function DemoSidebar({ isOpen, onClose, projectName, isMinimized, onToggleMinimize }) {
  const { activePreset, changePreset, presets } = usePreset();

  return (
    <aside className={`demo-sidebar ${isOpen ? 'open' : ''} ${isMinimized ? 'minimized' : ''}`}>
      {/* Back to Home & Sandbox Header */}
      <div className="demo-sidebar-header" style={{ position: 'relative' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
          <Link to="/" className="demo-back-home-link" style={{ marginBottom: 0 }}>
            <span className="material-symbols-outlined">arrow_back</span>
            <span>Back to Portfolio</span>
          </Link>
          <div className="demo-sandbox-badge" style={{ marginBottom: 0 }}>
            <span className="demo-badge-dot"></span>
            <span>LIVE SANDBOX</span>
          </div>
        </div>

        {/* Minimize Button */}
        <button 
          onClick={onToggleMinimize}
          className="demo-sidebar-minimize-btn"
          aria-label="Minimize sidebar"
        >
          <span className="material-symbols-outlined" style={{ fontSize: '1.2rem' }}>menu_open</span>
        </button>

        <h2 className="demo-project-title">{projectName || 'E-Commerce'}</h2>
        <p className="demo-project-subtitle">Interactive Dev Preview</p>
      </div>

      {/* Preset Selector List */}
      <div className="demo-presets-section">
        <h3 className="demo-section-label">Select Visual Preset</h3>
        <div className="demo-presets-list">
          {presets.map((preset) => {
            const isActive = preset.id === activePreset.id;
            return (
              <button
                key={preset.id}
                className={`demo-preset-item-btn ${isActive ? 'active' : ''}`}
                onClick={() => changePreset(preset.id)}
              >
                <div className="demo-preset-item-content">
                  <div className="demo-preset-item-label-row">
                    <span className="demo-preset-item-label">{preset.label}</span>
                    {isActive && (
                      <span className="material-symbols-outlined demo-active-indicator">
                        check_circle
                      </span>
                    )}
                  </div>
                  <p className="demo-preset-item-description">{preset.description}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Footer Info */}
      <div className="demo-sidebar-footer">
        <p>© 2026 TBATS Studio</p>
        <p>Dynamic Design System Engine</p>
      </div>
    </aside>
  );
}
