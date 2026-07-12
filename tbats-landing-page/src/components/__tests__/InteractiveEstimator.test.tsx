import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import InteractiveEstimator from '../InteractiveEstimator';

describe('InteractiveEstimator', () => {
  test('renders section heading', () => {
    render(<InteractiveEstimator />);

    expect(screen.getByText('Transparent')).toBeInTheDocument();
    expect(screen.getByText(/Pricing/)).toBeInTheDocument();
  });

  test('renders all pricing tiers', () => {
    render(<InteractiveEstimator />);

    expect(screen.getByText('Starter')).toBeInTheDocument();
    expect(screen.getByText('Growth')).toBeInTheDocument();
    expect(screen.getByText('Custom')).toBeInTheDocument();
  });

  test('renders tier prices', () => {
    render(<InteractiveEstimator />);

    expect(screen.getByText('₱20,000')).toBeInTheDocument();
    expect(screen.getByText('₱49,000')).toBeInTheDocument();
    expect(screen.getByText("Let's scope together")).toBeInTheDocument();
  });

  test('renders most popular badge on highlighted tier', () => {
    render(<InteractiveEstimator />);

    const badgeElements = screen.getAllByText('Most Popular');
    expect(badgeElements.length).toBeGreaterThanOrEqual(1);
  });

  test('renders care plan section', () => {
    render(<InteractiveEstimator />);

    expect(screen.getByText('Care Plan')).toBeInTheDocument();
    expect(screen.getByText('₱2,500/mo')).toBeInTheDocument();
  });

  test('renders Start a Project buttons for each tier', () => {
    render(<InteractiveEstimator />);

    const buttons = screen.getAllByRole('link', { name: /start a project/i });
    expect(buttons.length).toBeGreaterThanOrEqual(3);
  });

  test('renders payment terms', () => {
    render(<InteractiveEstimator />);

    expect(screen.getByText(/50% to start, 50% on launch/)).toBeInTheDocument();
  });

  test('renders subtitle', () => {
    render(<InteractiveEstimator />);

    expect(screen.getByText(/No hidden fees/)).toBeInTheDocument();
  });
});
