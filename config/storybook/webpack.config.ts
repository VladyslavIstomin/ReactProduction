import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import { BuildPaths } from '../webpackBuilder/types/config';
import path from 'path';
import { buildCssLoader } from '../webpackBuilder/buildCssLoader';

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
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify(''),
        __PROJECT__: JSON.stringify('storybook')
    }));

    return config;
};