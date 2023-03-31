import cls from './Page.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo, MutableRefObject, ReactNode, useRef } from 'react';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';

interface PageProps {
    className?: string;
    children: ReactNode;
    onScrollHandler?: () => void;
}

export const Page = memo(({ className, children, onScrollHandler }: PageProps) => {
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const targetRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({
        callback: onScrollHandler,
        wrapperRef,
        targetRef
    });

    return (
        <section
            className={classNames(cls.Page, {}, [className])}
            ref={wrapperRef}
        >
            {children}
            <div ref={targetRef}/>
        </section>
    );
});