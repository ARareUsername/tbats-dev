import type { HTMLAttributes } from 'react';
import styles from './Avatar.module.css';

type Size = 'sm' | 'md' | 'lg';

interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  initials: string;
  size?: Size;
}

export default function Avatar({ initials, size = 'md', className, ...rest }: AvatarProps) {
  const classes = [styles.avatar, styles[size], className].filter(Boolean).join(' ');
  return (
    <div className={classes} {...rest}>
      {initials}
    </div>
  );
}
