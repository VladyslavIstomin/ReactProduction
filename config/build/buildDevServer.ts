import {BuildOptions} from "./types/config";
import type {Configuration as WebServerConfiguration} from "webpack-dev-server";

export function BuildDevServer({port}: BuildOptions): WebServerConfiguration {
    return {
        port: port,
        open: true,
        historyApiFallback: true,
        hot: true
    }
}