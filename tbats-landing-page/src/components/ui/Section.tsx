import type { HTMLAttributes } from 'react';
import styles from './Section.module.css';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id?: string;
}

export default function Section({ className, children, ...rest }: SectionProps) {
  const classes = [styles.section, className].filter(Boolean).join(' ');
  return (
    <section className={classes} {...rest}>
      {children}
    </section>
  );
}
