import React from 'react';

export default function HeroBold({ title, subtitle, ctaText = "GO SHOPPING →" }) {
  return (
    <section className="p-hero-bold">
      <div className="p-hero-container">
        <h1 className="p-hero-title">{title || 'RADICAL OBJECTS. NO COMPROMISE.'}</h1>
        <p className="p-hero-subtitle">{subtitle || 'Raw aesthetics, heavy utility, and bold structures. Designed for those who demand high contrast.'}</p>
        <div className="p-hero-actions">
          <a href="#catalog" className="p-hero-btn-bold">{ctaText}</a>
        </div>
      </div>
    </section>
  );
}
