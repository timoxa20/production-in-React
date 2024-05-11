import type {Meta, StoryObj} from '@storybook/react';
import {ThemeDecorator} from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "@/app/providers/ThemeProvider";
import ProfilePage from "./ProfilePage";
import {StoreDecorator} from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import {Country} from "@/entities/Country";
import {Currency} from "@/entities/Currency";

const meta = {
    title: 'pages /ProfilePage ',
    component: ProfilePage,
    parameters: {
    },
    tags: ['autodocs'],
    argTypes: {
    },
    args: {
    },
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            profile: {
                form: {
                    username: 'admin',
                    age: 22,
                    country: Country.Ukraine,
                    lastname: 'Timofeev',
                    first: 'Artem',
                    city: 'SADAS',
                    currency: Currency.EURO,
                }
            }
        })
    ]
};

export const Dark: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            profile: {
                form: {
                    username: 'admin',
                    age: 22,
                    country: Country.Ukraine,
                    lastname: 'Timofeev',
                    first: 'Artem',
                    city: 'SADAS',
                    currency: Currency.EURO,
                }
            }
        })
    ]
};






