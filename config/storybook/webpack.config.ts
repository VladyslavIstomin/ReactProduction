import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import { BuildPaths } from '../build/types/config';
import path from 'path';
import { buildCssLoader } from '../build/buildCssLoader';

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        src: path.resolve(__dirname, '..', '..', 'src')
    };
    config.resolve?.modules?.unshift(paths.src);
    config.module?.rules?.push(buildCssLoader(true));

    const rules = config.module?.rules as RuleSetRule[];
    config.module!.rules = rules.map((rule) => (
        /svg/.test(rule.test as string)
            ? { ...rule, exclude: /\.svg$/i }
            : rule
    ));

    config.module?.rules?.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
    });

    config.plugins?.push(new DefinePlugin({
        __IS_DEV__: true,
        __API__: true,
    }));

    return config;
};