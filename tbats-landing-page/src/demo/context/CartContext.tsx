/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer, useEffect, type ReactNode } from 'react';

export interface CartItem {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
    [key: string]: unknown;
  };
  variant: Record<string, string | number | boolean> | null;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  isDrawerOpen: boolean;
}

type CartAction =
  | {
      type: 'ADD_ITEM';
      payload: { product: CartItem['product']; variant: CartItem['variant']; quantity?: number };
    }
  | { type: 'REMOVE_ITEM'; payload: { productId: string; variant: CartItem['variant'] } }
  | {
      type: 'UPDATE_QUANTITY';
      payload: { productId: string; variant: CartItem['variant']; quantity: number };
    }
  | { type: 'TOGGLE_DRAWER' }
  | { type: 'SET_DRAWER_OPEN'; payload: boolean }
  | { type: 'CLEAR_CART' };

const initialState: CartState = {
  items: [],
  isDrawerOpen: false,
};

function cartReducer(state: CartState, action: CartAction): CartState {
  const stringifyVariant = (v: CartItem['variant']): string => JSON.stringify(v ?? null);

  switch (action.type) {
    case 'ADD_ITEM': {
      const { product, variant, quantity = 1 } = action.payload;
      const existingItemIndex = state.items.findIndex(
        item =>
          item.product.id === product.id &&
          stringifyVariant(item.variant) === stringifyVariant(variant)
      );

      if (existingItemIndex > -1) {
        const newItems = [...state.items];
        const existingItem = newItems[existingItemIndex]!;
        newItems[existingItemIndex] = {
          ...existingItem,
          quantity: existingItem.quantity + quantity,
        };
        return { ...state, items: newItems };
      }

      return { ...state, items: [...state.items, { product, variant, quantity }] };
    }
    case 'REMOVE_ITEM': {
      const { productId, variant } = action.payload;
      return {
        ...state,
        items: state.items.filter(
          item =>
            !(
              item.product.id === productId &&
              stringifyVariant(item.variant) === stringifyVariant(variant)
            )
        ),
      };
    }
    case 'UPDATE_QUANTITY': {
      const { productId, variant, quantity } = action.payload;
      if (quantity < 1) return state;
      return {
        ...state,
        items: state.items.map(item =>
          item.product.id === productId &&
          stringifyVariant(item.variant) === stringifyVariant(variant)
            ? { ...item, quantity }
            : item
        ),
      };
    }
    case 'TOGGLE_DRAWER': {
      return { ...state, isDrawerOpen: !state.isDrawerOpen };
    }
    case 'SET_DRAWER_OPEN': {
      return { ...state, isDrawerOpen: action.payload };
    }
    case 'CLEAR_CART': {
      return { ...state, items: [] };
    }
    default:
      return state;
  }
}

interface CartContextValue {
  state: CartState;
  addItem: (
    _product: CartItem['product'],
    _variant: CartItem['variant'],
    _quantity?: number
  ) => void;
  removeItem: (_productId: string, _variant: CartItem['variant']) => void;
  updateQuantity: (_productId: string, _variant: CartItem['variant'], _quantity: number) => void;
  toggleDrawer: () => void;
  setDrawerOpen: (_isOpen: boolean) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [state, dispatch] = useReducer(cartReducer, initialState, initial => {
    try {
      const stored = localStorage.getItem('tbats-demo-cart');
      return stored ? { ...initial, items: JSON.parse(stored) } : initial;
    } catch {
      return initial;
    }
  });

  useEffect(() => {
    localStorage.setItem('tbats-demo-cart', JSON.stringify(state.items));
  }, [state.items]);

  const addItem = (product: CartItem['product'], variant: CartItem['variant'], quantity = 1) => {
    dispatch({ type: 'ADD_ITEM', payload: { product, variant, quantity } });
  };

  const removeItem = (productId: string, variant: CartItem['variant']) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { productId, variant } });
  };

  const updateQuantity = (productId: string, variant: CartItem['variant'], quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, variant, quantity } });
  };

  const toggleDrawer = () => {
    dispatch({ type: 'TOGGLE_DRAWER' });
  };

  const setDrawerOpen = (isOpen: boolean) => {
    dispatch({ type: 'SET_DRAWER_OPEN', payload: isOpen });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <CartContext.Provider
      value={{
        state,
        addItem,
        removeItem,
        updateQuantity,
        toggleDrawer,
        setDrawerOpen,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextValue {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
