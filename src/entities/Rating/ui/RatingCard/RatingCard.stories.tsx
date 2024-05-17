import type { Meta, StoryObj } from '@storybook/react';
import { RatingCard } from './RatingCard';
import { action } from '@storybook/addon-actions';

const meta = {
    title: 'shared /RatingCard',
    component: RatingCard,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof RatingCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        title: 'Ваш отзыв',
        hasFeedback: true,
        feedbackTitle: 'afafaaf',
        onCancel: action('5'),
        onAccept: action('3'),
    },
};
