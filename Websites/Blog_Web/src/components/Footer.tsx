import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.bioluminescence}>
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className={styles.dot}
              style={{
                left: `${10 + i * 18}%`,
                animationDelay: `${i * 1.2}s`,
                animationDuration: `${3 + (i % 3) * 2}s`,
              }}
            />
          ))}
        </div>
        <div className={styles.content}>
          <div className={styles.brand}>
            <span className={styles.logo}>~</span>
            <span className={styles.name}>Ocean Blog</span>
          </div>
          <p className={styles.tagline}>
            Exploring the line between shore and sea
          </p>
          <p className={styles.copy}>
            &copy; {new Date().getFullYear()} Ocean Blog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
