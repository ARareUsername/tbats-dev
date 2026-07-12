import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Avatar from '../Avatar';
import Badge from '../Badge';
import Container from '../Container';
import { Input, Select, Textarea } from '../Input';
import Section from '../Section';
import SkipLink from '../SkipLink';

describe('UI Primitives', () => {
  describe('Avatar', () => {
    test('renders initials and applies size classes', () => {
      const { container } = render(<Avatar initials="JD" size="lg" />);
      expect(screen.getByText('JD')).toBeInTheDocument();
      expect(container.firstChild).toHaveClass(/lg/);
    });
  });

  describe('Badge', () => {
    test('renders children and applies variant classes', () => {
      const { container } = render(<Badge variant="accent">New</Badge>);
      expect(screen.getByText('New')).toBeInTheDocument();
      expect(container.firstChild).toHaveClass(/accent/);
    });
  });

  describe('Container', () => {
    test('renders with correct tag and classes', () => {
      const { container } = render(<Container as="footer">Footer Container</Container>);
      expect(container.querySelector('footer')).toBeInTheDocument();
      expect(screen.getByText('Footer Container')).toBeInTheDocument();
    });
  });

  describe('Input primitives', () => {
    test('Input renders with label and input tag', () => {
      render(<Input label="Username" id="username" hint="Enter username" />);
      expect(screen.getByLabelText('Username')).toBeInTheDocument();
      expect(screen.getByText('Enter username')).toBeInTheDocument();
    });

    test('Select renders with options', () => {
      render(
        <Select label="Options" id="options">
          <option value="1">Option 1</option>
        </Select>
      );
      expect(screen.getByLabelText('Options')).toBeInTheDocument();
      expect(screen.getByRole('combobox')).toBeInTheDocument();
    });

    test('Textarea renders with textarea tag', () => {
      render(<Textarea label="Bio" id="bio" />);
      expect(screen.getByLabelText('Bio')).toBeInTheDocument();
      expect(screen.getByRole('textbox')).toBeInTheDocument();
    });
  });

  describe('Section', () => {
    test('renders section tag with classes', () => {
      const { container } = render(<Section id="about">Section Content</Section>);
      expect(container.querySelector('section')).toBeInTheDocument();
      expect(screen.getByText('Section Content')).toBeInTheDocument();
    });
  });

  describe('SkipLink', () => {
    test('renders anchor link with default href', () => {
      render(<SkipLink />);
      const link = screen.getByRole('link', { name: /skip to main content/i });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', '#main');
    });
  });
});
