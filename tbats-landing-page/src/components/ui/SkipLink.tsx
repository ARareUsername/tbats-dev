import styles from './SkipLink.module.css';

interface SkipLinkProps {
  href?: string;
  children?: string;
}

export default function SkipLink({
  href = '#main',
  children = 'Skip to main content',
}: SkipLinkProps) {
  return (
    <a href={href} className={styles.skipLink}>
      {children}
    </a>
  );
}
