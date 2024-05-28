import type { Meta, StoryObj } from '@storybook/react';
import { StickyContentLayout } from './StickyContentLayout';
import { Text } from '@/shared/ui/redesigned/Text';

const meta = {
    title: 'shared /StickyContentLayout',
    component: StickyContentLayout,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof StickyContentLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: { content: <Text text={'asdasd'} /> },
};
