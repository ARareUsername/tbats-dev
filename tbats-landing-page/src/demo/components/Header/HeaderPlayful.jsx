import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function HeaderPlayful({ brandName }) {
  const { toggleDrawer, state } = useCart();
  const { projectId } = useParams();
  const cartCount = state.items.reduce((total, item) => total + item.quantity, 0);

  const isBlog = projectId === 'personal-blog';
  const isPortfolio = projectId === 'portfolio';

  const handleCTA = (message) => {
    const event = new CustomEvent('show-toast', {
      detail: { message, type: 'info' }
    });
    window.dispatchEvent(event);
  };

  return (
    <div className="p-header-playful">
      <div className="p-header-container">
        <div className="p-header-brand">
          <span className="p-logo-emoji">{isBlog ? '💌' : isPortfolio ? '👋' : '✨'}</span>
          <span className="p-logo-text">{brandName || (isBlog ? 'MY DIARY' : isPortfolio ? 'MY PORTFOLIO' : 'KANDY')}</span>
        </div>

        <nav className="p-header-nav">
          {isBlog ? (
            <>
              <a href="#sweet-deals" className="p-nav-pill">My Journal</a>
              <a href="#flavors" className="p-nav-pill">Latest Posts</a>
            </>
          ) : isPortfolio ? (
            <>
              <a href="#sweet-deals" className="p-nav-pill">My Works</a>
              <a href="#flavors" className="p-nav-pill">Fun Things</a>
            </>
          ) : (
            <>
              <a href="#sweet-deals" className="p-nav-pill">Sweet Deals</a>
              <a href="#flavors" className="p-nav-pill">All Flavors</a>
            </>
          )}
        </nav>

        {isBlog ? (
          <button 
            className="p-header-cart-btn" 
            onClick={() => handleCTA('Join the sweet letters! 💌')}
            style={{ borderRadius: '24px', padding: '0.4rem 1.2rem', fontWeight: 700 }}
          >
            Join 💌
          </button>
        ) : isPortfolio ? (
          <button 
            className="p-header-cart-btn" 
            onClick={() => handleCTA('Sending a warm wave... 👋')}
            style={{ borderRadius: '24px', padding: '0.4rem 1.2rem', fontWeight: 700 }}
          >
            Hello 👋
          </button>
        ) : (
          <button className="p-header-cart-btn" onClick={toggleDrawer}>
            <span className="material-symbols-outlined">shopping_basket</span>
            <span className="p-cart-bubble">{cartCount}</span>
          </button>
        )}
      </div>
    </div>
  );
}
