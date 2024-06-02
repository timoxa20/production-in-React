import type { Meta, StoryObj } from '@storybook/react';
import { ArticleFilters } from './ArticleFilters';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { action } from '@storybook/addon-actions';

const meta = {
    title: 'widget /ArticleFilters',
    component: ArticleFilters,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof ArticleFilters>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        type: ArticleType.ALL,
        sort: ArticleSortField.TITLE,
        order: 'asc',
        search: 'php',
        onChangeOrder: action('onChangeOrder'),
        onChangeSort: action('onChangeSort'),
        onChangeType: action('onChangeType'),
        onChangeSearch: action('onChangeSearch'),
    },
};
