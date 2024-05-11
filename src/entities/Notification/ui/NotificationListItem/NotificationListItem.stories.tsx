import type {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';
import {NotificationListItem} from './NotificationListItem';

const meta = {
    title: 'shared /NotificationListItem',
    component: NotificationListItem,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof NotificationListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};