import type {Preview} from "@storybook/react";
import {StyleDecorator} from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import React from "react";
import {RouteDecorator} from "shared/config/storybook/RouteDecorator/RouteDecorator";

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
        StyleDecorator,
        ThemeDecorator(Theme.NORMAL),
        RouteDecorator
    ],
};




export default preview;

