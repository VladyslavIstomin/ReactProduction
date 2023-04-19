import { Fragment, ReactNode, useState } from 'react';
import { Listbox } from '@headlessui/react';
import cls from './SelectBox.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from '../Button/Button';
import { HStack } from '../Stack';

export interface ListItems {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

type optionsDirection = 'top' | 'bottom';

interface SelectBoxProps {
    items: ListItems[];
    className?: string;
    value?: string;
    defaultValue?: string;
    onChange: (value: string) => void;
    readonly?: boolean;
    direction?: optionsDirection;
    label?: string
}

export function SelectBox(props: SelectBoxProps) {
    const { items, className, value, defaultValue, onChange, readonly, direction = 'bottom', label } = props;

    return (
        <HStack gap={4} align={'center'}>
            {label && <span>{`${label} >`}</span>}
            <Listbox
                disabled={readonly}
                as={'div'}
                className={classNames(cls.SelectBox, {}, [className])}
                value={value}
                onChange={onChange}
            >
                <Listbox.Button as={'div'} className={cls.button}>
                    <Button disabled={readonly}>
                        {value ?? defaultValue}
                    </Button>
                </Listbox.Button>
                <Listbox.Options className={classNames(cls.options, {}, [cls[direction]])}>
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
        </HStack>
    );
}