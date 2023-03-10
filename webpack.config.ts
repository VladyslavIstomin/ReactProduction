import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import path from 'path';
import { BuildEnv } from './config/build/types/config';

export default (env: BuildEnv) => {
    const paths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src')
    };
    const mode = env.mode || 'development';
    const isDev = mode === 'development';
    const PORT = env.port || 5000;
    const apiUrl = env.apiUrl || 'http://localhost:8000';
    const project = 'frontend';

    const config = buildWebpackConfig({
        paths,
        mode,
        isDev,
        apiUrl,
        port: PORT,
        project
    });

    return config;
};