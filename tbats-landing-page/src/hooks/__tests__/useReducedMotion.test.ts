import { describe, test, expect, vi } from 'vitest';
import { renderHook } from '@testing-library/react';
import useReducedMotion from '../useReducedMotion';

describe('useReducedMotion hook', () => {
  test('returns false when prefers-reduced-motion matches is false', () => {
    // Reset matchMedia mock to return matches: false
    vi.spyOn(window, 'matchMedia').mockImplementation(() => ({
      matches: false,
      media: '(prefers-reduced-motion: reduce)',
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));

    const { result } = renderHook(() => useReducedMotion());
    expect(result.current).toBe(false);
  });

  test('returns true when prefers-reduced-motion matches is true', () => {
    // Spy and return matches: true
    vi.spyOn(window, 'matchMedia').mockImplementation(() => ({
      matches: true,
      media: '(prefers-reduced-motion: reduce)',
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));

    const { result } = renderHook(() => useReducedMotion());
    expect(result.current).toBe(true);
  });
});
