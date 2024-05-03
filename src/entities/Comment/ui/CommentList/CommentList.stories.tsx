import type {Meta, StoryObj} from '@storybook/react';
import {CommentList} from './CommentList';

const meta = {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        comments: [
            {
                id: '1',
                text: 'hello word',
                user: {id: '1', username: 'Artem'}
            },
            {
                id: '2',
                text: 'hello work',
                user: {id: '1', username: 'Vasa'}
            }
        ]
    },
};


export const Loading: Story = {
    args: {
        isLoading: true
    },
};