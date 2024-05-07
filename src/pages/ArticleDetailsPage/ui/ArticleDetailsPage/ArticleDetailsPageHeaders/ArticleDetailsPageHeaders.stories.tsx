import type {Meta, StoryObj} from '@storybook/react';
import {ArticleDetailsPageHeaders} from './ArticleDetailsPageHeaders';

const meta = {
    title: 'shared /ArticleDetailsPageHeaders',
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
};