import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const initialState = {
  items: [],
  isDrawerOpen: false
};

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { product, variant, quantity = 1 } = action.payload;
      // Match by product ID and variant combination
      const existingItemIndex = state.items.findIndex(
        item => item.product.id === product.id && 
                JSON.stringify(item.variant) === JSON.stringify(variant)
      );

      let newItems;
      if (existingItemIndex > -1) {
        newItems = [...state.items];
        newItems[existingItemIndex].quantity += quantity;
      } else {
        newItems = [...state.items, { product, variant, quantity }];
      }

      return {
        ...state,
        items: newItems
      };
    }
    case 'REMOVE_ITEM': {
      const { productId, variant } = action.payload;
      return {
        ...state,
        items: state.items.filter(
          item => !(item.product.id === productId && JSON.stringify(item.variant) === JSON.stringify(variant))
        )
      };
    }
    case 'UPDATE_QUANTITY': {
      const { productId, variant, quantity } = action.payload;
      if (quantity < 1) return state;
      return {
        ...state,
        items: state.items.map(item => 
          item.product.id === productId && JSON.stringify(item.variant) === JSON.stringify(variant)
            ? { ...item, quantity }
            : item
        )
      };
    }
    case 'TOGGLE_DRAWER': {
      return {
        ...state,
        isDrawerOpen: !state.isDrawerOpen
      };
    }
    case 'SET_DRAWER_OPEN': {
      return {
        ...state,
        isDrawerOpen: action.payload
      };
    }
    case 'CLEAR_CART': {
      return {
        ...state,
        items: []
      };
    }
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  // Load initial cart state from localStorage if available
  const [state, dispatch] = useReducer(cartReducer, initialState, (initial) => {
    try {
      const stored = localStorage.getItem('tbats-demo-cart');
      return stored ? { ...initial, items: JSON.parse(stored) } : initial;
    } catch (e) {
      return initial;
    }
  });

  // Sync cart items to localStorage on change
  useEffect(() => {
    localStorage.setItem('tbats-demo-cart', JSON.stringify(state.items));
  }, [state.items]);

  const addItem = (product, variant, quantity) => {
    dispatch({ type: 'ADD_ITEM', payload: { product, variant, quantity } });
  };

  const removeItem = (productId, variant) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { productId, variant } });
  };

  const updateQuantity = (productId, variant, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, variant, quantity } });
  };

  const toggleDrawer = () => {
    dispatch({ type: 'TOGGLE_DRAWER' });
  };

  const setDrawerOpen = (isOpen) => {
    dispatch({ type: 'SET_DRAWER_OPEN', payload: isOpen });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <CartContext.Provider value={{
      state,
      addItem,
      removeItem,
      updateQuantity,
      toggleDrawer,
      setDrawerOpen,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
