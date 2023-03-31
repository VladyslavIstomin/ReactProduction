import { MutableRefObject, useEffect, useRef } from 'react';

interface useInfiniteScrollProps {
    callback?: () => void;
    wrapperRef: MutableRefObject<HTMLDivElement>;
    targetRef: MutableRefObject<HTMLDivElement>;
}

export const useInfiniteScroll = ({ callback, wrapperRef, targetRef }: useInfiniteScrollProps) => {
    useEffect(() => {
        const wrapperElement = wrapperRef.current;
        const targetElement = targetRef.current;

        if (callback) {
            const options = {
                root: wrapperElement,
                rootMargin: '0px',
                threshold: 1.0,
            };

            const observer = new IntersectionObserver((entries) => {
                const [entry] = entries;
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);
            observer.observe(targetElement);

            return () => {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(targetElement);
            };
        }
    }, [callback, targetRef, wrapperRef]);
};