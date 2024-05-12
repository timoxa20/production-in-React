import type {Meta, StoryObj} from '@storybook/react';
import ArticleRating from './ArticleRating';

const meta = {
    title: 'shared /ArticleRating',
    component: ArticleRating,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof ArticleRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {articleId: '123'},
};