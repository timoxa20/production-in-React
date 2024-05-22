import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoaders } from './loaders/buildCssLoaders';
import { buildBabelLoader } from './loaders/buildBabelLoder';

export function buildLoader(options: BuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options;

    const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false });
    const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTsx: true });

    const cssLoaders = buildCssLoaders(isDev);

    // const typescripLoader = {
    //     test: /\.tsx?$/,
    //     use: 'ts-loader',
    //     exclude: /node_modules/,
    // };

    const svgLoader = {
        test: /\.svg$/,
        use: [
            {
                loader: '@svgr/webpack',
                options: {
                    icon: true,
                    svgoConfig: {
                        plugins: [
                            {
                                name: 'convertColor',
                                param: {
                                    currentColor: true,
                                },
                            },
                        ],
                    },
                },
            },
        ],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };
    return [
        codeBabelLoader,
        tsxCodeBabelLoader,
        cssLoaders,
        svgLoader,
        fileLoader,
        // typescripLoader
    ];
}
