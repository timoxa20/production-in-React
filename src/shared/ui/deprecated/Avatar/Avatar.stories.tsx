import type { Meta, StoryObj } from '@storybook/react';
import { Avatar as AvatarDeprecated } from './Avatar';
import StoryIcon from '../../../assets/storybook.jpg';

const metaDeprecated = {
    title: 'shared/deprecated /AvatarDeprecated ',
    component: AvatarDeprecated,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof AvatarDeprecated>;

export default metaDeprecated;
type Story = StoryObj<typeof metaDeprecated>;

export const PRIMARY: Story = {
    args: {
        size: '150',
        src: StoryIcon,
        alt: 'dasda',
    },
};

export const Small: Story = {
    args: {
        size: '50',
        src: StoryIcon,
        alt: 'dasda',
    },
};
