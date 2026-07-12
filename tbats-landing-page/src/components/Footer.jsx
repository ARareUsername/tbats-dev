import React from 'react';

export default function Footer() {
  return (
    <footer style={{ 
      borderTop: '1px solid var(--border-color)', 
      padding: '4rem 0 2rem 0',
      background: 'var(--footer-bg)',
      marginTop: '4rem'
    }}>
      <div className="container">
        <div className="grid-2" style={{ alignItems: 'start', gap: '2rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <span className="material-symbols-outlined" style={{ color: 'var(--color-accent)', fontSize: '24px' }}>
                code_blocks
              </span>
              <span style={{ fontSize: '1.2rem', fontWeight: 800, fontFamily: 'var(--font-serif)' }}>
                tbats<span style={{ color: 'var(--color-accent)' }}>.dev</span>
              </span>
            </div>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '300px', fontSize: '0.9rem' }}>
              Premium web development and design agency helping businesses build high-converting, visually stunning digital experiences.
            </p>
          </div>
          
          <div className="footer-links" style={{ display: 'flex', gap: '4rem', justifyContent: 'flex-end' }}>
            <div>
              <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '1rem' }}>Company</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li><a href="#about" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>About Us</a></li>
                <li><a href="#process" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Our Process</a></li>
                <li><a href="#pricing" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '1rem' }}>Contact</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>hello@tbats.dev</li>
                <li style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Pampanga, Philippines</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom" style={{ 
          marginTop: '4rem', 
          paddingTop: '2rem', 
          borderTop: '1px solid var(--footer-border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: 'var(--text-secondary)',
          fontSize: '0.85rem'
        }}>
          <p>&copy; {new Date().getFullYear()} TBATS Dev. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <span className="material-symbols-outlined" style={{ cursor: 'pointer' }}>language</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
