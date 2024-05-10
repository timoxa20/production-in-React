import type {Meta, StoryObj} from '@storybook/react';
import {ArticleDetailsPageHeaders} from './ArticleDetailsPageHeaders';
import {StoreDecorator} from "shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
    title: 'pages /ArticleDetailsPageHeaders',
    component: ArticleDetailsPageHeaders,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof ArticleDetailsPageHeaders>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
    decorators: [StoreDecorator({})]
};