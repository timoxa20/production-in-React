import type { Meta, StoryObj } from '@storybook/react';
import { ArticleFilters } from './ArticleFilters';

const meta = {
    title: 'shared /ArticleFilters',
    component: ArticleFilters,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof ArticleFilters>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
