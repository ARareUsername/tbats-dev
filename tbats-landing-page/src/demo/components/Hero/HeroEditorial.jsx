import React from 'react';

export default function HeroEditorial({ title, subtitle, ctaText = "Discover the Edition" }) {
  return (
    <section className="p-hero-editorial">
      <div className="p-hero-container">
        <div className="p-hero-text-side">
          <span className="p-hero-meta-tag">Issue No. 12 / Curated Spaces</span>
          <h1 className="p-hero-title">{title || 'Design as a Narrative.'}</h1>
          <p className="p-hero-subtitle">{subtitle || 'A physical anthology of objects that tell stories, celebrate materials, and frame modern living.'}</p>
          <div className="p-hero-actions">
            <a href="#catalog" className="p-hero-btn-editorial">{ctaText}</a>
          </div>
        </div>
        <div className="p-hero-image-side">
          <div className="p-hero-image-frame">
            <div style={{
              width: '100%',
              height: '100%',
              minHeight: '400px',
              background: 'linear-gradient(135deg, var(--color-surface) 0%, transparent 100%)',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              border: '1px solid var(--color-border)'
            }}>
              {/* Geometric lines */}
              <div style={{
                position: 'absolute',
                top: '10%',
                left: '10%',
                right: '10%',
                bottom: '10%',
                border: '1px solid var(--color-border)',
                opacity: 0.3
              }} />
              <div style={{
                position: 'absolute',
                top: 0,
                left: '50%',
                width: '1px',
                height: '100%',
                background: 'var(--color-border)',
                opacity: 0.2
              }} />
              <div style={{
                position: 'absolute',
                top: '50%',
                left: 0,
                width: '100%',
                height: '1px',
                background: 'var(--color-border)',
                opacity: 0.2
              }} />
              <span style={{
                fontSize: '0.8rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--color-secondary)',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                opacity: 0.6
              }}>
                [ Editorial Specimen ]
              </span>
            </div>
            <div className="p-hero-image-overlay" />
          </div>
        </div>
      </div>
    </section>
  );
}
