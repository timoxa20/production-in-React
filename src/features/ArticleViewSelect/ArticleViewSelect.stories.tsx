import type {Meta, StoryObj} from '@storybook/react';
import {ArticleViewSelect} from './ArticleViewSelect';

const meta = {
    title: 'features/ArticleViewSelect',
    component: ArticleViewSelect,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof ArticleViewSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};