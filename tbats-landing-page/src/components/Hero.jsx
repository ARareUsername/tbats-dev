import React from 'react';

export default function Hero() {
  return (
    <section style={{
      padding: 'clamp(6rem, 20vw, 12rem) 0 clamp(4rem, 10vw, 8rem) 0',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto'
        }} className="animate-fade-in">
          
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(16, 185, 129, 0.1)',
            border: '1px solid rgba(16, 185, 129, 0.2)',
            padding: '0.4rem 1.2rem',
            borderRadius: '9999px',
            color: 'var(--color-accent)',
            fontSize: '0.8rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '2rem'
          }}>
            <span style={{ display: 'inline-block', width: '6px', height: '6px', backgroundColor: 'var(--color-accent)', borderRadius: '50%' }} className="animate-pulse" />
            Premium Web Development Studio
          </div>
          
          <h1 style={{
            fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
            lineHeight: 1.1,
            marginBottom: '1.5rem'
          }}>
            Crafting Digital Experiences That <span className="text-gradient">Convert</span>.
          </h1>
          
          <p style={{
            fontSize: 'clamp(1rem, 3vw, 1.25rem)',
            color: 'var(--text-secondary)',
            marginBottom: '3rem',
            maxWidth: '600px',
            lineHeight: 1.6,
            fontWeight: 300
          }}>
            We build high-end, responsive, and blazing-fast websites for forward-thinking businesses. No technical jargon, just results.
          </p>
          
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="#contact" className="btn-primary">
              Start a Project
            </a>
            <a href="#process" className="btn-secondary">
              How We Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
