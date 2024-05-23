import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { AppLinks, AppLinkTheme } from './AppLinks';

import { Theme } from '@/shared/const/theme';

const meta = {
    title: 'shared /AppLinks ',
    component: AppLinks,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {
        to: '/',
        children: 'TEXT',
        theme: AppLinkTheme.PRIMARY,
    },
} satisfies Meta<typeof AppLinks>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PRIMARY: Story = {
    args: {
        children: 'TEXT',
        theme: AppLinkTheme.PRIMARY,
    },
};

export const SECONDARY: Story = {
    args: {
        children: 'TEXT',
        theme: AppLinkTheme.PRIMARY,
    },
};

export const PRIMARYDark: Story = {
    args: {
        children: 'TEXT',
        theme: AppLinkTheme.PRIMARY,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const SECONDARYLight: Story = {
    args: {
        children: 'TEXT',
        theme: AppLinkTheme.PRIMARY,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
