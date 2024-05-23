import type { Meta, StoryObj } from '@storybook/react';
import { ListBox } from './ListBox';
import { action } from '@storybook/addon-actions';

const meta = {
    title: 'shared /ListBox',
    component: ListBox,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof ListBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        items: [],
        value: '41341',
        defaultValue: '432432',
        onChange: action('sadasda'),
    },
};
