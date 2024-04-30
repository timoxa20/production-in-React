import webpack from 'webpack'
import {BuildOptions} from "./types/config";
import {buildCssLoaders} from "./loaders/buildCssLoaders";

export function buildLoader(options: BuildOptions): webpack.RuleSetRule[] {
    const {isDev} = options


    const cssLoaders = buildCssLoaders(isDev);

    const typescripLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const  svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }


    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }
    return [
        typescripLoader,
        cssLoaders,
        svgLoader,
        fileLoader,
    ]
}