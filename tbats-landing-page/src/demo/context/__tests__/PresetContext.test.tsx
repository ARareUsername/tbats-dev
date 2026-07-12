import { describe, test, expect, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import type { ReactNode } from 'react';
import { PresetProvider, usePresetContext } from '../PresetContext';

let searchParams = new URLSearchParams();
const mockSetSearchParams = vi.fn((updater: unknown) => {
  if (typeof updater === 'function') {
    searchParams = updater(searchParams);
  }
});

vi.mock('react-router-dom', () => ({
  useSearchParams: vi.fn(() => [searchParams, mockSetSearchParams]),
}));

function Wrapper({ children }: { children: ReactNode }) {
  return <PresetProvider>{children}</PresetProvider>;
}

describe('PresetContext', () => {
  test('provides default preset (minimal)', () => {
    const { result } = renderHook(() => usePresetContext(), { wrapper: Wrapper });
    expect(result.current.activePreset.id).toBe('minimal');
    expect(result.current.presets.length).toBe(5);
  });

  test('changePreset updates the active preset', () => {
    const { result } = renderHook(() => usePresetContext(), { wrapper: Wrapper });

    act(() => {
      result.current.changePreset('editorial');
    });

    expect(result.current.activePreset.id).toBe('editorial');
    expect(result.current.activePreset.label).toBe('Editorial');
  });

  test('changePreset updates URL search params', () => {
    const { result } = renderHook(() => usePresetContext(), { wrapper: Wrapper });

    act(() => {
      result.current.changePreset('bold');
    });

    expect(mockSetSearchParams).toHaveBeenCalled();
  });

  test('preset provides CSS variables', () => {
    const { result } = renderHook(() => usePresetContext(), { wrapper: Wrapper });

    expect(result.current.activePreset.cssVars).toHaveProperty('--color-bg');
    expect(result.current.activePreset.cssVars).toHaveProperty('--color-text');
    expect(result.current.activePreset.cssVars).toHaveProperty('--color-accent');
  });

  test('preset provides component mapping', () => {
    const { result } = renderHook(() => usePresetContext(), { wrapper: Wrapper });

    expect(result.current.activePreset.components).toHaveProperty('Header');
    expect(result.current.activePreset.components).toHaveProperty('Hero');
    expect(result.current.activePreset.components).toHaveProperty('ProductCard');
  });

  test('throws when used outside PresetProvider', () => {
    expect(() => {
      renderHook(() => usePresetContext());
    }).toThrow('usePresetContext must be used within a PresetProvider');
  });
});
