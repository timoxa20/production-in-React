import type {Meta, StoryObj} from '@storybook/react';
import {ArticlePagesFilter} from './ArticlePagesFilter';

const meta = {
    title: 'shared /ArticlePagesFilter',
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
};