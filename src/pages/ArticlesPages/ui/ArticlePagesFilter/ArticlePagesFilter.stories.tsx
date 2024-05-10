import type {Meta, StoryObj} from '@storybook/react';
import {ArticlePagesFilter} from './ArticlePagesFilter';
import {StoreDecorator} from "shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
    title: 'pages/ArticlePagesFilter',
    component: ArticlePagesFilter,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof ArticlePagesFilter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
    decorators: [StoreDecorator({})]
};