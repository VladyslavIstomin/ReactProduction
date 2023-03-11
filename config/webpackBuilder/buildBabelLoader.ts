import { BuildOptions } from './types/config';

export const buildBabelLoader = ({ isDev }: BuildOptions) => {
    return {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: [
                    '@babel/preset-env',
                    [isDev && require.resolve('react-refresh/babel')].filter(Boolean)
                ]
            }
        }
    };
};