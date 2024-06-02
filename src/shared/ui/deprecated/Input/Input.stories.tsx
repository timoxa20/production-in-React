import type { Meta, StoryObj } from '@storybook/react';
import { Input as InputDeprecated } from './Input';

const metaDeprecated = {
    title: 'shared/deprecated /InputDeprecated',
    component: InputDeprecated,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof InputDeprecated>;

export default metaDeprecated;
type Story = StoryObj<typeof metaDeprecated>;

export const Primary: Story = {
    args: {
        placeholder: 'Type text',
        value: '12334',
    },
};
