import type { Meta, StoryObj } from '@storybook/react';
import { Card as CardDeprecated } from './Card';
import { Text as TextDeprecated } from '../Text/Text';

const metaDeprecated = {
    title: 'shared/deprecated /CardDeprecated',
    component: CardDeprecated,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof CardDeprecated>;

export default metaDeprecated;
type Story = StoryObj<typeof metaDeprecated>;

export const Normal: Story = {
    args: {
        children: (
            <TextDeprecated
                title={'World'}
                text={'Hello'}
            />
        ),
    },
};
