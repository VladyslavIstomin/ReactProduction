import cls from './ProfileCard.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/Profile/model/selector/getProfileData/getProfileData';
import { getProfileError } from 'entities/Profile/model/selector/getProfileError/getProfileError';
import { getProfileIsLoading } from 'entities/Profile/model/selector/getProfileIsLoading/getProfileIsLoading';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

interface ProfileCardProps {
    className?: string
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const data = useSelector(getProfileData);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('Profile')} />
                <Button theme={ButtonTheme.OUTLINE} className={cls.editBtn}>
                    {t('Edit')}
                </Button>
            </div>
            <div className={cls.content}>
                <div>
                    <Input
                        className={cls.input}
                        value={data?.first}
                        label={t('Your name')}
                    />
                </div>
                <div>
                    <Input
                        className={cls.input}
                        value={data?.lastname}
                        label={t('Your last name')}
                    />
                </div>
            </div>
        </div>
    );
};