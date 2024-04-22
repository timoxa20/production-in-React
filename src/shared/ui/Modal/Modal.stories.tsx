import type {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';
import {Modal} from "shared/ui/Modal/Modal";

const meta = {
    title: 'shared /Modal',
    component: Modal,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {
    },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at atque dicta doloremque eos ex harum incidunt possimus tempora veritatis. Adipisci assumenda aut blanditiis iusto nemo odit similique? Recusandae, tenetur.'
    },
};







