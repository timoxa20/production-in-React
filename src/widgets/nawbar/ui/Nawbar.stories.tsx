import type {Meta, StoryObj} from '@storybook/react';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Nawbar} from "./Nawbar";
import {Theme} from "app/providers/ThemeProvider";

const meta = {
    title: 'widget /Nawbar ',
    component: Nawbar,
    parameters: {
    },
    tags: ['autodocs'],
    argTypes: {
    },
    args: {},
} satisfies Meta<typeof Nawbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)]
};




