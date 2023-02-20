import cls from './Modal.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import React, { FC, useCallback, useEffect } from 'react';
import { Portal } from 'shared/ui/Portal/Portal';

interface ModalProps {
    className?: string;
    isOpen: boolean;
    onClose?: () => void
}

export const Modal: FC<ModalProps> = (props) => {
    const {
        className,
        children,
        isOpen,
        onClose
    } = props;

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen
    };

    const closeHandler = () => {
        if (onClose) {
            onClose();
        }
    };

    const clickHandler = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const keyDownHandler = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            onClose();
        }
    }, [onClose]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', keyDownHandler);
        }

        return () => {
            window.removeEventListener('keydown', keyDownHandler);
        };
    }, [keyDownHandler, isOpen]);

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={clickHandler}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};