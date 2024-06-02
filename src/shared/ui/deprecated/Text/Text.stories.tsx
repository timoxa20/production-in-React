import type { Meta, StoryObj } from '@storybook/react';
import { Text as TextDeprecated, TextSize, TextTheme } from './Text';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

const metaDeprecated = {
    title: 'shared/deprecated /TextDeprecated',
    component: TextDeprecated,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof TextDeprecated>;

export default metaDeprecated;
type Story = StoryObj<typeof metaDeprecated>;

export const Primary: Story = {
    args: {
        title: 'Title lorem',
        text: 'Text describe',
    },
};

export const Error: Story = {
    args: {
        title: 'Title lorem',
        text: 'Text describe',
        theme: TextTheme.ERROR,
    },
};

export const onlyText: Story = {
    args: {
        text: 'Text describe',
    },
};

export const PrimaryDark: Story = {
    args: {
        title: 'Title lorem',
        text: 'Text describe',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const onlyTitleDark: Story = {
    args: {
        title: 'Title lorem',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const onlyTextDark: Story = {
    args: {
        text: 'Text describe',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const TextM: Story = {
    args: {
        title: 'Text lorem ipsum',
        text: 'Text describe',
        size: TextSize.M,
    },
};

export const TextL: Story = {
    args: {
        title: 'Text lorem ipsum',
        text: 'Text describe',
        size: TextSize.L,
    },
};

export const TextS: Story = {
    args: {
        title: 'Text lorem ipsum',
        text: 'Text describe',
        size: TextSize.S,
    },
};
