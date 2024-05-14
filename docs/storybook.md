## Storybook

В проекте для каждого компонента описываются стори-кейсы.
Запросы на сервер мокаются с помощью storybook-addon-mock.

Файл со сторикейсами создает рядом с компонентом с расширением .stories.tsx

Запустить сторибук можно командой:
- `npm run storybook`

Подробнее о [Storybook](/docs/storybook.md)

Пример:

```typescript jsx
import type {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';
import {Button, ButtonSize, ThemeButton} from './Button';
import {ThemeDecorator} from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";

const meta = {
    title: 'shared /Button',
    component: Button,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {
    },
    args: {
        onClick: fn(),
        theme: ThemeButton.CLEAR
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Text'
    },
};
```
