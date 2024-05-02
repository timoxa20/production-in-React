import type {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';
import {CommentList} from './CommentList';

const meta = {
    title: 'shared /CommentList',
    component: CommentList,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};