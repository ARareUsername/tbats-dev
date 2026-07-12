export default function CheckoutSuccess({
  orderNumber,
  emailAddress,
  onContinue,
}: {
  orderNumber: string;
  emailAddress: string;
  onContinue: () => void;
}) {
  return (
    <div className="p-checkout-success-step">
      <div className="p-success-icon-wrap">
        <span className="material-symbols-outlined p-success-check-icon">check_circle</span>
      </div>

      <h3 className="p-success-title">Order Confirmed!</h3>
      <p className="p-success-msg">
        Thank you for your purchase. Your order has been placed successfully.
      </p>

      <div className="p-success-details">
        <div className="p-success-detail-row">
          <span>Order Number</span>
          <span className="p-success-order-number">{orderNumber}</span>
        </div>
        <div className="p-success-detail-row">
          <span>Confirmation Sent To</span>
          <span className="p-success-email">{emailAddress}</span>
        </div>
      </div>

      <p className="p-success-note">
        This is a mock transaction for demonstration purposes. No real payment has been processed.
      </p>

      <button className="p-success-continue-btn" onClick={onContinue}>
        Continue Shopping
      </button>
    </div>
  );
}
