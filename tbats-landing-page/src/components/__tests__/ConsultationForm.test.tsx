import type React from 'react';
import { describe, test, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import ConsultationForm from '../ConsultationForm';

const mockSubmit = vi.fn();

vi.mock('react-router', () => ({
  useFetcher: () => ({
    Form: ({ children, ...props }: { children: React.ReactNode; [key: string]: unknown }) => (
      <form {...props} onSubmit={mockSubmit}>
        {children}
      </form>
    ),
    state: 'idle',
    data: null,
  }),
}));

describe('ConsultationForm', () => {
  beforeEach(() => {
    mockSubmit.mockClear();
  });

  test('renders all form fields', () => {
    render(<ConsultationForm />);

    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Budget Estimate')).toBeInTheDocument();
    expect(screen.getByLabelText('Project Description')).toBeInTheDocument();
  });

  test('renders the submit button', () => {
    render(<ConsultationForm />);

    expect(screen.getByRole('button', { name: /start a project/i })).toBeInTheDocument();
  });

  test('renders contact info section', () => {
    render(<ConsultationForm />);

    expect(screen.getByText("Let's Connect")).toBeInTheDocument();
    expect(screen.getByText(/hello@tbats\.dev/)).toBeInTheDocument();
  });

  test('has honeypot field for spam prevention', () => {
    const { container } = render(<ConsultationForm />);

    const honeypot = container.querySelector<HTMLInputElement>('input[name="bot_field"]');
    expect(honeypot).not.toBeNull();
    expect(honeypot).toHaveAttribute('type', 'text');
    expect(honeypot).toHaveAttribute('tabIndex', '-1');
    expect(honeypot).toHaveAttribute('autoComplete', 'off');
  });

  test('required fields have required attribute', () => {
    render(<ConsultationForm />);

    expect(screen.getByLabelText('Name')).toHaveAttribute('required');
    expect(screen.getByLabelText('Email')).toHaveAttribute('required');
    expect(screen.getByLabelText('Project Description')).toHaveAttribute('required');
  });

  test('email field has email type', () => {
    render(<ConsultationForm />);

    expect(screen.getByLabelText('Email')).toHaveAttribute('type', 'email');
  });

  test('renders budget options', () => {
    render(<ConsultationForm />);

    expect(screen.getByRole('option', { name: '₱20,000 (Starter)' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: '₱49,000 (Growth)' })).toBeInTheDocument();
  });
});
