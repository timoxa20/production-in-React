import type { Meta, StoryObj } from '@storybook/react';
import { Popover as PopoverDeprecated } from './Popover';

const metaDeprecated = {
    title: 'shared/deprecated /PopoverDeprecated',
    component: PopoverDeprecated,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof PopoverDeprecated>;

export default metaDeprecated;
type Story = StoryObj<typeof metaDeprecated>;

export const Normal: Story = {
    args: { children: 'afadsdgas', trigger: 'fsdfasdfs' },
};
