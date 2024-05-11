import type {Meta, StoryObj} from '@storybook/react';
import {NotificationListItem} from './NotificationListItem';

const meta = {
    title: 'entities/Notification/NotificationListItem',
    component: NotificationListItem,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof NotificationListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        item:
            {
                title: 'adasfa',
                href: 'title.czx',
                description: 'asfafafasfafa',
                id: '1'
            },

    },
};