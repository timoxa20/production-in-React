import type {Meta, StoryObj} from '@storybook/react';
import {ArticleDetailsComments} from './ArticleDetailsComments';
import {StoreDecorator} from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
    title: 'pages /ArticleDetailsComments',
    component: ArticleDetailsComments,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {},
    decorators: [StoreDecorator({})]
} satisfies Meta<typeof ArticleDetailsComments>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {id: 'sdsa'},
};