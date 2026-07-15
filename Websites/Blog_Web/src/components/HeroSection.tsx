import { useRef } from 'react'
import { motion } from 'framer-motion'
import styles from './HeroSection.module.css'
import { posts } from '@data/posts'

export default function HeroSection() {
  const latest = posts[0]
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section ref={sectionRef} className={styles.hero}>
      <motion.div
        className={styles.imageWrapper}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
      >
        <img
          src={latest.heroImage}
          alt={latest.alt}
          className={styles.image}
        />
        <div className={styles.overlay} />
      </motion.div>
      <div className={styles.content}>
        <p className={styles.label}>Latest Dispatch</p>
        <h1 className={styles.title}>{latest.title}</h1>
        <p className={styles.subtitle}>{latest.excerpt}</p>
        <p className={styles.meta}>
          <span className={styles.location}>{latest.location}</span>
          <span className={styles.separator}>·</span>
          <time className={styles.date}>{latest.date}</time>
        </p>
      </div>
    </section>
  )
}
