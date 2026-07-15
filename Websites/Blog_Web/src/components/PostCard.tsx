import type { BlogPost } from '@mytypes/blog'
import styles from './PostCard.module.css'

interface PostCardProps {
  post: BlogPost
  onSelect?: (slug: string) => void
}

export default function PostCard({ post, onSelect }: PostCardProps) {
  return (
    <article className={styles.card}>
      <button
        className={styles.imageWrapper}
        onClick={() => onSelect?.(post.slug)}
        aria-label={`Read ${post.title}`}
      >
        <img
          src={post.heroImage}
          alt={post.alt}
          className={styles.image}
          loading="lazy"
        />
      </button>
      <div className={styles.body}>
        <div className={styles.meta}>
          <span className={styles.location}>{post.location}</span>
          <span className={styles.sep}>·</span>
          <time className={styles.date}>{post.date}</time>
        </div>
        <h2 className={styles.title}>
          <button
            className={styles.titleLink}
            onClick={() => onSelect?.(post.slug)}
          >
            {post.title}
          </button>
        </h2>
        <p className={styles.excerpt}>{post.excerpt}</p>
        <div className={styles.tags}>
          {post.tags.slice(0, 3).map(tag => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>
    </article>
  )
}
