import { useState } from 'react';

type hoverEventType = {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

type useHoverType = [boolean, hoverEventType];

export const useHover = (): useHoverType => {
    const [isHover, setIsHover] = useState(false);

    const onMouseEnter = () => {
        setIsHover(true);
    };

    const onMouseLeave = () => {
        setIsHover(false);
    };

    return [
        isHover,
        {
            onMouseEnter,
            onMouseLeave
        }
    ];
};