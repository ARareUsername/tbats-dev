import { useCart } from '../../context/CartContext';
import type { ShippingData } from './CheckoutStepShipping';
import type { PaymentData } from './CheckoutStepPayment';

export default function CheckoutStepConfirm({
  shippingData,
  paymentData,
  isSubmitting,
  onPlaceOrder,
  onBack,
}: {
  shippingData: ShippingData;
  paymentData: PaymentData;
  isSubmitting: boolean;
  onPlaceOrder: () => void;
  onBack: () => void;
}) {
  const { state } = useCart();
  const { items } = state;

  const subtotal = items.reduce((total, item) => total + item.product.price * item.quantity, 0);
  const tax = subtotal * 0.08;
  const shipping = subtotal > 8000 ? 0 : 500;
  const orderTotal = subtotal + tax + shipping;

  return (
    <div className="p-checkout-confirm-step">
      <h4 className="p-checkout-step-title">Review & Place Order</h4>

      {/* Scrollable Summary List */}
      <div className="p-confirm-review-section">
        <h5>Order Details</h5>
        <div className="p-confirm-items-list">
          {items.map((item, idx) => (
            <div key={`${item.product.id}-${idx}`} className="p-confirm-item-row">
              <span className="p-confirm-item-qty">{item.quantity}x</span>
              <span className="p-confirm-item-name">{item.product.name}</span>
              {item.variant && (
                <span className="p-confirm-item-variant">
                  ({item.variant as unknown as string})
                </span>
              )}
              <span className="p-confirm-item-price">
                ₱{(item.product.price * item.quantity).toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Details split */}
      <div className="p-confirm-details-grid">
        <div className="p-confirm-details-col">
          <h5>Shipping Address</h5>
          <p>{shippingData.name}</p>
          <p>{shippingData.address}</p>
          <p>
            {shippingData.city}, {shippingData.zip}
          </p>
          <p>{shippingData.country}</p>
          <p>{shippingData.phone}</p>
        </div>

        <div className="p-confirm-details-col">
          <h5>Payment Details</h5>
          {paymentData.method === 'card' ? (
            <p>Credit Card ending in {paymentData.number.slice(-4)}</p>
          ) : (
            <p>Mock PayPal Account</p>
          )}
        </div>
      </div>

      {/* Pricing Footer */}
      <div className="p-confirm-pricing-summary">
        <div className="p-confirm-price-row">
          <span>Subtotal</span>
          <span>₱{subtotal.toLocaleString()}</span>
        </div>
        <div className="p-confirm-price-row">
          <span>Estimated Tax</span>
          <span>₱{tax.toLocaleString()}</span>
        </div>
        <div className="p-confirm-price-row">
          <span>Shipping</span>
          <span>{shipping === 0 ? 'FREE' : `₱${shipping.toLocaleString()}`}</span>
        </div>
        <div className="p-confirm-total-row">
          <span>Total Due</span>
          <span>₱{orderTotal.toLocaleString()}</span>
        </div>
      </div>

      <footer className="p-checkout-form-actions">
        <button
          type="button"
          className="p-checkout-btn-back"
          onClick={onBack}
          disabled={isSubmitting}
        >
          Back
        </button>
        <button
          type="button"
          className="p-checkout-btn-confirm"
          onClick={onPlaceOrder}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <div className="p-checkout-btn-spinner-row">
              <span className="p-checkout-spinner"></span>
              <span>Processing...</span>
            </div>
          ) : (
            'Place Order'
          )}
        </button>
      </footer>
    </div>
  );
}
