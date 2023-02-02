import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {BuildPaths} from "./types/config";


export function buildPlugins({html}: BuildPaths): webpack.WebpackPluginInstance[] {
    return [
        new HTMLWebpackPlugin({
            template: html,
        }),
        new webpack.ProgressPlugin()
    ]
}