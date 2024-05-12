import type {Meta, StoryObj} from '@storybook/react';
import {StarRating} from './StarRating';
import {action} from "@storybook/addon-actions";

const meta = {
    title: 'shared /StarRating',
    component: StarRating,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof StarRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {size: 30, onSelect: action('afafdasf')},
};