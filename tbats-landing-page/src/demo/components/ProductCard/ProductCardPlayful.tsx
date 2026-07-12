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

export default function ProductCardPlayful({ product, type }: CardProps) {
  const { addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants && product.variants.length > 0 ? product.variants[0] : null
  );

  const handleAddToCart = () => {
    addItem({ ...product }, selectedVariant as unknown as CartItem['variant'], 1);
    
    const event = new CustomEvent('show-toast', {
      detail: {
        message: `Added ${product.name} to basket! 💖`,
        type: 'success'
      }
    });
    window.dispatchEvent(event);
  };

  const handleReadArticle = () => {
    const event = new CustomEvent('show-toast', {
      detail: {
        message: `Reading: "${product.name}" 📖`,
        type: 'info'
      }
    });
    window.dispatchEvent(event);
  };

  const handleViewProject = () => {
    const event = new CustomEvent('show-toast', {
      detail: {
        message: `Opening: "${product.name}" 📁`,
        type: 'info'
      }
    });
    window.dispatchEvent(event);
  };

  const isBlog = type === 'personal-blog';
  const isPortfolio = type === 'portfolio';

  return (
    <div className="p-card-playful">
      <div className="p-card-img-wrap">
        <ProductPlaceholder name={product.name} category={product.category} />
        <span className="p-card-emoji-badge">{isBlog ? '📝' : isPortfolio ? '🎨' : '✨'}</span>
      </div>
      
      <div className="p-card-info">
        <h4 className="p-card-title">{product.name}</h4>
        
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
            <div className="p-card-action-row">
              <span className="p-card-price" style={{ fontSize: '0.75rem', fontWeight: 600 }}>
                {isBlog ? `🌸 ${product.readTime}` : `⭐ ${product.year}`}
              </span>
              <button className="p-card-add-btn" onClick={isBlog ? handleReadArticle : handleViewProject}>
                {isBlog ? 'Read 📖' : 'Open 📂'}
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
                Add 🌸
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
