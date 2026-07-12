import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';

const meta = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['editorial', 'demo', 'team'],
    },
    as: {
      control: 'select',
      options: ['div', 'article', 'section'],
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Editorial: Story = {
  args: {
    variant: 'editorial',
    children: 'This is an editorial card content. It features custom borders and padding.',
    style: { width: '300px' },
  },
};

export const Demo: Story = {
  args: {
    variant: 'demo',
    children: 'This is a demo sandbox layout card content.',
    style: { width: '300px' },
  },
};

export const Team: Story = {
  args: {
    variant: 'team',
    children: 'This is a team card content.',
    style: { width: '300px' },
  },
};
