import { useCart, type CartItem as CartItemType } from '../../context/CartContext';
import ProductPlaceholder from '../UI/ProductPlaceholder';

export default function CartItem({ item }: { item: CartItemType }) {
  const { updateQuantity, removeItem } = useCart();
  const { product, variant, quantity } = item;

  return (
    <div className="p-cart-item">
      <div className="p-cart-item-image">
        <ProductPlaceholder name={product.name} category={product.category} />
      </div>
      
      <div className="p-cart-item-details">
        <h5 className="p-cart-item-name">{product.name}</h5>
        {variant && <span className="p-cart-item-variant">{variant as unknown as string}</span>}
        <span className="p-cart-item-price">₱{product.price.toLocaleString()}</span>
        
        <div className="p-cart-item-actions">
          <div className="p-cart-qty-picker">
            <button 
              onClick={() => updateQuantity(product.id, variant, quantity - 1)}
              disabled={quantity <= 1}
              aria-label="Decrease quantity"
            >
              remove
            </button>
            <span className="p-cart-qty-value">{quantity}</span>
            <button 
              onClick={() => updateQuantity(product.id, variant, quantity + 1)}
              aria-label="Increase quantity"
            >
              add
            </button>
          </div>
          
          <button 
            className="p-cart-item-remove-btn"
            onClick={() => removeItem(product.id, variant)}
            aria-label="Remove item from cart"
          >
            Delete
          </button>
        </div>
      </div>

      <div className="p-cart-item-total">
        ₱{(product.price * quantity).toLocaleString()}
      </div>
    </div>
  );
}
