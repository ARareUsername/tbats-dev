import styles from './ContactPage.module.css'

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <h1 className={styles.title}>Get in Touch</h1>
        <p className={styles.subtitle}>
          Have a story to share or a question about the depths?
        </p>
        <form
          className={styles.form}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className={styles.field}>
            <label className={styles.label} htmlFor="name">Name</label>
            <input className={styles.input} id="name" type="text" placeholder="Your name" />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="email">Email</label>
            <input className={styles.input} id="email" type="email" placeholder="your@email.com" />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="message">Message</label>
            <textarea className={styles.textarea} id="message" rows={5} placeholder="What's on your mind?" />
          </div>
          <button className={styles.button} type="submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}
