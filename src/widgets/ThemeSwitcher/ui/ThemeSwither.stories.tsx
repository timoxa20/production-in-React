import type {Meta, StoryObj} from '@storybook/react';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {ThemeSwitcher} from "./ThemeSwitcher";

const meta = {
    title: 'widget /ThemeSwitcher ',
    component: ThemeSwitcher,
    parameters: {
    },
    tags: ['autodocs'],
    argTypes: {
    },
    args: {
    },
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)]
};






