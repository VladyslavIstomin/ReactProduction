import cls from './Input.module.scss';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import React, { InputHTMLAttributes, memo } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    className?: string;
    onChangeCallback?: (value: string) => void;
    label?: string;
    readonly?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        onChangeCallback,
        type = 'text',
        label,
        readonly,
        ...otherProps
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChangeCallback?.(e.target.value);
    };

    const mods: Mods = {
        [cls.readonly]: readonly
    };

    return (
        <label className={classNames('', { ...mods }, [])}>
            {label}
            <input
                type={type}
                onChange={onChangeHandler}
                className={className}
                readOnly={readonly}
                {...otherProps}
            />
        </label>
    );
});