import React, { useState } from 'react';

export default function InteractiveEstimator() {
  const basePrice = 29000;
  
  const [features, setFeatures] = useState({
    extraPages: false,
    ecommerce: false,
    cms: false,
    animations: false,
    seo: false
  });

  const prices = {
    extraPages: 20000,
    ecommerce: 50000,
    cms: 25000,
    animations: 15000,
    seo: 10000
  };

  const toggleFeature = (feat) => {
    setFeatures(prev => ({ ...prev, [feat]: !prev[feat] }));
  };

  const calculateTotal = () => {
    let total = basePrice;
    Object.keys(features).forEach(k => {
      if (features[k]) total += prices[k];
    });
    return total;
  };

  return (
    <section id="estimator" style={{ background: 'var(--bg-dark)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Pricing & Layout Estimator</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Select the features you need and instantly see an estimated price and layout preview.
          </p>
        </div>
        
        <div className="grid-2">
          {/* Controls */}
          <div className="editorial-card">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Project Scope</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ padding: '1rem', border: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', opacity: 0.5 }}>
                <span>Starter Landing Page (Base)</span>
                <span>₱29,000</span>
              </div>
              
              <label style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', border: `1px solid ${features.extraPages ? 'var(--color-accent)' : 'var(--border-color)'}`, cursor: 'pointer', transition: 'var(--transition-smooth)' }}>
                <input type="checkbox" checked={features.extraPages} onChange={() => toggleFeature('extraPages')} style={{ width: '18px', height: '18px', accentColor: 'var(--color-accent)' }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600 }}>Multi-page Layout</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Up to 5 custom inner pages</div>
                </div>
                <div>+₱20,000</div>
              </label>
              
              <label style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', border: `1px solid ${features.ecommerce ? 'var(--color-accent)' : 'var(--border-color)'}`, cursor: 'pointer', transition: 'var(--transition-smooth)' }}>
                <input type="checkbox" checked={features.ecommerce} onChange={() => toggleFeature('ecommerce')} style={{ width: '18px', height: '18px', accentColor: 'var(--color-accent)' }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600 }}>E-Commerce Setup</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Shopping cart & payments</div>
                </div>
                <div>+₱50,000</div>
              </label>
              
              <label style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', border: `1px solid ${features.cms ? 'var(--color-accent)' : 'var(--border-color)'}`, cursor: 'pointer', transition: 'var(--transition-smooth)' }}>
                <input type="checkbox" checked={features.cms} onChange={() => toggleFeature('cms')} style={{ width: '18px', height: '18px', accentColor: 'var(--color-accent)' }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600 }}>CMS / Blog</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Easily manage your own content</div>
                </div>
                <div>+₱25,000</div>
              </label>
            </div>
            
            <div style={{ 
              marginTop: '2rem', 
              paddingTop: '2rem', 
              borderTop: '1px solid var(--border-color)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>Estimated Total</span>
              <span style={{ fontSize: '2.5rem', fontWeight: 800, fontFamily: 'var(--font-serif)', color: 'var(--color-silver)' }}>
                ₱{calculateTotal().toLocaleString()}
              </span>
            </div>
          </div>
          
          {/* Visual Preview */}
          <div style={{ 
            height: '100%', 
            minHeight: '400px', 
            background: 'var(--bg-dark-end)', 
            border: '1px solid var(--border-color)',
            padding: '2rem',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-accent)', marginBottom: '1rem' }}>Live Preview Wireframe</div>
            
            {/* Nav */}
            <div style={{ width: '100%', height: '40px', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ width: '60px', height: '10px', background: 'rgba(255,255,255,0.2)' }}></div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <div style={{ width: '30px', height: '10px', background: 'rgba(255,255,255,0.1)' }}></div>
                <div style={{ width: '30px', height: '10px', background: 'rgba(255,255,255,0.1)' }}></div>
                {features.ecommerce && <div style={{ width: '20px', height: '10px', background: 'var(--color-accent)' }}></div>}
              </div>
            </div>
            
            {/* Hero */}
            <div style={{ width: '100%', height: '120px', background: 'rgba(255,255,255,0.02)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '40%', height: '20px', background: 'rgba(255,255,255,0.3)' }}></div>
              <div style={{ width: '30%', height: '10px', background: 'rgba(255,255,255,0.1)' }}></div>
            </div>
            
            {/* Dynamic Blocks */}
            <div style={{ display: 'flex', gap: '1rem', flex: 1 }}>
              {features.cms && (
                <div className="animate-fade-in" style={{ flex: 1, border: '1px dashed var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent)', fontSize: '0.8rem' }}>CMS Posts</div>
              )}
              {features.ecommerce && (
                <div className="animate-fade-in" style={{ flex: 2, border: '1px dashed #4facfe', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4facfe', fontSize: '0.8rem' }}>Product Grid</div>
              )}
              {!features.cms && !features.ecommerce && (
                <div style={{ flex: 1, border: '1px dashed rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)', fontSize: '0.8rem' }}>Content Block</div>
              )}
            </div>
            
            {/* Extra Pages Indication */}
            {features.extraPages && (
              <div className="animate-fade-in" style={{ width: '100%', height: '30px', background: 'rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'rgba(255,255,255,0.3)' }}></div>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'rgba(255,255,255,0.3)' }}></div>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'rgba(255,255,255,0.3)' }}></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
