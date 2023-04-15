import { Fragment, ReactNode, useState } from 'react';
import { Listbox } from '@headlessui/react';
import cls from './SelectBox.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from '../Button/Button';

export interface ListItems {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

interface SelectBoxProps {
    items: ListItems[];
    className?: string;
    value?: string;
    defaultValue?: string;
    onChange: (value: string) => void;
}

export function SelectBox(props: SelectBoxProps) {
    const { items, className, value, defaultValue, onChange } = props;

    return (
        <Listbox
            as={'div'}
            className={classNames(cls.SelectBox, {}, [className])}
            value={value}
            onChange={onChange}
        >
            <Listbox.Button className={cls.button}>
                <Button>
                    {value ?? defaultValue}
                </Button>
            </Listbox.Button>
            <Listbox.Options className={cls.options}>
                {items.map((item) => (
                    <Listbox.Option
                        key={item.value}
                        value={item.value}
                        disabled={item.disabled}
                        as={Fragment}
                    >
                        {({ active, selected }) => (
                            <li
                                className={classNames(cls.option, {
                                    [cls.active]: active,
                                    [cls.disabled]: item.disabled
                                })}
                            >
                                {selected && '!!!'}
                                {item.value}
                            </li>
                        )}
                    </Listbox.Option>
                ))}
            </Listbox.Options>
        </Listbox>
    );
}