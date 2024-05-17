import type { StorybookConfig } from '@storybook/react-webpack5';
import { BuildPaths } from '../build/types/config';
import path from 'path';
import { buildCssLoaders } from '../build/loaders/buildCssLoaders';
import { DefinePlugin } from 'webpack';

const config: StorybookConfig = {
    stories: ['../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-webpack5-compiler-swc',
        '@storybook/addon-onboarding',
        '@storybook/addon-links',
        {
            name: '@storybook/addon-essentials',
            options: {
                backgrounds: false,
            },
        },
        '@chromatic-com/storybook',
        '@storybook/addon-interactions',
        '@storybook/addon-styling-webpack',
        'storybook-addon-mock',
        'storybook-addon-themes',
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    swc: () => ({
        jsc: {
            transform: {
                react: {
                    runtime: 'automatic',
                },
            },
        },
    }),
    docs: {
        autodocs: 'tag',
    },
    webpackFinal: async (config) => {
        const paths: BuildPaths = {
            build: '',
            html: '',
            entry: '',
            src: path.resolve(__dirname, '..', '..', 'src'),
            buildLocales: '',
            locales: '',
        };
        config!.resolve!.modules!.push(paths.src);
        config!.resolve!.extensions!.push('.ts', '.tsx');

        if (config!.module!.rules) {
            config!.module!.rules = config!.module!.rules.map((rule) => {
                if (rule && typeof rule !== 'string' && '...') {
                    if (/svg/.test(rule.test as string)) {
                        return { ...rule, exclude: /\.svg$/i };
                    }

                    return rule;
                }
            });
        }

        config!.module!.rules!.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });
        config!.module!.rules!.push(buildCssLoaders(true));
        config!.resolve!.alias = {
            ...config!.resolve!.alias,
            '@': paths.src,
        };

        config!.plugins!.push(
            new DefinePlugin({
                __IS_DEV_: JSON.stringify(true),
                __API__: JSON.stringify('https://testapi.ru'),
                __PROJECT__: JSON.stringify('storybook'),
            }),
        );

        return config;
    },
};
export default config;
