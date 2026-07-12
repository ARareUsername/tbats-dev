import type { BrandProps } from '@/types/demo';
import { useParams } from 'react-router-dom';

export default function FooterLuxury({ brandName }: BrandProps) {
  const { projectId } = useParams();
  const isBlog = projectId === 'personal-blog';
  const isPortfolio = projectId === 'portfolio';

  return (
    <footer className="p-footer-luxury">
      <div className="p-footer-container">
        <div className="p-footer-grid">
          <div className="p-footer-col">
            <h5 className="p-footer-title">
              {brandName ||
                (isBlog
                  ? 'AETHER HOUSE JOURNAL'
                  : isPortfolio
                    ? 'AETHER CREATIVE HOUSE'
                    : 'AETHER')}
            </h5>
            <p className="p-footer-desc">
              {isBlog
                ? 'Curators of modern development thoughts, code systems, and visual design patterns.'
                : isPortfolio
                  ? 'Bespoke digital architecture, branding curations, and responsive web platforms.'
                  : 'Curators of timeless aesthetic artifacts and heirloom-quality furnishings.'}
            </p>
          </div>
          <div className="p-footer-col">
            {isBlog ? (
              <>
                <h6 className="p-footer-subtitle">Directory</h6>
                <a href="#articles">Articles</a>
                <a href="#about">Author Bio</a>
                <a href="#newsletter">Newsletter</a>
              </>
            ) : isPortfolio ? (
              <>
                <h6 className="p-footer-subtitle">Directory</h6>
                <a href="#works">Works</a>
                <a href="#capabilities">Capabilities</a>
                <a href="#contact">Contact Inquiries</a>
              </>
            ) : (
              <>
                <h6 className="p-footer-subtitle">Support</h6>
                <a href="#concierge">Concierge Services</a>
                <a href="#shipping">Bespoke Delivery</a>
                <a href="#care">Product Care Guide</a>
              </>
            )}
          </div>
          <div className="p-footer-col">
            <h6 className="p-footer-subtitle">Legal</h6>
            <a href="#privacy">Privacy Curation</a>
            <a href="#terms">Terms of Curation</a>
          </div>
        </div>
        <div className="p-footer-bottom">
          <p>
            © 2026{' '}
            {brandName ||
              (isBlog
                ? 'AETHER HOUSE JOURNAL'
                : isPortfolio
                  ? 'AETHER CREATIVE HOUSE'
                  : 'AETHER')}{' '}
            House. Created for discerning living.
          </p>
        </div>
      </div>
    </footer>
  );
}
