import type { BrandProps } from '@/types/demo';
import { useParams } from 'react-router-dom';

export default function FooterBold({ brandName }: BrandProps) {
  const { projectId } = useParams();
  const isBlog = projectId === 'personal-blog';
  const isPortfolio = projectId === 'portfolio';

  return (
    <footer className="p-footer-bold">
      <div className="p-footer-container">
        <div className="p-footer-grid">
          <div className="p-footer-col">
            <h5 className="p-footer-title">{(brandName || (isBlog ? 'ESSENTIALS BOLD' : isPortfolio ? 'CREATIVE SHIELD' : 'NOVUS BOLD')).toUpperCase()}</h5>
            <p className="p-footer-desc">
              {isBlog 
                ? 'EXPLORING ARCHITECTURE, SYSTEMS, AND BOLD DIGITAL GRAPHICS.'
                : isPortfolio
                ? 'BESPOKE CREATIVE DEVELOPMENT AND BRANDING CASE STUDIES.'
                : 'Heavy duty objects for aggressive daily workloads. Built to endure.'}
            </p>
          </div>
          <div className="p-footer-col">
            <h6 className="p-footer-subtitle">LINKS</h6>
            {isBlog ? (
              <>
                <a href="#drops">READ POSTS</a>
                <a href="#newsletter">NEWSLETTER</a>
              </>
            ) : isPortfolio ? (
              <>
                <a href="#works">PORTFOLIO WORKS</a>
                <a href="#contact">CONTACT ME</a>
              </>
            ) : (
              <>
                <a href="#shop">SHOP NOW</a>
                <a href="#orders">TRACK ORDER</a>
              </>
            )}
          </div>
        </div>
        <div className="p-footer-bottom">
          <p>© 2026 {(brandName || (isBlog ? 'ESSENTIALS BOLD' : isPortfolio ? 'CREATIVE SHIELD' : 'NOVUS BOLD')).toUpperCase()}. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
}
