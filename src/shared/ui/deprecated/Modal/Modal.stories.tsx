import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';

const meta = {
    title: 'shared /Modal',
    component: Modal,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        isOpen: true,
        children: 'Text',
    },
};
