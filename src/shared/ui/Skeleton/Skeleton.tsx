import cls from './Skeleton.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { CSSProperties, memo } from 'react';

interface SkeletonProps {
    className?: string;
    width?: number | string;
    height?: number;
    radius?: string;
}

export const Skeleton = memo(({ className, radius, width, height }: SkeletonProps) => {
    const style: CSSProperties = {
        width,
        height,
        borderRadius: radius
    };
    
    return (
        <div
            className={classNames(cls.Skeleton, {}, [className])}
            style={style}
        />
    );
});