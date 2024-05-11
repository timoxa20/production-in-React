import type {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';
import {NotificationButton} from './NotificationButton';

const meta = {
    title: 'shared /NotificationButton',
    component: NotificationButton,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof NotificationButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};