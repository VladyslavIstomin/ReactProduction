import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { Currency } from '../../model/types/currency';
import { memo, useCallback } from 'react';
import { SelectBox } from 'shared/ui/SelectBox/SelectBox';

interface CurrencySelectProps {
    className?: string;
    value?: string;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.USD, content: Currency.USD },
    { value: Currency.EUR, content: Currency.EUR }
];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const {
        className,
        value,
        onChange,
        readonly
    } = props;
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <SelectBox
            items={options}
            onChange={onChangeHandler}
            value={value}
            readonly={readonly}
            className={classNames('', {}, [className])}
            defaultValue={t('Enter a currency')}
            label={t('Enter a currency')}
            direction={'top'}
        />
    );
});