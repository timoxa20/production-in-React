import type {StorybookConfig} from "@storybook/react-webpack5";
const config: StorybookConfig = {
    stories: ["../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@storybook/addon-webpack5-compiler-swc",
        "@storybook/addon-onboarding",
        "@storybook/addon-links",
        {
            name: '@storybook/addon-essentials',
            options: {
                backgrounds: false,
            },
        },
        "@chromatic-com/storybook",
        "@storybook/addon-interactions",
        "@storybook/addon-styling-webpack",
        'storybook-addon-mock',
        'storybook-addon-themes'
    ],
    framework: {
        name: "@storybook/react-webpack5",
        options: {},
    },
    swc: () => ({
        jsc: {
            transform: {
                react: {
                    runtime: 'automatic'
                }
            }
        }
    }),
    docs: {
        autodocs: "tag",
    },

};
export default config;
