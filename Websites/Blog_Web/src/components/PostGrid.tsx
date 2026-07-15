import { motion } from 'framer-motion'
import PostCard from '@components/PostCard'
import { posts } from '@data/posts'
import styles from './PostGrid.module.css'

interface PostGridProps {
  onSelectPost?: (slug: string) => void
}

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] as const } },
}

export default function PostGrid({ onSelectPost }: PostGridProps) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 className={styles.heading}>Recent Dispatches</h2>
          <p className={styles.subheading}>Stories from the shore and below</p>
        </header>
        <motion.div
          className={styles.grid}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          {posts.map(post => (
            <motion.div key={post.slug} variants={item}>
              <PostCard
                post={post}
                onSelect={onSelectPost}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
