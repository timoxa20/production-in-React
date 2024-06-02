import type { Meta, StoryObj } from '@storybook/react';
import { Select as SelectDeprecated } from './Select';

const metaDeprecated = {
    title: 'shared/deprecated /SelectDeprecated ',
    component: SelectDeprecated,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof SelectDeprecated>;

export default metaDeprecated;
type Story = StoryObj<typeof metaDeprecated>;

export const PRIMARY: Story = {
    args: {
        label: 'Укажите значение',
        options: [
            { value: '13123', content: 'Первый пункт' },
            { value: '1315', content: 'Второй пункт' },
            { value: '2313', content: 'Третий пункт' },
        ],
    },
};

export const Small: Story = {
    args: {},
};
