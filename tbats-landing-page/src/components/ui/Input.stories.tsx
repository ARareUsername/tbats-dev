import type { Meta, StoryObj } from '@storybook/react';
import { Input, Select, Textarea } from './Input';

const meta = {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;

export const TextInput: StoryObj<typeof Input> = {
  render: () => (
    <Input
      label="Full Name"
      id="name"
      hint="Enter your legal full name"
      placeholder="John Doe"
      style={{ width: '300px' }}
    />
  ),
};

export const SelectInput: StoryObj<typeof Select> = {
  render: () => (
    <Select label="Budget Estimate" id="budget" style={{ width: '300px' }}>
      <option value="1">₱20,000</option>
      <option value="2">₱49,000</option>
    </Select>
  ),
};

export const TextareaInput: StoryObj<typeof Textarea> = {
  render: () => (
    <Textarea
      label="Project Description"
      id="desc"
      hint="Provide detailed requirements"
      placeholder="Describe your project..."
      style={{ width: '300px' }}
    />
  ),
};
