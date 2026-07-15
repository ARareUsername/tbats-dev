import styles from './AboutPage.module.css'

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <h1 className={styles.title}>About This Blog</h1>
        <p className={styles.subtitle}>
          Stories from the line where sand meets sea
        </p>
        <div className={styles.body}>
          <p>
            This is a collection of journeys to the world&apos;s most beautiful
            shorelines — from hidden coves accessible only by sea to vibrant
            coral reefs teeming with life, from bioluminescent bays that glow
            under starlight to quiet beaches where the only sound is the tide.
          </p>
          <p>
            Every post is a dispatch from the depths, a meditation on the
            places where land and ocean meet. Whether I&apos;m diving beneath
            the surface or walking the tide line at sunset, the goal is the
            same: to capture the beauty of our coastal world and share the
            stories it holds.
          </p>
          <p>
            Thanks for reading. Now go find your shoreline.
          </p>
        </div>
      </div>
    </div>
  )
}
