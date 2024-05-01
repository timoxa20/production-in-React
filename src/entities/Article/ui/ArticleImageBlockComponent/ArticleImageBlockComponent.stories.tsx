import type {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';
import {ArticleImageBlockComponent} from './ArticleImageBlockComponent';

const meta = {
    title: 'shared /ArticleImageBlockComponent',
    component: ArticleImageBlockComponent,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof ArticleImageBlockComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};