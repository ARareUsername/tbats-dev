import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import ProductPlaceholder from '../UI/ProductPlaceholder';

export default function ProductCardMinimal({ product, type }) {
  const { addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants && product.variants.length > 0 ? product.variants[0] : null
  );

  const handleAddToCart = () => {
    addItem(product, selectedVariant, 1);
    
    // Dispatch custom event for Toast notification
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
    <div className="p-card-minimal">
      <div className="p-card-img-wrap">
        <ProductPlaceholder name={product.name} category={product.category} />
      </div>
      
      <div className="p-card-info">
        <div className="p-card-header-row">
          <h4 className="p-card-title">{product.name}</h4>
          {isBlog ? (
            <span className="p-card-price" style={{ fontSize: '0.75rem', color: 'var(--color-accent)' }}>{product.readTime}</span>
          ) : isPortfolio ? (
            <span className="p-card-price" style={{ fontSize: '0.75rem', color: 'var(--color-accent)' }}>{product.year}</span>
          ) : (
            <span className="p-card-price">₱{product.price.toLocaleString()}</span>
          )}
        </div>
        
        {isBlog || isPortfolio ? (
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
        ) : (
          product.variants && product.variants.length > 0 && (
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
          )
        )}
        
        {isBlog ? (
          <button className="p-card-add-btn" onClick={handleReadArticle}>
            Read Article →
          </button>
        ) : isPortfolio ? (
          <button className="p-card-add-btn" onClick={handleViewProject}>
            View Case Study
          </button>
        ) : (
          <button className="p-card-add-btn" onClick={handleAddToCart}>
            Add to Bag
          </button>
        )}
      </div>
    </div>
  );
}
