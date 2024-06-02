import type { Meta, StoryObj } from '@storybook/react';
import { ListBox as ListBoxDeprecated } from './ListBox';
import { action } from '@storybook/addon-actions';

const metaDeprecated = {
    title: 'shared/deprecated /ListBoxDeprecated',
    component: ListBoxDeprecated,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof ListBoxDeprecated>;

export default metaDeprecated;
type Story = StoryObj<typeof metaDeprecated>;

export const Normal: Story = {
    args: {
        items: [],
        value: '41341',
        defaultValue: '432432',
        onChange: action('sadasda'),
    },
};
