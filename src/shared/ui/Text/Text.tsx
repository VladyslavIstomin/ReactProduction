import cls from './Text.module.scss';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { memo } from 'react';

export enum TextTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
    ERROR = 'error'
}

export enum TextAlign {
    LEFT = 'left',
    CENTER = 'center',
    RIGHT = 'right'
}

export enum TextSize {
    S = 'small',
    M = 'medium',
    L = 'large'
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme
    align?: TextAlign
    size?: TextSize
}

type HeaderTag = 'h1' | 'h2' | 'h3';

const mapHeadingSize: Record<TextSize, HeaderTag> = {
    [TextSize.S]: 'h3',
    [TextSize.M]: 'h2',
    [TextSize.L]: 'h1',
};

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M
    } = props;

    const HeadingTag = mapHeadingSize[size];

    const mods: Mods = {
        [cls[theme]]: true,
        [cls[align]]: true,
        [cls[size]]: true,
    };

    return (
        <div className={classNames(cls.Text, { ...mods }, [className])}>
            {title && <HeadingTag className={cls.title}>{title}</HeadingTag>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});