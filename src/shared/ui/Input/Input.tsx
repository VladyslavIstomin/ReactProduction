import cls from './Input.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import React, { InputHTMLAttributes, memo } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    className?: string;
    onChangeCallback?: (value: string) => void;
    label?: string
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        onChangeCallback,
        type = 'text',
        label
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChangeCallback(e.target.value);
    };

    return (
        <label className={classNames(cls.Input, {}, [])}>
            {label}
            <input
                type={type}
                onChange={onChangeHandler}
                {...props}
            />
        </label>
    );
});