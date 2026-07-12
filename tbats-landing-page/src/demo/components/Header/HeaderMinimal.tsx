import type { BrandProps } from '@/types/demo';
import { useParams } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function HeaderMinimal({ brandName }: BrandProps) {
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
    <div className="p-header-minimal">
      <div className="p-header-container">
        <div className="p-header-brand">{brandName || (isBlog ? 'ESSENTIALS' : isPortfolio ? 'SHOWCASE' : 'NOVUS')}</div>
        <nav className="p-header-nav">
          {isBlog ? (
            <>
              <a href="#articles" className="active">Articles</a>
              <a href="#topics">Topics</a>
              <a href="#newsletter">Newsletter</a>
            </>
          ) : isPortfolio ? (
            <>
              <a href="#work" className="active">Work</a>
              <a href="#expertise">Services</a>
              <a href="#about">About Me</a>
            </>
          ) : (
            <>
              <a href="#new" className="active">New In</a>
              <a href="#catalog">Catalog</a>
              <a href="#story">Our Story</a>
            </>
          )}
        </nav>
        
        {isBlog ? (
          <button 
            className="p-header-cart-trigger" 
            onClick={() => handleCTA('Opening newsletter subscription form...')}
            style={{ border: '1px solid var(--color-border)', borderRadius: '4px', padding: '0.4rem 1rem', fontSize: '0.85rem' }}
          >
            Subscribe
          </button>
        ) : isPortfolio ? (
          <button 
            className="p-header-cart-trigger" 
            onClick={() => handleCTA('Launching connection dialogue...')}
            style={{ border: '1px solid var(--color-border)', borderRadius: '4px', padding: '0.4rem 1rem', fontSize: '0.85rem' }}
          >
            Let&apos;s Talk
          </button>
        ) : (
          <button className="p-header-cart-trigger" onClick={toggleDrawer}>
            <span className="material-symbols-outlined">shopping_bag</span>
            <span className="p-cart-label">Bag</span>
            <span className="p-cart-count">({cartCount})</span>
          </button>
        )}
      </div>
    </div>
  );
}
