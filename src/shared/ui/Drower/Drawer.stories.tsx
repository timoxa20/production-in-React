import type {Meta, StoryObj} from '@storybook/react';
import {Drawer} from './Drawer';
import {action} from "@storybook/addon-actions";

const meta = {
    title: 'shared /Drawer',
    component: Drawer,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {},
    decorators: [
        // Вызов action с описанием действия
        (StoryComponent, { args }) => {
            action('isOpen changed')(args.isOpen);
            return <StoryComponent {...args} />;
        },
    ],
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {children: 'vsdvsdsdfsdf'},
};