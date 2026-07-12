import type {
  InputHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
  ReactNode,
} from 'react';
import styles from './Input.module.css';

interface BaseProps {
  label: string;
  id: string;
  hint?: string;
}

type InputProps = BaseProps & InputHTMLAttributes<HTMLInputElement>;
type SelectProps = BaseProps & SelectHTMLAttributes<HTMLSelectElement> & { children: ReactNode };
type TextareaProps = BaseProps & TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Input({ label, id, hint, className, ...rest }: InputProps) {
  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input id={id} className={[styles.input, className].filter(Boolean).join(' ')} {...rest} />
      {hint && <span className={styles.hint}>{hint}</span>}
    </div>
  );
}

export function Select({ label, id, hint, className, children, ...rest }: SelectProps) {
  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <select id={id} className={[styles.input, className].filter(Boolean).join(' ')} {...rest}>
        {children}
      </select>
      {hint && <span className={styles.hint}>{hint}</span>}
    </div>
  );
}

export function Textarea({ label, id, hint, className, ...rest }: TextareaProps) {
  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <textarea id={id} className={[styles.input, className].filter(Boolean).join(' ')} {...rest} />
      {hint && <span className={styles.hint}>{hint}</span>}
    </div>
  );
}
