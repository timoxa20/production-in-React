import type {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';
import {Flex} from './Flex';

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
                <div>first</div>
                <div>first</div>
                <div>first</div>
                <div>first</div>
            </>
        )
    },
};

export const DirectionColumn: Story = {
    args: {
        direction: 'colum',
        children: (
            <>
                <div>first</div>
                <div>first</div>
                <div>first</div>
                <div>first</div>
            </>
        )
    },
};

export const DirectionColumn16: Story = {
    args: {
        gap: '16',
        direction: 'colum',
        children: (
            <>
                <div>first</div>
                <div>first</div>
                <div>first</div>
                <div>first</div>
            </>
        )
    },
};

export const RowGap4: Story = {
    args: {
        gap: '4',
        justify: 'center',
        children: (
            <>
                <div>first</div>
                <div>first</div>
                <div>first</div>
                <div>first</div>
            </>
        )
    },
};

export const RowGap8: Story = {
    args: {
        gap: '8',
        justify: 'center',
        children: (
            <>
                <div>first</div>
                <div>first</div>
                <div>first</div>
                <div>first</div>
            </>
        )
    },
};

export const RowGap16: Story = {
    args: {
        gap: '16',
        justify: 'center',
        children: (
            <>
                <div>first</div>
                <div>first</div>
                <div>first</div>
                <div>first</div>
            </>
        )
    },
};
