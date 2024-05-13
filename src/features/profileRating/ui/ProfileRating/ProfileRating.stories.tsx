import type {Meta, StoryObj} from '@storybook/react';
import {ProfileRating} from './ProfileRating';

const meta = {
    title: 'shared /ProfileRating',
    component: ProfileRating,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof ProfileRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};