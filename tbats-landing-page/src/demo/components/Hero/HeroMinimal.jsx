import React from 'react';

export default function HeroMinimal({ title, subtitle, ctaText = "Shop Collection" }) {
  return (
    <section className="p-hero-minimal">
      <div className="p-hero-container">
        <h1 className="p-hero-title">{title || 'Essential Objects for Living.'}</h1>
        <p className="p-hero-subtitle">{subtitle || 'A thoughtful selection of modular, durable, and highly functional home goods.'}</p>
        <div className="p-hero-actions">
          <a href="#catalog" className="p-hero-btn-primary">{ctaText}</a>
        </div>
      </div>
    </section>
  );
}
