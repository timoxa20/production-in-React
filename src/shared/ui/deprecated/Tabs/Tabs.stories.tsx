import type { Meta, StoryObj } from '@storybook/react';
import { Tabs as TabsDeprecated } from './Tabs';
import { action } from '@storybook/addon-actions';

const metaDeprecated = {
    title: 'shared/deprecated /TabsDeprecated',
    component: TabsDeprecated,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof TabsDeprecated>;

export default metaDeprecated;
type Story = StoryObj<typeof metaDeprecated>;

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
