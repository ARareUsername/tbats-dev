/* ─── Imports ─── */
import styles from './About.module.css';
import aboutPhoto from '@assets/about section photo/pexels-teddy-16400892.jpg';

/* ─── Component ─── */
export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.imageCol}>
          <img src={aboutPhoto} alt="About" className={styles.image} />
        </div>
        <div className={styles.textCol}>
          <h2 className={styles.heading}>About Me</h2>
          <p className={styles.body}>
            My name is Korean guy and I do photgraphy, this is my passion
            since I was a child. I hope to create happy memories that can be 
            recalled.
          </p>
          <p className={styles.body}>
            Capturing Beautiful Memories<br />-me
          </p>
          <div className={styles.specialties}>
            <h3 className={styles.specialtiesTitle}>Specialties</h3>
            <ul className={styles.specialtiesList}>
              <li>Close Up Shot</li>
              <li>Graduations</li>
              <li>Birthdays</li>
              <li>Weddings</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
