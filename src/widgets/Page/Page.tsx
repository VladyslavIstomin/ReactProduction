import cls from './Page.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo, MutableRefObject, ReactNode, UIEvent, useRef } from 'react';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useLocation } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getScrollPosition, scrollPositionActions } from 'features/ScrollPosition';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle';

interface PageProps {
    className?: string;
    children: ReactNode;
    onScrollCallback?: () => void;
}

export const Page = memo(({ className, children, onScrollCallback }: PageProps) => {
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const targetRef = useRef() as MutableRefObject<HTMLDivElement>;
    const { pathname } = useLocation();
    const dispatch = useAppDispatch();
    const scroll = useSelector(getScrollPosition);

    useInfiniteScroll({
        callback: onScrollCallback,
        wrapperRef,
        targetRef
    });

    const onScrollHandler = useThrottle((e: UIEvent<HTMLElement>) => {
        const position = e.currentTarget.scrollTop;
        dispatch(scrollPositionActions.setScrollPosition({
            path: pathname,
            position
        }));
    }, 500);

    useInitialEffect(() => {
        const position = scroll[pathname];
        wrapperRef.current.scrollTop = position;
    });

    return (
        <section
            className={classNames(cls.Page, {}, [className])}
            ref={wrapperRef}
            onScroll={onScrollHandler}
        >
            {children}
            <div ref={targetRef}/>
        </section>
    );
});