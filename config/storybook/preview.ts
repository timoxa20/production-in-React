import type {Preview} from "@storybook/react";
import {StyleDecorator as SD} from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator";
import {ThemeDecorator} from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "../../src/app/providers/ThemeProvider";
import {RouteDecorator} from "../../src/shared/config/storybook/RouteDecorator/RouteDecorator";

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        SD,
        ThemeDecorator(Theme.NORMAL),
        RouteDecorator,
    ],
};


export default preview;

