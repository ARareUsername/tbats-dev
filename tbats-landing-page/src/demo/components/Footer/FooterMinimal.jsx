import React from 'react';
import { useParams } from 'react-router-dom';

export default function FooterMinimal({ brandName }) {
  const { projectId } = useParams();
  const isBlog = projectId === 'personal-blog';
  const isPortfolio = projectId === 'portfolio';

  return (
    <footer className="p-footer-minimal">
      <div className="p-footer-container">
        <div className="p-footer-brand">{brandName || (isBlog ? 'ESSENTIALS' : isPortfolio ? 'SHOWCASE' : 'NOVUS')}</div>
        <div className="p-footer-links">
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
          {isBlog ? (
            <a href="#subscribe">Newsletter</a>
          ) : isPortfolio ? (
            <a href="#contact">Contact</a>
          ) : (
            <a href="#shipping">Shipping & Returns</a>
          )}
        </div>
        <div className="p-footer-copy">© 2026 {brandName || (isBlog ? 'ESSENTIALS' : isPortfolio ? 'SHOWCASE' : 'NOVUS')}. All rights reserved.</div>
      </div>
    </footer>
  );
}
