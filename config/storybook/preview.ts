import type { Preview } from '@storybook/react';
import { StyleDecorator as SD } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouteDecorator } from '../../src/shared/config/storybook/RouteDecorator/RouteDecorator';
import { Theme } from '@/shared/const/theme';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        themes: {
            default: 'light',
            list: [
                { name: 'light', class: Theme.NORMAL, color: '#ffffff' },
                { name: 'dark', class: Theme.DARK, color: '#000000' },
                { name: 'orange', class: Theme.ORANGE, color: '#f84c0c' },
            ],
        },
    },

    decorators: [SD, ThemeDecorator(Theme.NORMAL), RouteDecorator],
};

export default preview;
