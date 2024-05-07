import type {Meta, StoryObj} from '@storybook/react';
import ArticleEditPage from './ArticleEditPage';

const meta = {
    title: 'shared /ArticleEditPage',
    component: ArticleEditPage,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof ArticleEditPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};