import type {Meta, StoryObj} from '@storybook/react';
import {AvatarDropdown} from './avatarDropdown';

const meta = {
    title: 'features /AvatarDropdown',
    component: AvatarDropdown,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof AvatarDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};