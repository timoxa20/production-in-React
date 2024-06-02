import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown as DropdownDeprecated } from './Dropdown';
import { Button } from '../../redesigned/Button/Button';
import { action } from '@storybook/addon-actions';

const metaDeprecated = {
    title: 'shared/deprecated /DropdownDeprecated',
    component: DropdownDeprecated,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof DropdownDeprecated>;

export default metaDeprecated;
type Story = StoryObj<typeof metaDeprecated>;

export const Normal: Story = {
    args: {
        trigger: <Button>OPEN</Button>,
        items: [
            {
                content: '4343q4',
                onClick: action('adasdsa'),
            },
            {
                content: '4343q4',
                onClick: action('adasdsa'),
            },
            {
                content: '4343q4',
                onClick: action('adasdsa'),
            },
        ],
    },
};
