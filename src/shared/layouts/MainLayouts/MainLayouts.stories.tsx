import type { Meta, StoryObj } from '@storybook/react';
import { MainLayouts } from './MainLayouts';
import { Sidebar } from '@/widgets/Sidebar';
import { Nawbar } from '@/widgets/nawbar';
import { Page } from '@/widgets/Page';

const meta = {
    title: 'shared /MainLayouts',
    component: MainLayouts,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof MainLayouts>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        sidebar: <Sidebar />,
        header: <Nawbar />,
        content: <Page>{'123456'}</Page>,
    },
};
