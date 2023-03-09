import cls from './Select.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ChangeEvent, memo, useMemo } from 'react';

export interface SelectOptionsList {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    selectValue?: string;
    options?: SelectOptionsList[];
    onChange?: (value: string) => void;
    readonly?: boolean;
}

export const Select = memo((props: SelectProps) => {
    const {
        className,
        label,
        options,
        selectValue,
        onChange,
        readonly
    } = props;
    const { t } = useTranslation();

    const optionsList = useMemo(() => {
        return options?.map(opt => (
            <option
                value={opt.value}
                className={cls.option}
                key={opt.value}
            >
                {opt.content}
            </option>
        ));
    }, [options]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(cls.SelectWrapper, {}, [className])}>
            {label && (
                <span className={cls.label}>{label}</span>
            )}
            <select
                className={cls.select}
                value={selectValue}
                onChange={onChangeHandler}
                disabled={readonly}
            >
                {optionsList}
            </select>
        </div>
    );
});