import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { AppLinks as AppLinksDeprecated, AppLinkTheme } from './AppLinks';

import { Theme } from '@/shared/const/theme';

const metaDeprecated = {
    title: 'shared/deprecated /AppLinksDeprecated ',
    component: AppLinksDeprecated,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {
        to: '/',
        children: 'TEXT',
        theme: AppLinkTheme.PRIMARY,
    },
} satisfies Meta<typeof AppLinksDeprecated>;

export default metaDeprecated;
type Story = StoryObj<typeof metaDeprecated>;

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
