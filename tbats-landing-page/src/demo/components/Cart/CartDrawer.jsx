import React, { useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import CartItem from './CartItem';

export default function CartDrawer({ onProceedToCheckout }) {
  const { state, toggleDrawer, setDrawerOpen } = useCart();
  const { items, isDrawerOpen } = state;

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isDrawerOpen]);

  // Handle escape key to close drawer
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isDrawerOpen) {
        toggleDrawer();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isDrawerOpen, toggleDrawer]);

  // Calculate pricing summary
  const subtotal = items.reduce((total, item) => total + item.product.price * item.quantity, 0);
  const tax = subtotal * 0.08; // 8% tax
  const shipping = subtotal > 8000 || subtotal === 0 ? 0 : 500; // Free shipping over ₱8,000, else ₱500 shipping fee
  const orderTotal = subtotal + tax + shipping;

  const handleCheckout = () => {
    setDrawerOpen(false); // Close cart drawer
    setTimeout(() => {
      onProceedToCheckout(); // Open checkout modal after brief delay
    }, 150);
  };

  return (
    <div className={`p-cart-drawer-container ${isDrawerOpen ? 'active' : ''}`}>
      {/* Backdrop Overlay */}
      <div 
        className="p-cart-drawer-overlay"
        onClick={toggleDrawer}
      />
      
      {/* Panel */}
      <aside className="p-cart-drawer-panel">
        <header className="p-cart-drawer-header">
          <h3>Shopping Bag</h3>
          <button 
            className="p-cart-drawer-close"
            onClick={toggleDrawer}
            aria-label="Close cart"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </header>

        {items.length === 0 ? (
          <div className="p-cart-empty-state">
            <span className="material-symbols-outlined p-cart-empty-icon">shopping_bag</span>
            <p className="p-cart-empty-msg">Your shopping bag is empty.</p>
            <button className="p-cart-empty-btn" onClick={toggleDrawer}>
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            {/* Scrollable Items List */}
            <div className="p-cart-items-list">
              {items.map((item, idx) => (
                <CartItem 
                  key={`${item.product.id}-${JSON.stringify(item.variant)}-${idx}`} 
                  item={item} 
                />
              ))}
            </div>

            {/* Price Summary & Checkout Action */}
            <footer className="p-cart-drawer-footer">
              <div className="p-cart-summary-row">
                <span>Subtotal</span>
                <span>₱{subtotal.toLocaleString()}</span>
              </div>
              <div className="p-cart-summary-row">
                <span>Estimated Tax (8%)</span>
                <span>₱{tax.toLocaleString()}</span>
              </div>
              <div className="p-cart-summary-row">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'FREE' : `₱${shipping.toLocaleString()}`}</span>
              </div>
              <div className="p-cart-total-row">
                <span>Total</span>
                <span>₱{orderTotal.toLocaleString()}</span>
              </div>
              
              <button className="p-cart-checkout-btn" onClick={handleCheckout}>
                Proceed to Checkout
              </button>
            </footer>
          </>
        )}
      </aside>
    </div>
  );
}
