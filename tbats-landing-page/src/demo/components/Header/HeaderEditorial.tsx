import type { BrandProps } from '@/types/demo';
import { useParams } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function HeaderEditorial({ brandName }: BrandProps) {
  const { toggleDrawer, state } = useCart();
  const { projectId } = useParams();
  const cartCount = state.items.reduce((total, item) => total + item.quantity, 0);

  const isBlog = projectId === 'personal-blog';
  const isPortfolio = projectId === 'portfolio';

  const handleCTA = (message: string) => {
    const event = new CustomEvent('show-toast', {
      detail: { message, type: 'info' },
    });
    window.dispatchEvent(event);
  };

  return (
    <div className="p-header-editorial">
      <div className="p-header-container">
        <div className="p-header-brand-wrap">
          <div className="p-header-brand">
            {brandName || (isBlog ? 'KROMA WRITES' : isPortfolio ? 'KROMA GALLERY' : 'KROMA')}
          </div>
          <span className="p-header-edition">
            {isBlog ? 'Vol. 4' : isPortfolio ? 'Ed. 2026' : 'No. 12'}
          </span>
        </div>

        <nav className="p-header-nav">
          {isBlog ? (
            <>
              <a href="#editorial-stories" className="active">
                Stories
              </a>
              <a href="#editorial-ideas">Thoughts</a>
              <a href="#editorial-archive">Archive</a>
            </>
          ) : isPortfolio ? (
            <>
              <a href="#editorial-works" className="active">
                Works
              </a>
              <a href="#editorial-services">Services</a>
              <a href="#editorial-archive">Archive</a>
            </>
          ) : (
            <>
              <a href="#editorial-stories" className="active">
                Stories
              </a>
              <a href="#editorial-shop">The Shop</a>
              <a href="#editorial-archive">Archive</a>
            </>
          )}
        </nav>

        {isBlog ? (
          <button
            className="p-header-cart-trigger"
            onClick={() => handleCTA('Launching newsletter subscription...')}
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              textDecoration: 'underline',
              fontStyle: 'italic',
              cursor: 'pointer',
              fontFamily: 'var(--font-heading)',
            }}
          >
            Newsletter / Subscribe
          </button>
        ) : isPortfolio ? (
          <button
            className="p-header-cart-trigger"
            onClick={() => handleCTA('Launching contact inquiries...')}
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              textDecoration: 'underline',
              fontStyle: 'italic',
              cursor: 'pointer',
              fontFamily: 'var(--font-heading)',
            }}
          >
            Inquiries / Connect
          </button>
        ) : (
          <button className="p-header-cart-trigger" onClick={toggleDrawer}>
            <span className="p-cart-text">Shopping Bag</span>
            <span className="p-cart-dot-divider">•</span>
            <span className="p-cart-count">{cartCount}</span>
          </button>
        )}
      </div>
    </div>
  );
}
