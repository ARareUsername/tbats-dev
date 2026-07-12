import React, { createContext, useContext, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getPresetById, presets } from '../presets/registry';

const PresetContext = createContext();

export function PresetProvider({ children, defaultPresetId = 'minimal' }) {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Resolve initial preset ID: URL query param -> defaultPresetId prop
  const getInitialPresetId = () => {
    const urlPreset = searchParams.get('preset');
    if (urlPreset) return urlPreset;
    return defaultPresetId;
  };

  const [activePresetId, setActivePresetId] = useState(getInitialPresetId);

  const activePreset = getPresetById(activePresetId);

  // Sync activePresetId when URL search params change
  useEffect(() => {
    const urlPreset = searchParams.get('preset');
    if (urlPreset && urlPreset !== activePresetId) {
      setActivePresetId(urlPreset);
    } else if (!urlPreset && activePresetId !== defaultPresetId) {
      // Fallback to default if param is removed
      setActivePresetId(defaultPresetId);
    }
  }, [searchParams, defaultPresetId]);

  const changePreset = (presetId) => {
    setActivePresetId(presetId);
    setSearchParams(prev => {
      const nextParams = new URLSearchParams(prev);
      nextParams.set('preset', presetId);
      return nextParams;
    });
  };

  return (
    <PresetContext.Provider value={{ activePreset, changePreset, presets }}>
      <div 
        data-preset={activePreset.id}
        className="demo-preset-root"
        style={{
          ...activePreset.cssVars,
          minHeight: '100vh',
          backgroundColor: 'var(--color-bg)',
          color: 'var(--color-text)',
          fontFamily: 'var(--font-body)',
          transition: 'background-color 0.3s ease, color 0.3s ease'
        }}
      >
        {children}
      </div>
    </PresetContext.Provider>
  );
}

export function usePresetContext() {
  const context = useContext(PresetContext);
  if (!context) {
    throw new Error('usePresetContext must be used within a PresetProvider');
  }
  return context;
}
