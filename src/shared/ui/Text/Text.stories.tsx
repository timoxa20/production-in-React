import type {Meta, StoryObj} from '@storybook/react';
import {Text, TextTheme} from "shared/ui/Text/Text";
import {Theme} from "app/providers/ThemeProvider";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";

const meta = {
    title: 'shared /Text',
    component: Text,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {
    },
    args: {

    },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        title: 'Title lorem',
        text: 'Text describe'
    },
};

export const Error: Story = {
    args: {
        title: 'Title lorem',
        text: 'Text describe',
        theme: TextTheme.ERROR
    },
};

export const onlyTitle: Story = {
    args: {
        title: 'Title lorem',
    },
};

export const onlyText: Story = {
    args: {
        text: 'Text describe'
    },
};

export const PrimaryDark: Story = {
    args: {
        title: 'Title lorem',
        text: 'Text describe'
    },
    decorators:[ThemeDecorator(Theme.DARK)]
};

export const onlyTitleDark: Story = {
    args: {
        title: 'Title lorem',
    },
    decorators:[ThemeDecorator(Theme.DARK)]
};

export const onlyTextDark: Story = {
    args: {
        text: 'Text describe'
    },
    decorators:[ThemeDecorator(Theme.DARK)]
};


