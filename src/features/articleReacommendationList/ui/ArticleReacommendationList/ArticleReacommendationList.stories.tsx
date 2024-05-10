import type {Meta, StoryObj} from '@storybook/react';
import {ArticleReacommendationList} from './ArticleReacommendationList';

const meta = {
    title: 'features /ArticleReacommendationList',
    component: ArticleReacommendationList,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof ArticleReacommendationList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};