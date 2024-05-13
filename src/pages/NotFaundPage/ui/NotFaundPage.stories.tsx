import type {Meta, StoryObj} from '@storybook/react';
import {ThemeDecorator} from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {NotFoundPage} from "./NotFaundPage";
import {StoreDecorator} from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import {Theme} from "@/shared/const/theme";

const meta = {
    title: 'pages /NotFoundPage ',
    component: NotFoundPage,
    parameters: {
    },
    tags: ['autodocs'],
    argTypes: {
    },
    args: {
    },
} satisfies Meta<typeof NotFoundPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
    decorators: [ StoreDecorator({})]
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})]
};






