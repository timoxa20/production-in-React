import {BuildPaths} from "../build/types/config";
import {buildCssLoaders} from "../build/loaders/buildCssLoaders";
import webpack, {DefinePlugin} from "webpack";
import path from "path";

export default ({config}: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
        buildLocales: '',
        locales: ''
    };
    config!.resolve!.modules!.push(paths.src);
    config!.resolve!.extensions!.push('.ts', '.tsx');

    if(config!.module!.rules) {
        config!.module!.rules = config!.module!.rules.map((rule) => {
            if(rule && typeof rule !== 'string' &&  '...') {
                if (/svg/.test(rule.test as string)) {
                    return {...rule, exclude: /\.svg$/i};
                }

                return rule;
            }

        });
    }

    config!.module!.rules!.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    })
    config!.module!.rules!.push(buildCssLoaders(true))
    config!.resolve!.alias = {
        ...config!.resolve!.alias,
        '@': paths.src,
    };


    config!.plugins!.push(new DefinePlugin({
        __IS_DEV_: JSON.stringify(true),
        __API__: JSON.stringify('https://testapi.ru'),
        __PROJECT__: JSON.stringify('storybook')
    }))


    return config
}