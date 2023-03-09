import cls from './Avatar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { CSSProperties, memo, useMemo } from 'react';

interface AvatarProps {
    className?: string;
    size?: number;
    alt?: string;
    src?: string;
}

export const Avatar = memo((props: AvatarProps) => {
    const {
        className,
        size = 100,
        alt = '',
        src
    } = props;

    const { t } = useTranslation();
    const style = useMemo<CSSProperties>(() => ({
        width: size,
        height: size
    }), [size]);

    return (
        <img
            className={classNames(cls.Avatar, {}, [className])}
            style={style}
            alt={alt}
            src={src}
        />
    );
});