import type { Meta, StoryObj } from '@storybook/react';
import { Overlay } from './Overlay';

const meta = {
    title: 'shared/redesigned /Overlay',
    component: Overlay,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof Overlay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
