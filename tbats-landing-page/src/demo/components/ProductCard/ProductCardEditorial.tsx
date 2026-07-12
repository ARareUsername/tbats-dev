import { useState } from 'react';
import type { ProductCardProps } from '@/types/demo';
import type { CartItem } from '../../context/CartContext';
import { useCart } from '../../context/CartContext';
import ProductPlaceholder from '../UI/ProductPlaceholder';

type CardProduct = ProductCardProps['product'] & Partial<{
  readTime: string;
  year: string;
  date: string;
  client: string;
}>;

interface CardProps {
  product: CardProduct;
  type: string;
}

export default function ProductCardEditorial({ product, type }: CardProps) {
  const { addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants && product.variants.length > 0 ? product.variants[0] : null
  );

  const handleAddToCart = () => {
    addItem({ ...product }, selectedVariant as unknown as CartItem['variant'], 1);
    
    const event = new CustomEvent('show-toast', {
      detail: {
        message: `Added ${product.name} to cart.`,
        type: 'success'
      }
    });
    window.dispatchEvent(event);
  };

  const handleReadArticle = () => {
    const event = new CustomEvent('show-toast', {
      detail: {
        message: `Opening article: "${product.name}"`,
        type: 'info'
      }
    });
    window.dispatchEvent(event);
  };

  const handleViewProject = () => {
    const event = new CustomEvent('show-toast', {
      detail: {
        message: `Opening project: "${product.name}"`,
        type: 'info'
      }
    });
    window.dispatchEvent(event);
  };

  const isBlog = type === 'personal-blog';
  const isPortfolio = type === 'portfolio';

  return (
    <div className="p-card-editorial">
      <div className="p-card-img-wrap">
        <ProductPlaceholder name={product.name} category={product.category} />
      </div>
      
      <div className="p-card-info">
        <div className="p-card-header-col">
          <span className="p-card-editorial-category">{product.category || 'Curated'}</span>
          <h4 className="p-card-title">{product.name}</h4>
        </div>
        
        {isBlog || isPortfolio ? (
          <div>
            <p style={{ 
              fontSize: '0.8rem', 
              color: 'var(--color-secondary)', 
              margin: '0.5rem 0 1rem 0',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              minHeight: '2.4rem',
              lineHeight: '1.2rem'
            }}>
              {product.description}
            </p>
            <div className="p-card-action-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="p-card-price" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {isBlog ? product.readTime : product.year}
              </span>
              <button 
                className="p-card-add-btn" 
                onClick={isBlog ? handleReadArticle : handleViewProject}
                style={{ background: 'none', border: 'none', padding: 0, textDecoration: 'underline', cursor: 'pointer' }}
              >
                {isBlog ? 'Read Article →' : 'View Case Study →'}
              </button>
            </div>
          </div>
        ) : (
          <>
            {product.variants && product.variants.length > 0 && (
              <div className="p-card-variants">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    className={`p-card-variant-btn ${selectedVariant === v ? 'active' : ''}`}
                    onClick={() => setSelectedVariant(v)}
                  >
                    {v}
                  </button>
                ))}
              </div>
            )}

            <div className="p-card-action-row">
              <span className="p-card-price">₱{product.price.toLocaleString()}</span>
              <button className="p-card-add-btn" onClick={handleAddToCart}>
                Order Object →
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
