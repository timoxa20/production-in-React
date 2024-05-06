import type {Meta, StoryObj} from '@storybook/react';
import ArticlePages from './ArticlePages';
import {StoreDecorator} from "shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
    title: 'pages /ArticlePages',
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
    decorators: [StoreDecorator({})]
};