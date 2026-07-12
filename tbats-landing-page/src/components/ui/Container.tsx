import type { HTMLAttributes } from 'react';
import styles from './Container.module.css';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  as?: 'div' | 'header' | 'footer' | 'main';
}

export default function Container({ as = 'div', className, children, ...rest }: ContainerProps) {
  const Tag = as;
  const classes = [styles.container, className].filter(Boolean).join(' ');
  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  );
}
