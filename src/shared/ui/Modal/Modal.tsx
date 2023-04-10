import cls from './Modal.module.scss';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { Portal } from '../Portal/Portal';

interface ModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void
}

export const Modal: FC<ModalProps> = (props) => {
    const {
        className,
        children,
        isOpen,
        onClose
    } = props;
    const [scaled, setScaled] = useState(false);

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.scaled]: scaled
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
            setTimeout(() => {
                setScaled(true);
            }, 100);
        } else {
            setScaled(false);
        }
    }, [isOpen]);

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