import type { Meta, StoryObj } from '@storybook/react';
import { NotificationList } from './NotificationList';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const notifications = {
    title: 'Уведомление 1',
    description: 'Произошло какое-то событие',
    userId: '1',
};

const meta = {
    title: 'entities/Notification/NotificationList',
    component: NotificationList,
    parameters: {
        mockData: [
            {
                url: `${__API__}/notifications`,
                method: 'GET',
                status: 200,
                response: [
                    { ...notifications, id: '1' },
                    { ...notifications, id: '2' },
                    { ...notifications, id: '3' },
                ],
            },
        ],
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
    decorators: [StoreDecorator({})],
} satisfies Meta<typeof NotificationList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
