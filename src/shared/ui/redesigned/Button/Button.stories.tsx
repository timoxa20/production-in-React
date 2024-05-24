import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from './Button';

const meta = {
    title: 'shared /Button',
    component: Button,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {
        onClick: fn(),
        variant: 'clear',
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Text',
    },
};

export const Clear: Story = {
    args: {
        children: 'Text',
        variant: 'clear',
    },
};

export const Outline: Story = {
    args: {
        children: 'Text',
        variant: 'outline',
    },
};

export const SquareSizeL: Story = {
    args: {
        children: '>',
        square: true,
        size: 'size_l',
    },
};

export const SquareSizeM: Story = {
    args: {
        children: '>',
        square: true,
        size: 'size_m',
    },
};

export const SquareSizeXL: Story = {
    args: {
        children: '>',
        square: true,
        size: 'size_xl',
    },
};
