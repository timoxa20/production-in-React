import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';
import { action } from '@storybook/addon-actions';

const meta = {
    title: 'shared /Tabs',
    component: Tabs,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        tabs: [
            {
                value: 'tab1',
                content: 'tab1',
            },
            {
                value: 'tab2',
                content: 'tab2',
            },
            {
                value: 'tab3',
                content: 'tab3',
            },
        ],
        value: 'tab4',
        onTabsClick: action('onTabClick'),
    },
};
