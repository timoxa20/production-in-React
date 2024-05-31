import type { Meta, StoryObj } from '@storybook/react';
import SitingsPage from './SitingsPage';

const meta = {
    title: 'pages /ProfilePage ',
    component: SitingsPage,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof SitingsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
