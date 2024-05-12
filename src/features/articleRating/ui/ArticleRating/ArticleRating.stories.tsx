import type {Meta, StoryObj} from '@storybook/react';
import ArticleRating from './ArticleRating';
import {StoreDecorator} from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
    title: 'features/ArticleRating',
    component: ArticleRating,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {},
    decorators: [StoreDecorator({})]
} satisfies Meta<typeof ArticleRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {articleId: '123'},
};