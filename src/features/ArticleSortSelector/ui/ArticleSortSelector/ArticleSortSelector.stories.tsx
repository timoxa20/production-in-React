import type { Meta, StoryObj } from '@storybook/react';
import { ArticleSortSelector } from './ArticleSortSelector';
import { action } from '@storybook/addon-actions';
import { ArticleSortField } from '@/entities/Article';

const meta = {
    title: 'shared /ArticleSortSelector',
    component: ArticleSortSelector,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof ArticleSortSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        sort: ArticleSortField.TITLE,
        order: 'asc',
        onChangeSort: action('saas'),
        onChangeOrder: action('asd'),
    },
};
