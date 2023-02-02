import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import webpack from "webpack";
import {BuildOptions} from "./types/config";

export function buildWebpackConfig({paths, mode}: BuildOptions): webpack.Configuration {
    return {
        mode,
        entry: paths.entry,
        output: {
            path: paths.output,
            filename: '[name].[contenthash].js',
            clean: true
        },
        plugins: buildPlugins(paths),
        module: buildLoaders(),
        resolve: buildResolvers()
    }
}