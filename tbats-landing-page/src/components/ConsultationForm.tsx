import type { FormEvent } from 'react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_tbats';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_tbats';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

export default function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSubmitting(true);
    setErrorMsg('');

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
      .then(() => {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
        form.reset();
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        setErrorMsg('Failed to send request. Please try again or email us directly.');
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <section id="contact" style={{ position: 'relative' }}>
      <div className="container" style={{ maxWidth: '1100px' }}>
        <div className="editorial-card" style={{ position: 'relative', overflow: 'hidden', background: 'var(--bg-dark-end)', border: '1px solid var(--border-color)', padding: '3.5rem 2.5rem' }}>
          
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

          <div className="contact-grid">
            {/* Left: Contact Info */}
            <div className="contact-info-container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', height: '100%', textAlign: 'left' }}>
              <span className="text-accent" style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 600 }}>Get In Touch</span>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', marginTop: '0.5rem', marginBottom: '1.5rem', fontWeight: 600 }}>Let&apos;s Connect</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '2.5rem', maxWidth: '450px' }}>
                Have a question, a project in mind, or just want to say hello? Drop us a message, or reach out to us directly through the details below. We&apos;d love to chat.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {/* Email */}
                <div className="contact-info-item" style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1.5px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-accent)',
                    flexShrink: 0
                  }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>mail</span>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>Email Us</h4>
                    <a href="mailto:hello@tbats.dev" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 500 }} className="clickable hover-accent">
                      hello@tbats.dev
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="contact-info-item" style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1.5px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-accent)',
                    flexShrink: 0
                  }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>location_on</span>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>Our Studio</h4>
                    <p style={{ color: 'var(--text-primary)', fontSize: '1.1rem', fontWeight: 500 }}>
                      Pampanga, Philippines
                    </p>
                  </div>
                </div>

                {/* Availability */}
                <div className="contact-info-item" style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1.5px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-accent)',
                    flexShrink: 0
                  }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>schedule</span>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>Availability</h4>
                    <p style={{ color: 'var(--text-primary)', fontSize: '1.1rem', fontWeight: 500 }}>
                      Mon – Fri, 9:00 AM – 6:00 PM <span style={{ color: 'var(--color-accent)', fontSize: '0.85rem' }}>(GMT+8)</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', background: 'rgba(255, 255, 255, 0.01)', border: '1px solid var(--border-color)', padding: '2rem', borderRadius: '4px', textAlign: 'left' }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.25rem' }}>Start a Project</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Fill out the form below to schedule your free consultation.</p>
              </div>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div className="grid-2" style={{ gap: '1.5rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label htmlFor="user_name" style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Name</label>
                    <input 
                      required 
                      type="text" 
                      id="user_name"
                      name="user_name"
                      style={{ padding: '1rem', background: 'var(--bg-input)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', fontFamily: 'var(--font-sans)' }} 
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label htmlFor="user_email" style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email</label>
                    <input 
                      required 
                      type="email" 
                      id="user_email"
                      name="user_email"
                      style={{ padding: '1rem', background: 'var(--bg-input)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', fontFamily: 'var(--font-sans)' }} 
                    />
                  </div>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="project_budget" style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Budget Estimate</label>
                  <select 
                    id="project_budget"
                    name="project_budget"
                    style={{ padding: '1rem', background: 'var(--bg-input)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', fontFamily: 'var(--font-sans)', appearance: 'none' }}
                  >
                    <option value="₱20,000 (Starter)" style={{ color: 'var(--text-primary)', background: 'var(--bg-dark-end)' }}>₱20,000 (Starter)</option>
                    <option value="₱49,000 (Growth)" style={{ color: 'var(--text-primary)', background: 'var(--bg-dark-end)' }}>₱49,000 (Growth)</option>
                    <option value="Custom / let's scope together" style={{ color: 'var(--text-primary)', background: 'var(--bg-dark-end)' }}>Custom / let&apos;s scope together</option>
                  </select>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="project_desc" style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Project Description</label>
                  <textarea 
                    required 
                    id="project_desc"
                    name="project_desc"
                    rows={4} 
                    style={{ padding: '1rem', background: 'var(--bg-input)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', fontFamily: 'var(--font-sans)', resize: 'vertical' }}
                  ></textarea>
                </div>
                
                {errorMsg && (
                  <div style={{ color: '#ef4444', fontSize: '0.9rem', textAlign: 'center', marginTop: '0.5rem' }}>
                    {errorMsg}
                  </div>
                )}
                
                <button 
                  type="submit" 
                  className="btn-primary" 
                  disabled={submitting}
                  style={{ marginTop: '1rem', justifyContent: 'center', opacity: submitting ? 0.7 : 1 }}
                >
                  {submitting ? 'Sending Request...' : 'Start a Project'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}