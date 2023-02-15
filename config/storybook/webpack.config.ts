import webpack, { RuleSetRule } from 'webpack';
import { BuildPaths } from '../build/types/config';
import path from 'path';
import { buildCssLoader } from '../build/buildCssLoader';

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        src: path.resolve(__dirname, '..', '..', 'src')
    };
    config.resolve.modules.push(paths.src);
    config.module.rules.push(buildCssLoader(true));

    const fileLoaderRule = config.module.rules.find(
        (rule: RuleSetRule) => rule.test && /svg/.test(rule.test as string)
    );
    // @ts-ignore
    fileLoaderRule.exclude = /\.svg$/;

    config.module.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
    });

    return config;
};