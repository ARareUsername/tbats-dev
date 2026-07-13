/* ─── Imports ─── */
import { useState, useEffect, useCallback } from 'react';
import styles from './Portfolio.module.css';
import img1 from '@assets/images/pexels-alicedecasttro-36645832.jpg';
import img2 from '@assets/images/pexels-ammy-singh-294201421-38241683.jpg';
import img3 from '@assets/images/pexels-damir-22815314.jpg';
import img4 from '@assets/images/pexels-jemanuel-37972193.jpg';
import img5 from '@assets/images/pexels-muhamad-izzul-isyraf-mohd-radzi-2159215967-35871158.jpg';

/* ─── Data ─── */
const PHOTOS = [
  { src: img1, alt: 'Street portrait in natural light' },
  { src: img2, alt: 'Golden hour landscape' },
  { src: img3, alt: 'Urban architecture detail' },
  { src: img4, alt: 'Candid documentary moment' },
  { src: img5, alt: 'Minimalist still life' },
];

/* ─── Component ─── */
export default function Portfolio() {
  const [selected, setSelected] = useState<number | null>(null);

  const close = useCallback(() => setSelected(null), []);

  useEffect(() => {
    if (selected === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [selected, close]);

  return (
    <section id="portfolio" className={styles.section}>
      <h2 className={styles.heading}>Portfolio</h2>
      <p className={styles.subtitle}>A selection of recent work</p>
      <div className={styles.grid}>
        {PHOTOS.map((photo, i) => (
          <button key={i} className={styles.card} onClick={() => setSelected(i)} type="button">
            <img src={photo.src} alt={photo.alt} className={styles.image} loading="lazy" />
          </button>
        ))}
      </div>

      {selected !== null && (
        <div className={styles.lightbox} onClick={close}>
          <button className={styles.closeBtn} onClick={close} type="button" aria-label="Close">
            &times;
          </button>
          <img src={PHOTOS[selected]!.src} alt={PHOTOS[selected]!.alt} className={styles.lightboxImage} />
        </div>
      )}
    </section>
  );
}
