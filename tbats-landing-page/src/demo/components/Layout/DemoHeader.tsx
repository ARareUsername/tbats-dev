import { Link, useParams } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

interface DemoHeaderProps {
  projectName: string;
  onToggleSidebar: () => void;
  isSidebarMinimized: boolean;
  onToggleMinimize: () => void;
}

export default function DemoHeader({ projectName, onToggleSidebar, isSidebarMinimized, onToggleMinimize }: DemoHeaderProps) {
  const { state, toggleDrawer } = useCart();
  const { projectId } = useParams();
  const cartCount = state.items.reduce((total, item) => total + item.quantity, 0);

  const isBlog = projectId === 'personal-blog';
  const isPortfolio = projectId === 'portfolio';

  return (
    <header className="demo-header">
      {/* Mobile Hamburger Toggle */}
      <button 
        className="demo-mobile-menu-btn" 
        onClick={onToggleSidebar}
        aria-label="Toggle visual preset sidebar"
      >
        <span className="material-symbols-outlined">menu</span>
      </button>

      {/* Desktop Restore Button (Visible only when minimized on desktop) */}
      {isSidebarMinimized && (
        <button 
          className="demo-desktop-restore-btn" 
          onClick={onToggleMinimize}
          aria-label="Restore sidebar"
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--color-text)',
            cursor: 'pointer',
            padding: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '1rem',
            borderRadius: '50%',
            transition: 'background-color 0.2s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-border)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
      )}

      {/* Breadcrumb Context */}
      <div className="demo-header-breadcrumb">
        <span className="demo-header-label">Demo Project</span>
        <span className="demo-header-divider">/</span>
        <span className="demo-header-project-name">{projectName || 'E-Commerce'}</span>
      </div>

      {/* Actions: Exit & Cart Trigger */}
      <div className="demo-header-actions">
        <Link to="/" className="demo-exit-btn">
          <span>Exit Sandbox</span>
          <span className="material-symbols-outlined">close</span>
        </Link>
        
        {!isBlog && !isPortfolio && (
          <button 
            className="demo-cart-badge-trigger" 
            onClick={toggleDrawer}
            aria-label="Open shopping cart"
          >
            <span className="material-symbols-outlined">shopping_bag</span>
            {cartCount > 0 && (
              <span className="demo-cart-badge-count">{cartCount}</span>
            )}
          </button>
        )}
      </div>
    </header>
  );
}
