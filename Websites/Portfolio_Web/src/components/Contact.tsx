/* ─── Imports ─── */
import { useState, type FormEvent } from 'react';
import styles from './Contact.module.css';

/* ─── Component ─── */
export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    /* TODO: wire up to EmailJS or an API endpoint */
    setSent(true);
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.infoCol}>
          <h2 className={styles.heading}>Get in touch</h2>
          <p className={styles.body}>
            Have a project in mind or just want to say hello? Fill out the form
            or reach out directly.
          </p>
          <div className={styles.details}>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Email</span>
              <span className={styles.detailValue}>hello@capturephoto.com</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Phone</span>
              <span className={styles.detailValue}>+1 (503) 555-0142</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Location</span>
              <span className={styles.detailValue}>Portland, OR</span>
            </div>
          </div>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.field}>
            <span className={styles.label}>Name</span>
            <input className={styles.input} type="text" required placeholder="Your name" />
          </label>
          <label className={styles.field}>
            <span className={styles.label}>Email</span>
            <input className={styles.input} type="email" required placeholder="you@example.com" />
          </label>
          <label className={styles.field}>
            <span className={styles.label}>Message</span>
            <textarea className={styles.textarea} rows={5} required placeholder="Your message..." />
          </label>
          <button className={styles.submit} type="submit" disabled={sent}>
            {sent ? 'Message sent!' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
}
