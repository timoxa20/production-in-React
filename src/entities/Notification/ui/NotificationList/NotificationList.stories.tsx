import type {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';
import {NotificationList} from './NotificationList';

const meta = {
    title: 'shared /NotificationList',
    component: NotificationList,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof NotificationList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};