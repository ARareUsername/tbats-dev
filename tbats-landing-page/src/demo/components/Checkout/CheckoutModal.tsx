import { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import CheckoutStepShipping from './CheckoutStepShipping';
import CheckoutStepPayment from './CheckoutStepPayment';
import CheckoutStepConfirm from './CheckoutStepConfirm';
import CheckoutSuccess from './CheckoutSuccess';

interface ShippingData {
  name: string;
  email: string;
  address: string;
  city: string;
  zip: string;
  country: string;
  phone: string;
}

interface PaymentData {
  method: string;
  number: string;
  expiry: string;
  cvc: string;
}

export default function CheckoutModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { clearCart } = useCart();
  const [step, setStep] = useState(1); // 1: Shipping, 2: Payment, 3: Confirm, 4: Success
  const [shippingData, setShippingData] = useState<ShippingData | null>(null);
  const [paymentData, setPaymentData] = useState<PaymentData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Reset modal state on close/open
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setShippingData(null);
      setPaymentData(null);
      setIsSubmitting(false);
      setOrderNumber('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleShippingNext = (data: ShippingData) => {
    setShippingData(data);
    setStep(2);
  };

  const handlePaymentNext = (data: PaymentData) => {
    setPaymentData(data);
    setStep(3);
  };

  const handlePlaceOrder = () => {
    setIsSubmitting(true);
    
    // Simulate API delay (500ms)
    setTimeout(() => {
      const generatedOrderNum = `TBATS-${Math.floor(100000 + Math.random() * 900000)}`;
      setOrderNumber(generatedOrderNum);
      setIsSubmitting(false);
      setStep(4);
      
      // Dispatch order confirmation toast
      const event = new CustomEvent('show-toast', {
        detail: {
          message: `Order ${generatedOrderNum} confirmed!`,
          type: 'success',
          icon: 'check_circle'
        }
      });
      window.dispatchEvent(event);
      
      clearCart(); // Clear cart after success
    }, 800);
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="p-checkout-modal-overlay">
      <div className="p-checkout-modal-container">
        {/* Header */}
        <header className="p-checkout-modal-header">
          <h3>Checkout</h3>
          {step < 4 && (
            <button 
              className="p-checkout-close-btn" 
              onClick={handleClose}
              disabled={isSubmitting}
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          )}
        </header>

        {/* Stepper indicator */}
        {step < 4 && (
          <div className="p-checkout-stepper">
            <div className={`p-step-indicator ${step >= 1 ? 'active' : ''} ${step > 1 ? 'complete' : ''}`}>
              <span className="p-step-num">{step > 1 ? '✓' : '1'}</span>
              <span className="p-step-label">Shipping</span>
            </div>
            <div className="p-step-connector"></div>
            <div className={`p-step-indicator ${step >= 2 ? 'active' : ''} ${step > 2 ? 'complete' : ''}`}>
              <span className="p-step-num">{step > 2 ? '✓' : '2'}</span>
              <span className="p-step-label">Payment</span>
            </div>
            <div className="p-step-connector"></div>
            <div className={`p-step-indicator ${step >= 3 ? 'active' : ''}`}>
              <span className="p-step-num">3</span>
              <span className="p-step-label">Review</span>
            </div>
          </div>
        )}

        {/* Body content based on step */}
        <div className="p-checkout-modal-body">
          {step === 1 && (
            <CheckoutStepShipping 
              data={shippingData} 
              onNext={handleShippingNext} 
              onCancel={handleClose} 
            />
          )}
          {step === 2 && (
            <CheckoutStepPayment 
              data={paymentData} 
              onNext={handlePaymentNext} 
              onBack={() => setStep(1)} 
            />
          )}
          {step === 3 && shippingData && paymentData && (
            <CheckoutStepConfirm 
              shippingData={shippingData} 
              paymentData={paymentData} 
              isSubmitting={isSubmitting}
              onPlaceOrder={handlePlaceOrder} 
              onBack={() => setStep(2)} 
            />
          )}
          {step === 4 && (
            <CheckoutSuccess 
              orderNumber={orderNumber} 
              emailAddress={shippingData?.email || ''} 
              onContinue={handleClose} 
            />
          )}
        </div>
      </div>
    </div>
  );
}
