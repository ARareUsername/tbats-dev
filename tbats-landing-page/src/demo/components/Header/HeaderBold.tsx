import type { BrandProps } from '@/types/demo';
import { useParams } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function HeaderBold({ brandName }: BrandProps) {
  const { toggleDrawer, state } = useCart();
  const { projectId } = useParams();
  const cartCount = state.items.reduce((total, item) => total + item.quantity, 0);

  const isBlog = projectId === 'personal-blog';
  const isPortfolio = projectId === 'portfolio';

  const handleCTA = (message: string) => {
    const event = new CustomEvent('show-toast', {
      detail: { message: message.toUpperCase(), type: 'info' },
    });
    window.dispatchEvent(event);
  };

  return (
    <div className="p-header-bold">
      <div className="p-header-container">
        <div className="p-header-brand">
          {(
            brandName ||
            (isBlog ? 'ESSENTIALS BOLD' : isPortfolio ? 'CREATIVE SHIELD' : 'NOVUS BOLD')
          ).toUpperCase()}
        </div>

        <nav className="p-header-nav">
          {isBlog ? (
            <>
              <a href="#drops" className="active">
                READ POSTS
              </a>
              <a href="#categories">CATEGORIES</a>
              <a href="#faq">FAQ</a>
            </>
          ) : isPortfolio ? (
            <>
              <a href="#works" className="active">
                PORTFOLIO
              </a>
              <a href="#expertise">SERVICES</a>
              <a href="#faq">FAQ</a>
            </>
          ) : (
            <>
              <a href="#shop" className="active">
                SHOP NOW
              </a>
              <a href="#drops">NEW DROPS</a>
              <a href="#faq">FAQ</a>
            </>
          )}
        </nav>

        {isBlog ? (
          <button
            className="p-header-cart-btn"
            onClick={() => handleCTA('Launching newsletter subscription...')}
            style={{ fontWeight: 900 }}
          >
            SUBSCRIBE
          </button>
        ) : isPortfolio ? (
          <button
            className="p-header-cart-btn"
            onClick={() => handleCTA('Launching contact form...')}
            style={{ fontWeight: 900 }}
          >
            LET&apos;S TALK
          </button>
        ) : (
          <button className="p-header-cart-btn" onClick={toggleDrawer}>
            <span>CART</span>
            <span className="p-cart-badge">{cartCount}</span>
          </button>
        )}
      </div>
    </div>
  );
}
