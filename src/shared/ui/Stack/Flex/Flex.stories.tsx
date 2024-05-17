import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from './Flex';
import { t } from 'i18next';

const meta = {
    title: 'shared /Flex',
    component: Flex,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DirectionRow: Story = {
    args: {
        children: (
            <>
                <div>{t('first')}</div>
                <div>{t('first')}</div>
                <div>{t('first')}</div>
                <div>{t('first')}</div>
            </>
        ),
    },
};

export const DirectionColumn: Story = {
    args: {
        direction: 'colum',
        children: (
            <>
                <div>{t('first')}</div>
                <div>{t('first')}</div>
                <div>{t('first')}</div>
                <div>{t('first')}</div>
            </>
        ),
    },
};

export const DirectionColumn16: Story = {
    args: {
        gap: '16',
        direction: 'colum',
        children: (
            <>
                <div>{t('first')}</div>
                <div>{t('first')}</div>
                <div>{t('first')}</div>
                <div>{t('first')}</div>
            </>
        ),
    },
};

export const RowGap4: Story = {
    args: {
        gap: '4',
        justify: 'center',
        children: (
            <>
                <div>{t('first')}</div>
                <div>{t('first')}</div>
                <div>{t('first')}</div>
                <div>{t('first')}</div>
            </>
        ),
    },
};

export const RowGap8: Story = {
    args: {
        gap: '8',
        justify: 'center',
        children: (
            <>
                <div>{t('first')}</div>
                <div>{t('first')}</div>
                <div>{t('first')}</div>
                <div>{t('first')}</div>
            </>
        ),
    },
};

export const RowGap16: Story = {
    args: {
        gap: '16',
        justify: 'center',
        children: (
            <>
                <div>{t('first')}</div>
                <div>{t('first')}</div>
                <div>{t('first')}</div>
                <div>{t('first')}</div>
            </>
        ),
    },
};
