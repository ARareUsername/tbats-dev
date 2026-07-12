import type { ElementType, ComponentPropsWithoutRef } from 'react';
import styles from './Button.module.css';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

type ButtonProps<T extends ElementType = 'button'> = {
  as?: T;
  variant?: Variant;
  size?: Size;
} & ComponentPropsWithoutRef<T>;

export default function Button<T extends ElementType = 'button'>({
  as,
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...rest
}: ButtonProps<T>) {
  const Tag = as || 'button';
  const classes = [styles.button, styles[variant], styles[size], className]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  );
}
