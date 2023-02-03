import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import path from "path";
import {BuildEnv} from "./config/build/types/config";

export default (env: BuildEnv) => {
    const paths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html')
    }
    const mode = env.mode || 'development';
    const isDev = mode === 'development';
    const PORT = env.port || 5000;

    const config = buildWebpackConfig({
        paths,
        mode,
        isDev,
        port: PORT
    });

    return config;
};