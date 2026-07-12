import type { HeroProps } from '@/types/demo';

export default function HeroLuxury({ title, subtitle, ctaText = "Explore Collection" }: HeroProps) {
  return (
    <section className="p-hero-luxury">
      <div className="p-hero-container">
        <div className="p-hero-gold-accent-line"></div>
        <h1 className="p-hero-title">{title || 'Timeless Heritage. Refined Craft.'}</h1>
        <p className="p-hero-subtitle">{subtitle || 'Impeccable quality and heirloom aesthetics, designed to elevate your everyday routines.'}</p>
        <div className="p-hero-actions">
          <a href="#catalog" className="p-hero-btn-luxury">{ctaText}</a>
        </div>
      </div>
    </section>
  );
}
