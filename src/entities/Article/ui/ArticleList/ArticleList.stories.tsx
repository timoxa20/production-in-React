import type { Meta, StoryObj } from '@storybook/react';
import { ArticleList } from './ArticleList';
import { ArticleView } from '../../model/types/article';

const meta = {
    title: 'entities/article/ArticleList',
    component: ArticleList,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof ArticleList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const isLoadingBig: Story = {
    args: {
        articles: [],
        isLoading: true,
        view: ArticleView.BIG,
    },
};

export const isLoadingSmall: Story = {
    args: {
        articles: [],
        isLoading: true,
        view: ArticleView.SMALL,
    },
};
