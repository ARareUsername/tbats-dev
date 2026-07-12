import type { BrandProps } from '@/types/demo';
import { useParams } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function HeaderLuxury({ brandName }: BrandProps) {
  const { toggleDrawer, state } = useCart();
  const { projectId } = useParams();
  const cartCount = state.items.reduce((total, item) => total + item.quantity, 0);

  const isBlog = projectId === 'personal-blog';
  const isPortfolio = projectId === 'portfolio';

  const handleCTA = (message: string) => {
    const event = new CustomEvent('show-toast', {
      detail: { message, type: 'info' }
    });
    window.dispatchEvent(event);
  };

  return (
    <div className="p-header-luxury">
      <div className="p-header-container">
        {/* Left Nav */}
        <nav className="p-header-nav">
          {isBlog ? (
            <>
              <a href="#journal">Journal</a>
              <a href="#essays">Essays</a>
            </>
          ) : isPortfolio ? (
            <>
              <a href="#works">Works</a>
              <a href="#exhibits">Exhibits</a>
            </>
          ) : (
            <>
              <a href="#collections">Collections</a>
              <a href="#curations">Curations</a>
            </>
          )}
        </nav>

        {/* Center Brand */}
        <div className="p-header-brand">{brandName || (isBlog ? 'AETHER JOURNAL' : isPortfolio ? 'AETHER STUDIOS' : 'AETHER')}</div>

        {/* Right Actions */}
        <div className="p-header-actions">
          {isBlog ? (
            <>
              <a href="#about" className="p-luxury-link-secondary">About</a>
              <button 
                className="p-header-cart-trigger" 
                onClick={() => handleCTA('Launching newsletter subscription...')}
                style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', background: 'none', border: '1px solid var(--color-border)', padding: '0.4rem 0.8rem', color: 'var(--color-primary)' }}
              >
                Subscribe
              </button>
            </>
          ) : isPortfolio ? (
            <>
              <a href="#contact" className="p-luxury-link-secondary">Contact</a>
              <button 
                className="p-header-cart-trigger" 
                onClick={() => handleCTA('Opening contact inquiries...')}
                style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', background: 'none', border: '1px solid var(--color-border)', padding: '0.4rem 0.8rem', color: 'var(--color-primary)' }}
              >
                Inquire
              </button>
            </>
          ) : (
            <>
              <a href="#boutiques" className="p-luxury-link-secondary">Boutiques</a>
              <button className="p-header-cart-trigger" onClick={toggleDrawer}>
                <span className="material-symbols-outlined">shopping_bag</span>
                {cartCount > 0 && <span className="p-cart-count-badge">{cartCount}</span>}
              </button>
            </>
          )}
        </div>
      </div>
      <div className="p-header-luxury-divider" />
    </div>
  );
}
