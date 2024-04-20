import type {Meta, StoryObj} from '@storybook/react';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Sidebar} from "./Sidebar";
import {Theme} from "app/providers/ThemeProvider";

const meta = {
    title: 'widget /Sidebar',
    component: Sidebar,
    parameters: {
    },
    tags: ['autodocs'],
    argTypes: {
    },
    args: {},
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)]
};




