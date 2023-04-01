import { useCallback, useRef } from 'react';

export const useThrottle = (callback: (...args: any) => void, delay: number) => {
    const ref = useRef(true);
    return useCallback((...args) => {
        if (ref.current) {
            callback(...args);
            ref.current = false;

            setTimeout(() => {
                ref.current = true;
            }, delay);
        }
    }, [callback, delay]);
};