import React from 'react';

export default function HeroPlayful({ title, subtitle, ctaText = "See what's new! 🦄" }) {
  return (
    <section className="p-hero-playful">
      <div className="p-hero-container">
        <div className="p-hero-bubble-card">
          <div className="p-hero-emoji-float">✨🎈</div>
          <h1 className="p-hero-title">{title || 'Oh hello, sweet things! Daily treats.'}</h1>
          <p className="p-hero-subtitle">{subtitle || 'A colorful playground of cheerful goodies and soft items to make you smile, every single day.'}</p>
          <div className="p-hero-actions">
            <a href="#catalog" className="p-hero-btn-playful">{ctaText}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
