import type { Meta, StoryObj } from '@storybook/react';
import { MainLayouts } from './MainLayouts';
import { Sidebar } from '@/widgets/Sidebar';
import { Nawbar } from '@/widgets/nawbar';
import { Page } from '@/widgets/Page';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
    title: 'shared /MainLayouts',
    component: MainLayouts,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {},
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
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
