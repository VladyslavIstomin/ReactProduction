import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule {
    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? MiniCssExtractPlugin.loader : "style-loader",
            {
                loader: "css-loader",
                options: {
                    modules: {
                        localIdentName: isDev ? '[path][name]__[local]--[contenthash:4]' : '[contenthash:8]',
                        auto: /\.module(s)?\.\w+$/i
                    }
                }
            },
            "sass-loader",
        ],
    }

    return {
        rules: [
            tsLoader,
            scssLoader,
        ],
    }
}