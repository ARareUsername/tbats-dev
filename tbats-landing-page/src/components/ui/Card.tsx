import type { HTMLAttributes } from 'react';
import styles from './Card.module.css';

type Variant = 'editorial' | 'demo' | 'team';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: Variant;
  as?: 'div' | 'article' | 'section';
}

export default function Card({
  variant = 'editorial',
  as = 'div',
  className,
  children,
  ...rest
}: CardProps) {
  const Tag = as;
  const classes = [styles.card, styles[variant], className].filter(Boolean).join(' ');
  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  );
}
