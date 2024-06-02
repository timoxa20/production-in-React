import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import StoryIcon from '../../../assets/storybook.jpg';

const meta = {
    title: 'shared/redesigned /Avatar ',
    component: Avatar,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PRIMARY: Story = {
    args: {
        size: '150',
        src: StoryIcon,
    },
};

export const Small: Story = {
    args: {
        size: '50',
        src: StoryIcon,
    },
};
