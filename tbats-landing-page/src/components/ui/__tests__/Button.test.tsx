import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Button from '../Button';

describe('Button component', () => {
  test('renders children correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  test('applies primary variant by default', () => {
    const { container } = render(<Button>Primary</Button>);
    expect(container.firstChild).toHaveClass(/primary/);
  });

  test('applies size classes correctly', () => {
    const { container } = render(<Button size="lg">Large Button</Button>);
    expect(container.firstChild).toHaveClass(/lg/);
  });

  test('renders as a custom element (e.g. anchor link)', () => {
    render(<Button as="a" href="/test">Link Button</Button>);
    expect(screen.getByRole('link', { name: /link button/i })).toHaveAttribute('href', '/test');
  });
});
