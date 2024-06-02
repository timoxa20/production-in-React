import type { Meta, StoryObj } from '@storybook/react';
import { UiDesignedSwitcher } from './UiDesignedSwitcher';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
    title: 'features /UiDesignedSwitcher ',
    component: UiDesignedSwitcher,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {},
    decorators: [StoreDecorator({})],
} satisfies Meta<typeof UiDesignedSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
