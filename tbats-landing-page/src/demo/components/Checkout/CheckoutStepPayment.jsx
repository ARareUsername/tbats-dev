import React, { useState } from 'react';

export default function CheckoutStepPayment({ data, onNext, onBack }) {
  const [method, setMethod] = useState(data?.method || 'card');
  const [cardData, setCardData] = useState({
    number: data?.number || '',
    expiry: data?.expiry || '',
    cvc: data?.cvc || ''
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    if (method === 'paypal') return true;

    const nextErrors = {};
    if (!cardData.number.replace(/\s/g, '')) {
      nextErrors.number = 'Card number is required';
    } else if (cardData.number.replace(/\s/g, '').length < 16) {
      nextErrors.number = 'Card number must be 16 digits';
    }

    if (!cardData.expiry.trim()) {
      nextErrors.expiry = 'Expiration is required';
    } else if (!/^\d{2}\/\d{2}$/.test(cardData.expiry)) {
      nextErrors.expiry = 'Must be MM/YY format';
    }

    if (!cardData.cvc.trim()) {
      nextErrors.cvc = 'CVC is required';
    } else if (cardData.cvc.trim().length < 3) {
      nextErrors.cvc = 'CVC must be at least 3 digits';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleCardChange = (e) => {
    let { name, value } = e.target;
    if (name === 'number') {
      // Format as 4-digit chunks
      value = value.replace(/\D/g, '').substring(0, 16);
      value = value.match(/.{1,4}/g)?.join(' ') || value;
    } else if (name === 'expiry') {
      value = value.replace(/\D/g, '').substring(0, 4);
      if (value.length > 2) {
        value = `${value.substring(0, 2)}/${value.substring(2)}`;
      }
    } else if (name === 'cvc') {
      value = value.replace(/\D/g, '').substring(0, 4);
    }
    
    setCardData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onNext({ method, ...cardData });
    }
  };

  return (
    <form className="p-checkout-form" onSubmit={handleSubmit}>
      <h4 className="p-checkout-step-title">Payment Method</h4>

      {/* Payment Selector */}
      <div className="p-payment-method-selector">
        <label className={`p-payment-radio-label ${method === 'card' ? 'active' : ''}`}>
          <input 
            type="radio" 
            name="method" 
            value="card" 
            checked={method === 'card'} 
            onChange={() => setMethod('card')} 
          />
          <span className="material-symbols-outlined">credit_card</span>
          <span>Credit Card</span>
        </label>
        
        <label className={`p-payment-radio-label ${method === 'paypal' ? 'active' : ''}`}>
          <input 
            type="radio" 
            name="method" 
            value="paypal" 
            checked={method === 'paypal'} 
            onChange={() => setMethod('paypal')} 
          />
          <span className="material-symbols-outlined">payments</span>
          <span>PayPal Mock</span>
        </label>
      </div>

      {method === 'card' ? (
        <div className="p-card-input-fields">
          <div className="p-form-group">
            <label htmlFor="number">Card Number *</label>
            <input 
              type="text" 
              id="number" 
              name="number" 
              value={cardData.number} 
              onChange={handleCardChange} 
              className={errors.number ? 'error' : ''}
              placeholder="4242 4242 4242 4242"
            />
            {errors.number && <span className="p-form-error">{errors.number}</span>}
          </div>
          
          <div className="p-form-row">
            <div className="p-form-group">
              <label htmlFor="expiry">Expiration Date *</label>
              <input 
                type="text" 
                id="expiry" 
                name="expiry" 
                value={cardData.expiry} 
                onChange={handleCardChange} 
                className={errors.expiry ? 'error' : ''}
                placeholder="MM/YY"
              />
              {errors.expiry && <span className="p-form-error">{errors.expiry}</span>}
            </div>
            
            <div className="p-form-group">
              <label htmlFor="cvc">CVC Code *</label>
              <input 
                type="text" 
                id="cvc" 
                name="cvc" 
                value={cardData.cvc} 
                onChange={handleCardChange} 
                className={errors.cvc ? 'error' : ''}
                placeholder="123"
              />
              {errors.cvc && <span className="p-form-error">{errors.cvc}</span>}
            </div>
          </div>
        </div>
      ) : (
        <div className="p-paypal-mock-msg">
          <p>You have selected PayPal. Click continue to advance to the order summary confirmation page.</p>
        </div>
      )}

      <footer className="p-checkout-form-actions">
        <button type="button" className="p-checkout-btn-back" onClick={onBack}>
          Back
        </button>
        <button type="submit" className="p-checkout-btn-next">
          Continue to Confirm
        </button>
      </footer>
    </form>
  );
}
