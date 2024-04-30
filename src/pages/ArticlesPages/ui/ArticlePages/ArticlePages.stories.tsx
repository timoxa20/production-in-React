import type {Meta, StoryObj} from '@storybook/react';
import ArticlePages from './ArticlePages';

const meta = {
    title: 'shared /ArticlePages',
    component: ArticlePages,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof ArticlePages>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};