import type {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';
import {avatarDropdown} from './avatarDropdown';

const meta = {
    title: 'shared /avatarDropdown',
    component: avatarDropdown,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof avatarDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};