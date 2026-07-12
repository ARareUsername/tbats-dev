import type { BrandProps } from '@/types/demo';
import { useParams } from 'react-router-dom';

export default function FooterPlayful({ brandName }: BrandProps) {
  const { projectId } = useParams();
  const isBlog = projectId === 'personal-blog';
  const isPortfolio = projectId === 'portfolio';

  return (
    <footer className="p-footer-playful">
      <div className="p-footer-container">
        <div className="p-footer-grid">
          <div className="p-footer-col">
            <h5 className="p-footer-title">{isBlog ? '💌' : isPortfolio ? '🎨' : '🎈'} {brandName || (isBlog ? 'MY DIARY' : isPortfolio ? 'MY PORTFOLIO' : 'KANDY')}</h5>
            <p className="p-footer-desc">
              {isBlog 
                ? 'Bouncy thoughts, colorful code playgrounds, and fun UI design systems!'
                : isPortfolio
                ? 'A cheerful playground of creative works, branding designs, and dynamic web apps!'
                : 'Bouncy things and delightful candy-colored items to spice up your life!'}
            </p>
          </div>
          <div className="p-footer-col">
            <h6 className="p-footer-subtitle">{isBlog ? 'Explore' : isPortfolio ? 'Showcase' : 'Helper Corner'}</h6>
            {isBlog ? (
              <>
                <a href="#sweet-deals">Read Posts 📖</a>
                <a href="#newsletter">Say Hello 💌</a>
              </>
            ) : isPortfolio ? (
              <>
                <a href="#sweet-deals">My Projects 🎨</a>
                <a href="#contact">Hire Me 👋</a>
              </>
            ) : (
              <>
                <a href="#track">Where\'s my goodies?</a>
                <a href="#help">Help Desk</a>
              </>
            )}
          </div>
        </div>
        <div className="p-footer-bottom">
          <p>Made with 💖 by {brandName || (isBlog ? 'MY DIARY' : isPortfolio ? 'MY PORTFOLIO' : 'KANDY')} 2026.</p>
        </div>
      </div>
    </footer>
  );
}
