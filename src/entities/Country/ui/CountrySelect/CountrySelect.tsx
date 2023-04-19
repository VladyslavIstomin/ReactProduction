import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { Country } from '../../model/types/country';
import { memo, useCallback } from 'react';
import { SelectBox } from 'shared/ui/SelectBox/SelectBox';

interface CountrySelectProps {
    className?: string;
    value?: string;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    { value: Country.RUSSIA, content: Country.RUSSIA },
    { value: Country.BELARUS, content: Country.BELARUS },
    { value: Country.ARMENIA, content: Country.ARMENIA },
    { value: Country.KAZAKHSTAN, content: Country.KAZAKHSTAN },
    { value: Country.UKRAINE, content: Country.UKRAINE },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
    const {
        className,
        value,
        onChange,
        readonly
    } = props;
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <SelectBox
            items={options}
            onChange={onChangeHandler}
            value={value}
            readonly={readonly}
            className={classNames('', {}, [className])}
            defaultValue={t('Enter a country')}
            label={t('Enter a country')}
            direction={'top'}
        />
    );
});