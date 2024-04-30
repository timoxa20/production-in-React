import type {Meta, StoryObj} from '@storybook/react';
import {ProfileCard} from "./ProfileCard";
import {Country} from "../../../Country";
import {Currency} from "../../../Currency";
import StoryIcon from '../../../../shared/assets/storybook.jpg'

const meta = {
    title: 'entities /ProfileCard',
    component: ProfileCard,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        data: {
            username: 'admin',
            age: 22,
            country: Country.Ukraine,
            lastname: 'Timofeev',
            first: 'Artem',
            city: 'SADAS',
            currency: Currency.EURO,
            avatar: StoryIcon
        }
    },
};

export const Loading: Story = {
    args: {
        isLoading: true
    },
};

export const Error: Story = {
    args: {
        error: 'error'
    },
};




