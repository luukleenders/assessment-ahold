import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './Dropdown';
import { SecondaryMenu } from '../SecondaryMenu';

const meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  decorators: [
    (Story) => (
      <div className='container mx-auto flex h-[300px] justify-center py-8'>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    label: 'Luuk Leenders',
    children: <SecondaryMenu />,
  },
};
