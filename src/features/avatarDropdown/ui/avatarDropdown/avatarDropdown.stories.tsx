import type {Meta, StoryObj} from '@storybook/react';
import {AvatarDropdown} from './avatarDropdown';
import {StoreDecorator} from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
    title: 'features /AvatarDropdown',
    component: AvatarDropdown,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {},
    decorators: [StoreDecorator({})]
} satisfies Meta<typeof AvatarDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};