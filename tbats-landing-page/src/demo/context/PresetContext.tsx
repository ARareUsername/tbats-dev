/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { Preset, PresetId } from '../presets/registry';
import { presets, getPresetById } from '../presets/registry';

interface PresetContextValue {
  activePreset: Preset;
  changePreset: (_presetId: PresetId) => void;
  presets: readonly Preset[];
}

const PresetContext = createContext<PresetContextValue | null>(null);

interface PresetProviderProps {
  children: ReactNode;
  defaultPresetId?: PresetId;
}

export function PresetProvider({ children, defaultPresetId = 'minimal' }: PresetProviderProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  const getInitialPresetId = (): PresetId => {
    const urlPreset = searchParams.get('preset');
    if (urlPreset && presets.some(p => p.id === urlPreset)) {
      return urlPreset as PresetId;
    }
    return defaultPresetId;
  };

  const [activePresetId, setActivePresetId] = useState<PresetId>(getInitialPresetId);

  const activePreset = getPresetById(activePresetId);

  useEffect(() => {
    const urlPreset = searchParams.get('preset');
    if (urlPreset && presets.some(p => p.id === urlPreset)) {
      if (urlPreset !== activePresetId) {
        setActivePresetId(urlPreset as PresetId);
      }
    } else if (!urlPreset && activePresetId !== defaultPresetId) {
      setActivePresetId(defaultPresetId);
    }
  }, [searchParams, defaultPresetId, activePresetId]);

  const changePreset = (presetId: PresetId) => {
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
          transition: 'background-color 0.3s ease, color 0.3s ease',
        }}
      >
        {children}
      </div>
    </PresetContext.Provider>
  );
}

export function usePresetContext(): PresetContextValue {
  const context = useContext(PresetContext);
  if (!context) {
    throw new Error('usePresetContext must be used within a PresetProvider');
  }
  return context;
}
