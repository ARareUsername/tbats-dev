import { useState } from 'react';
import type { ProductCardProps } from '@/types/demo';
import type { CartItem } from '../../context/CartContext';
import { useCart } from '../../context/CartContext';
import ProductPlaceholder from '../UI/ProductPlaceholder';

type CardProduct = ProductCardProps['product'] &
  Partial<{
    readTime: string;
    year: string;
    date: string;
    client: string;
  }>;

interface CardProps {
  product: CardProduct;
  type: string;
}

export default function ProductCardLuxury({ product, type }: CardProps) {
  const { addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants && product.variants.length > 0 ? product.variants[0] : null
  );

  const handleAddToCart = () => {
    addItem({ ...product }, selectedVariant as unknown as CartItem['variant'], 1);

    const event = new CustomEvent('show-toast', {
      detail: {
        message: `Added ${product.name} to cart.`,
        type: 'success',
      },
    });
    window.dispatchEvent(event);
  };

  const handleReadArticle = () => {
    const event = new CustomEvent('show-toast', {
      detail: {
        message: `Opening article: "${product.name}"`,
        type: 'info',
      },
    });
    window.dispatchEvent(event);
  };

  const handleViewProject = () => {
    const event = new CustomEvent('show-toast', {
      detail: {
        message: `Opening project: "${product.name}"`,
        type: 'info',
      },
    });
    window.dispatchEvent(event);
  };

  const isBlog = type === 'personal-blog';
  const isPortfolio = type === 'portfolio';

  return (
    <div className="p-card-luxury">
      <div className="p-card-img-wrap">
        <ProductPlaceholder name={product.name} category={product.category} />
        <div className="p-card-luxury-hover-overlay">
          {isBlog ? (
            <button className="p-card-luxury-quick-add" onClick={handleReadArticle}>
              Read Article
            </button>
          ) : isPortfolio ? (
            <button className="p-card-luxury-quick-add" onClick={handleViewProject}>
              View Case Study
            </button>
          ) : (
            <button className="p-card-luxury-quick-add" onClick={handleAddToCart}>
              Add to Collection
            </button>
          )}
        </div>
      </div>

      <div className="p-card-info">
        <h4 className="p-card-title">{product.name}</h4>

        {isBlog || isPortfolio ? (
          <div>
            <div className="p-card-meta-row" style={{ marginTop: '0.25rem' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-secondary)' }}>
                {isBlog ? product.date : product.client}
              </span>
              <span
                className="p-card-price"
                style={{ fontSize: '0.75rem', color: 'var(--color-primary)' }}
              >
                {isBlog ? product.readTime : product.year}
              </span>
            </div>
            <p
              style={{
                fontSize: '0.8rem',
                color: 'var(--color-secondary)',
                marginTop: '0.5rem',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                minHeight: '2.4rem',
                lineHeight: '1.2rem',
              }}
            >
              {product.description}
            </p>
          </div>
        ) : (
          <div className="p-card-meta-row">
            {product.variants && product.variants.length > 0 ? (
              <div className="p-card-select-wrap">
                <select
                  value={selectedVariant || ''}
                  onChange={e => setSelectedVariant(e.target.value)}
                  className="p-card-select-dropdown"
                >
                  {product.variants.map(v => (
                    <option key={v} value={v}>
                      {v}
                    </option>
                  ))}
                </select>
              </div>
            ) : (
              <div />
            )}
            <span className="p-card-price">₱{product.price.toLocaleString()}</span>
          </div>
        )}
      </div>
    </div>
  );
}
