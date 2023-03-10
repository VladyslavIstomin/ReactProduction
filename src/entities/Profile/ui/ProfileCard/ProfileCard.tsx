import cls from './ProfileCard.module.scss';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Profile } from '../../model/type/ProfileScheme';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    isLoading?: boolean;
    readonly?: boolean;
    onChangeFirstName?: (value: string) => void;
    onChangeLastName?: (value: string) => void;
    onChangeCity?: (value: string) => void;
    onChangeAge?: (value: string) => void;
    onChangeUsername?: (value: string) => void;
    onChangeAvatar?: (value: string) => void;
    onChangeCurrency?: (value: Currency) => void;
    onChangeCountry?: (value: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        data,
        className,
        error,
        isLoading,
        readonly,
        onChangeAge,
        onChangeCity,
        onChangeFirstName,
        onChangeLastName,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry
    } = props;
    const { t } = useTranslation('profile');
    
    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, { [cls.isLoading]: true }, [className])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    title={t('There is an error')}
                    text={t('Try to refresh')}
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    const mods: Mods = {
        [cls.edit]: !readonly
    };

    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            <div className={cls.content}>
                {
                    data?.avatar && (
                        <div className={cls.avatarWrapper}>
                            <Avatar
                                src={data.avatar}
                                size={150}
                            />
                        </div>
                    )
                }
                <div>
                    <Input
                        className={cls.input}
                        value={data?.first}
                        label={t('Your name')}
                        readonly={readonly}
                        onChangeCallback={onChangeFirstName}
                    />
                </div>
                <div>
                    <Input
                        className={cls.input}
                        value={data?.lastname}
                        label={t('Your last name')}
                        readonly={readonly}
                        onChangeCallback={onChangeLastName}
                    />
                </div>
                <div>
                    <Input
                        className={cls.input}
                        value={data?.city}
                        label={t('City')}
                        readonly={readonly}
                        onChangeCallback={onChangeCity}
                    />
                </div>
                <div>
                    <Input
                        className={cls.input}
                        value={data?.age}
                        label={t('Your age')}
                        readonly={readonly}
                        type="number"
                        min="1"
                        onChangeCallback={onChangeAge}
                    />
                </div>
                <div>
                    <Input
                        className={cls.input}
                        value={data?.username}
                        label={t('Enter your username')}
                        readonly={readonly}
                        onChangeCallback={onChangeUsername}
                    />
                </div>
                <div>
                    <Input
                        className={cls.input}
                        value={data?.avatar}
                        label={t('Enter avatar url')}
                        readonly={readonly}
                        onChangeCallback={onChangeAvatar}
                    />
                </div>
                <div>
                    <CurrencySelect
                        value={data?.currency}
                        className={cls.input}
                        onChange={onChangeCurrency}
                        readonly={readonly}
                    />
                </div>
                <div>
                    <CountrySelect
                        value={data?.currency}
                        className={cls.input}
                        onChange={onChangeCountry}
                        readonly={readonly}
                    />
                </div>
            </div>
        </div>
    );
};