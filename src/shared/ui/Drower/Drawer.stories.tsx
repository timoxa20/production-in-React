import type {Meta, StoryObj} from '@storybook/react';
import {Drawer} from './Drawer';

const meta = {
    title: 'shared /Drawer',
    component: Drawer,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};