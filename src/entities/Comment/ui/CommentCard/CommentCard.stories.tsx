import type {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';
import {CommentCard} from './CommentCard';

const meta = {
    title: 'shared /CommentCard',
    component: CommentCard,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof CommentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};