import type { BrandProps } from '@/types/demo';
import { useParams } from 'react-router-dom';

export default function FooterEditorial({ brandName }: BrandProps) {
  const { projectId } = useParams();
  const isBlog = projectId === 'personal-blog';
  const isPortfolio = projectId === 'portfolio';

  return (
    <footer className="p-footer-editorial">
      <div className="p-footer-container">
        <div className="p-footer-grid">
          <div className="p-footer-col-large">
            <h5 className="p-footer-title">
              {brandName || (isBlog ? 'KROMA WRITES' : isPortfolio ? 'KROMA EXHIBIT' : 'KROMA')} /{' '}
              {isBlog ? 'JOURNAL' : isPortfolio ? 'ARCHIVE' : 'COLLECTIONS'}
            </h5>
            <p className="p-footer-desc">
              {isBlog
                ? 'Receive weekly dispatches of our latest articles and tech thoughts.'
                : isPortfolio
                  ? 'Subscribe to get updates on recent case studies and development logs.'
                  : 'Receive weekly dispatches of physical design essays and shop drops.'}
            </p>
            <form className="p-footer-newsletter-form" onSubmit={e => e.preventDefault()}>
              <input type="email" placeholder="YOUR EMAIL ADDRESS" className="p-footer-input" />
              <button type="submit" className="p-footer-submit-btn">
                SUBMIT
              </button>
            </form>
          </div>
          <div className="p-footer-col">
            <h6 className="p-footer-subtitle">Directory</h6>
            {isBlog ? (
              <>
                <a href="#articles">Stories</a>
                <a href="#ideas">Ideas</a>
                <a href="#archive">Archive</a>
              </>
            ) : isPortfolio ? (
              <>
                <a href="#cases">Cases</a>
                <a href="#services">Services</a>
                <a href="#archive">Archive</a>
              </>
            ) : (
              <>
                <a href="#shop">Shop Collections</a>
                <a href="#journal">Editorial Journal</a>
                <a href="#about">Studio About</a>
              </>
            )}
          </div>
        </div>
        <div className="p-footer-bottom">
          <p>
            © 2026{' '}
            {brandName || (isBlog ? 'KROMA WRITES' : isPortfolio ? 'KROMA EXHIBIT' : 'KROMA')}{' '}
            Studio. Published in San Francisco.
          </p>
        </div>
      </div>
    </footer>
  );
}
