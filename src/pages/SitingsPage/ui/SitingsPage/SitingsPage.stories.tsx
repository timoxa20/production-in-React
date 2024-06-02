import type { Meta, StoryObj } from '@storybook/react';
import SitingsPage from './SitingsPage';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
    title: 'pages /SitingsPage ',
    component: SitingsPage,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {},
    decorators: [StoreDecorator({})],
} satisfies Meta<typeof SitingsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
