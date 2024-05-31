import type { Meta, StoryObj } from '@storybook/react';
import { UiDesignedSwitcher } from './UiDesignedSwitcher';

const meta = {
    title: 'features /UiDesignedSwitcher ',
    component: UiDesignedSwitcher,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof UiDesignedSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
