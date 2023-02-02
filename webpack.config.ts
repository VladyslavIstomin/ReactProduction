import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import path from "path";

const paths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html')
}
const mode = 'development';
const isDev = mode === 'development';

const config = buildWebpackConfig({
    paths,
    mode,
    isDev
});

export default config;