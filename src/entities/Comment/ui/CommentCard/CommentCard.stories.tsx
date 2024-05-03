import type {Meta, StoryObj} from '@storybook/react';
import {CommentCard} from './CommentCard';

const meta = {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof CommentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        comment: {
            id: '1',
            text: 'hello word',
            user: {id: '1', username: 'Artem'}
        }
    },
};

export const Loading: Story = {
    args: {
        isLoading: true
    },
};