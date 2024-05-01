import type {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';
import {ArticleTextBlockComponent} from './ArticleTextBlockComponent';

const meta = {
    title: 'shared /ArticleTextBlockComponent',
    component: ArticleTextBlockComponent,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof ArticleTextBlockComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};