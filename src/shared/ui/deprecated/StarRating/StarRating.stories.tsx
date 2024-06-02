import type { Meta, StoryObj } from '@storybook/react';
import { StarRating as StarRatingDeprecated } from './StarRating';
import { action } from '@storybook/addon-actions';

const metaDeprecated = {
    title: 'shared/deprecated /StarRatingDeprecated',
    component: StarRatingDeprecated,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof StarRatingDeprecated>;

export default metaDeprecated;
type Story = StoryObj<typeof metaDeprecated>;

export const Normal: Story = {
    args: { size: 30, onSelect: action('afafdasf') },
};
