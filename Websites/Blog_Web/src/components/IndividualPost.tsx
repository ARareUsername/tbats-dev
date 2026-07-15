import { posts } from '@data/posts'
import styles from './IndividualPost.module.css'

interface IndividualPostProps {
  slug: string
  onBack: () => void
}

export default function IndividualPost({ slug, onBack }: IndividualPostProps) {
  const post = posts.find(p => p.slug === slug)

  if (!post) {
    return (
      <div className={styles.notFound}>
        <h1>Post not found</h1>
        <button className={styles.backLink} onClick={onBack}>
          &larr; Back to home
        </button>
      </div>
    )
  }

  return (
    <article className={styles.article}>
      <div className={styles.hero}>
        <img src={post.heroImage} alt={post.alt} className={styles.heroImage} />
        <div className={styles.heroOverlay} />
      </div>

      <div className={styles.content}>
        <button className={styles.backLink} onClick={onBack}>
          &larr; Back to all posts
        </button>

        <header className={styles.header}>
          <div className={styles.meta}>
            <span className={styles.location}>{post.location}</span>
            <span className={styles.sep}>·</span>
            <time className={styles.date}>{post.date}</time>
          </div>
          <h1 className={styles.title}>{post.title}</h1>
          {post.depth && (
            <p className={styles.depth}>Depth: {post.depth}</p>
          )}
        </header>

        <div className={styles.body}>
          {post.body.split('\n\n').map((paragraph, i) => (
            <p key={i} className={styles.paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className={styles.tags}>
          {post.tags.map(tag => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>
    </article>
  )
}
