import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import Card from '../Card';

describe('Card component', () => {
  test('renders children correctly', () => {
    const { getByText } = render(<Card>Card content</Card>);
    expect(getByText('Card content')).toBeInTheDocument();
  });

  test('applies editorial class by default', () => {
    const { container } = render(<Card>Default Card</Card>);
    expect(container.firstChild).toHaveClass(/editorial/);
  });

  test('applies specified variant and HTML tag', () => {
    const { container } = render(<Card variant="demo" as="article">Demo Article Card</Card>);
    expect(container.querySelector('article')).toBeInTheDocument();
    expect(container.firstChild).toHaveClass(/demo/);
  });
});
