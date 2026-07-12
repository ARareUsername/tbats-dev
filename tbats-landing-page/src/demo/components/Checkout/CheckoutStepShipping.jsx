import React, { useState } from 'react';

export default function CheckoutStepShipping({ data, onNext, onCancel }) {
  const [formData, setFormData] = useState(data || {
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    country: '',
    phone: ''
  });
  
  const [errors, setErrors] = useState({});

  const validate = () => {
    const nextErrors = {};
    if (!formData.name.trim()) nextErrors.name = 'Name is required';
    
    if (!formData.email.trim()) {
      nextErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      nextErrors.email = 'Please enter a valid email';
    }

    if (!formData.address.trim()) nextErrors.address = 'Address is required';
    if (!formData.city.trim()) nextErrors.city = 'City is required';
    if (!formData.zip.trim()) nextErrors.zip = 'Zip code is required';
    if (!formData.country.trim()) nextErrors.country = 'Country is required';
    if (!formData.phone.trim()) nextErrors.phone = 'Phone number is required';

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onNext(formData);
    } else {
      // Focus on first input with error
      const firstErrorKey = Object.keys(errors)[0];
      if (firstErrorKey) {
        const el = document.getElementsByName(firstErrorKey)[0];
        if (el) el.focus();
      }
    }
  };

  return (
    <form className="p-checkout-form" onSubmit={handleSubmit}>
      <h4 className="p-checkout-step-title">Shipping Address</h4>
      
      <div className="p-form-group">
        <label htmlFor="name">Full Name *</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          className={errors.name ? 'error' : ''}
          placeholder="John Doe"
        />
        {errors.name && <span className="p-form-error">{errors.name}</span>}
      </div>

      <div className="p-form-group">
        <label htmlFor="email">Email Address *</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          className={errors.email ? 'error' : ''}
          placeholder="johndoe@example.com"
        />
        {errors.email && <span className="p-form-error">{errors.email}</span>}
      </div>

      <div className="p-form-group">
        <label htmlFor="address">Street Address *</label>
        <input 
          type="text" 
          id="address" 
          name="address" 
          value={formData.address} 
          onChange={handleChange} 
          className={errors.address ? 'error' : ''}
          placeholder="123 Design St"
        />
        {errors.address && <span className="p-form-error">{errors.address}</span>}
      </div>

      <div className="p-form-row">
        <div className="p-form-group">
          <label htmlFor="city">City *</label>
          <input 
            type="text" 
            id="city" 
            name="city" 
            value={formData.city} 
            onChange={handleChange} 
            className={errors.city ? 'error' : ''}
            placeholder="San Francisco"
          />
          {errors.city && <span className="p-form-error">{errors.city}</span>}
        </div>
        <div className="p-form-group">
          <label htmlFor="zip">ZIP / Postal Code *</label>
          <input 
            type="text" 
            id="zip" 
            name="zip" 
            value={formData.zip} 
            onChange={handleChange} 
            className={errors.zip ? 'error' : ''}
            placeholder="94103"
          />
          {errors.zip && <span className="p-form-error">{errors.zip}</span>}
        </div>
      </div>

      <div className="p-form-row">
        <div className="p-form-group">
          <label htmlFor="country">Country *</label>
          <input 
            type="text" 
            id="country" 
            name="country" 
            value={formData.country} 
            onChange={handleChange} 
            className={errors.country ? 'error' : ''}
            placeholder="United States"
          />
          {errors.country && <span className="p-form-error">{errors.country}</span>}
        </div>
        <div className="p-form-group">
          <label htmlFor="phone">Phone Number *</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange} 
            className={errors.phone ? 'error' : ''}
            placeholder="415-555-0199"
          />
          {errors.phone && <span className="p-form-error">{errors.phone}</span>}
        </div>
      </div>

      <footer className="p-checkout-form-actions">
        <button type="button" className="p-checkout-btn-cancel" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit" className="p-checkout-btn-next">
          Continue to Payment
        </button>
      </footer>
    </form>
  );
}
