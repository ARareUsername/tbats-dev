import React from 'react';

export default function Header() {
  return (
    <nav className="glass-nav">
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span className="material-symbols-outlined" style={{ color: 'var(--color-accent)', fontSize: '28px' }}>
            code_blocks
          </span>
          <span style={{ 
            fontSize: '1.4rem', 
            fontWeight: 800, 
            letterSpacing: '0.02em',
            fontFamily: 'var(--font-serif)'
          }}>
            tbats<span style={{ color: 'var(--color-accent)' }}>.dev</span>
          </span>
        </div>
        
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '1.5rem' }} className="nav-links">
            <a href="#services" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s' }}>Services</a>
            <a href="#process" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s' }}>Process</a>
            <a href="#pricing" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s' }}>Pricing</a>
          </div>
          <a href="#contact" className="btn-primary" style={{ padding: '0.5rem 1.2rem', fontSize: '0.85rem' }}>
            Get a Quote
          </a>
        </div>
      </div>
    </nav>
  );
}
