import type {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';
import {ArticleCodeBlockComponent} from './ArticleCodeBlockComponent';

const meta = {
    title: 'shared /ArticleCodeBlockComponent',
    component: ArticleCodeBlockComponent,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof ArticleCodeBlockComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};