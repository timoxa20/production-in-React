import type {Meta, StoryObj} from '@storybook/react';
import {Select} from "./Select";

const meta = {
    title: 'shared /Select ',
    component: Select,
    parameters: {
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PRIMARY: Story = {
    args: {
        label: 'Укажите значение',
        options: [
            {value: '13123', content: 'Первый пункт'},
            {value: '1315', content: 'Второй пункт'},
            {value: '2313', content: 'Третий пункт'}
        ]
    },
};

export const Small: Story = {
    args: {},
};





