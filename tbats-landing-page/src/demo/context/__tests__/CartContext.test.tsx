import { describe, test, expect, vi, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import type { ReactNode } from 'react';
import { CartProvider, useCart } from '../CartContext';

function Wrapper({ children }: { children: ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}

const sampleProduct = {
  id: 'prod-1',
  name: 'Test Product',
  price: 29.99,
  image: '/test.jpg',
  category: 'test',
};

describe('CartContext', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('starts with empty cart', () => {
    const { result } = renderHook(() => useCart(), { wrapper: Wrapper });
    expect(result.current.state.items).toHaveLength(0);
    expect(result.current.state.isDrawerOpen).toBe(false);
  });

  test('addItem adds product to cart', () => {
    const { result } = renderHook(() => useCart(), { wrapper: Wrapper });

    act(() => {
      result.current.addItem(sampleProduct, null);
    });

    expect(result.current.state.items).toHaveLength(1);
    expect(result.current.state.items[0]!.product.name).toBe('Test Product');
    expect(result.current.state.items[0]!.quantity).toBe(1);
  });

  test('addItem increments quantity for duplicate items', () => {
    const { result } = renderHook(() => useCart(), { wrapper: Wrapper });

    act(() => {
      result.current.addItem(sampleProduct, null);
    });
    act(() => {
      result.current.addItem(sampleProduct, null);
    });

    expect(result.current.state.items).toHaveLength(1);
    expect(result.current.state.items[0]!.quantity).toBe(2);
  });

  test('addItem with different variant creates separate entries', () => {
    const { result } = renderHook(() => useCart(), { wrapper: Wrapper });

    act(() => {
      result.current.addItem(sampleProduct, { size: 'S' });
    });
    act(() => {
      result.current.addItem(sampleProduct, { size: 'L' });
    });

    expect(result.current.state.items).toHaveLength(2);
  });

  test('removeItem removes product from cart', () => {
    const { result } = renderHook(() => useCart(), { wrapper: Wrapper });

    act(() => {
      result.current.addItem(sampleProduct, null);
    });
    act(() => {
      result.current.removeItem('prod-1', null);
    });

    expect(result.current.state.items).toHaveLength(0);
  });

  test('updateQuantity changes item quantity', () => {
    const { result } = renderHook(() => useCart(), { wrapper: Wrapper });

    act(() => {
      result.current.addItem(sampleProduct, null);
    });
    act(() => {
      result.current.updateQuantity('prod-1', null, 5);
    });

    expect(result.current.state.items[0]!.quantity).toBe(5);
  });

  test('updateQuantity ignores quantities below 1', () => {
    const { result } = renderHook(() => useCart(), { wrapper: Wrapper });

    act(() => {
      result.current.addItem(sampleProduct, null);
    });
    act(() => {
      result.current.updateQuantity('prod-1', null, 0);
    });

    expect(result.current.state.items[0]!.quantity).toBe(1);
  });

  test('toggleDrawer toggles isDrawerOpen', () => {
    const { result } = renderHook(() => useCart(), { wrapper: Wrapper });

    act(() => {
      result.current.toggleDrawer();
    });
    expect(result.current.state.isDrawerOpen).toBe(true);

    act(() => {
      result.current.toggleDrawer();
    });
    expect(result.current.state.isDrawerOpen).toBe(false);
  });

  test('setDrawerOpen sets drawer state', () => {
    const { result } = renderHook(() => useCart(), { wrapper: Wrapper });

    act(() => {
      result.current.setDrawerOpen(true);
    });
    expect(result.current.state.isDrawerOpen).toBe(true);

    act(() => {
      result.current.setDrawerOpen(false);
    });
    expect(result.current.state.isDrawerOpen).toBe(false);
  });

  test('clearCart empties all items', () => {
    const { result } = renderHook(() => useCart(), { wrapper: Wrapper });

    act(() => {
      result.current.addItem(sampleProduct, null);
      result.current.addItem({ ...sampleProduct, id: 'prod-2' }, null);
    });
    expect(result.current.state.items).toHaveLength(2);

    act(() => {
      result.current.clearCart();
    });
    expect(result.current.state.items).toHaveLength(0);
  });

  test('persists cart to localStorage on item change', () => {
    const { result } = renderHook(() => useCart(), { wrapper: Wrapper });

    act(() => {
      result.current.addItem(sampleProduct, null);
    });

    expect(localStorage.setItem).toHaveBeenCalledWith(
      'tbats-demo-cart',
      expect.any(String)
    );
  });

  test('throws when used outside CartProvider', () => {
    expect(() => {
      renderHook(() => useCart());
    }).toThrow('useCart must be used within a CartProvider');
  });
});
