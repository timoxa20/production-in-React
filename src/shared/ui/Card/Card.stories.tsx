import type {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';
import {Card} from './Card';
import {Text} from "shared/ui/Text/Text";

const meta = {
    title: 'shared /Card',
    component: Card,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        children: <Text title={'World'} text={'Hello'} />
    },
};