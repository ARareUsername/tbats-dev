import React, { useState } from 'react';

export default function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    e.target.reset();
  };

  return (
    <section id="contact" style={{ position: 'relative' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div className="editorial-card" style={{ position: 'relative', overflow: 'hidden' }}>
          
          {submitted && (
            <div className="animate-fade-in" style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(0,0,0,0.9)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 10
            }}>
              <span className="material-symbols-outlined" style={{ fontSize: '4rem', color: 'var(--color-accent)', marginBottom: '1rem' }}>check_circle</span>
              <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Request Sent</h3>
              <p style={{ color: 'var(--text-secondary)' }}>We will be in touch shortly to schedule your call.</p>
            </div>
          )}

          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Let's Build Something Great</h2>
            <p style={{ color: 'var(--text-secondary)' }}>Fill out the form below to schedule your free consultation.</p>
          </div>
          
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="grid-2" style={{ gap: '1.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Name</label>
                <input required type="text" style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', color: 'white', fontFamily: 'var(--font-sans)' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email</label>
                <input required type="email" style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', color: 'white', fontFamily: 'var(--font-sans)' }} />
              </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Budget Estimate</label>
              <select style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', color: 'white', fontFamily: 'var(--font-sans)', appearance: 'none' }}>
                <option value="starter" style={{ color: 'black' }}>₱29,000 - ₱50,000 (Starter)</option>
                <option value="growth" style={{ color: 'black' }}>₱50,000 - ₱100,000 (Growth)</option>
                <option value="scale" style={{ color: 'black' }}>₱100,000+ (Scale)</option>
              </select>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Project Description</label>
              <textarea required rows="4" style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', color: 'white', fontFamily: 'var(--font-sans)', resize: 'vertical' }}></textarea>
            </div>
            
            <button type="submit" className="btn-primary" style={{ marginTop: '1rem', justifyContent: 'center' }}>
              Start a Project
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
