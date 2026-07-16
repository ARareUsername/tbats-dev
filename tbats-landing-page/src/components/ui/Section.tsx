import { forwardRef } from 'react';
import type { HTMLAttributes } from 'react';
import styles from './Section.module.css';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id?: string;
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, children, ...rest }, ref) => {
    const classes = [styles.section, className].filter(Boolean).join(' ');
    return (
      <section ref={ref} className={classes} {...rest}>
        {children}
      </section>
    );
  },
);

Section.displayName = 'Section';

export default Section;
