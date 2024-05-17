import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './Dropdown';
import { Button } from '../Button/Button';
import { action } from '@storybook/addon-actions';

const meta = {
    title: 'shared /Dropdown',
    component: Dropdown,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        trigger: <Button>OPEN</Button>,
        items: [
            {
                content: '4343q4',
                onClick: action('adasdsa'),
            },
            {
                content: '4343q4',
                onClick: action('adasdsa'),
            },
            {
                content: '4343q4',
                onClick: action('adasdsa'),
            },
        ],
    },
};
