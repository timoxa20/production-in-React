import type {Meta, StoryObj} from '@storybook/react';
import ArticleRating from './ArticleRating';
import {StoreDecorator} from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
    title: 'features/ArticleRating',
    component: ArticleRating,
    parameters: {
        mockData: [
            {
                url: `${__API__}/article-rating?userId=1&articleId=1`,
                method: 'GET',
                status: 200,
                response: [
                    {rate: 4}
                ],
            },
        ],
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
    decorators: [StoreDecorator({
        user: {
            authData: {id: '1', username: 'Artem'}
        }
    })]
} satisfies Meta<typeof ArticleRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {articleId: '123'},
};