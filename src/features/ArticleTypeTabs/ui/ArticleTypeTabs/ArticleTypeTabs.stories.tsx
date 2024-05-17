import type { Meta, StoryObj } from '@storybook/react';
import { ArticleTypeTabs } from './ArticleTypeTabs';
import { action } from '@storybook/addon-actions';
import { ArticleType } from '@/entities/Article';

const meta = {
    title: 'entities/Article/ArticleTypeTabs',
    component: ArticleTypeTabs,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof ArticleTypeTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        value: ArticleType.IT,
        onChangeType: action('dasd'),
    },
};
