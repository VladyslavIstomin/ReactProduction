import cls from './ProfileHeader.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getProfileData, getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserData } from 'entities/User';

interface ProfileHeaderProps {
    className?: string
}

export const ProfileHeader = ({ className }: ProfileHeaderProps) => {
    const { t } = useTranslation();
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();
    const authData = useSelector(getUserData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadyOnly(false));
    }, [dispatch]);

    const onCancel = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfileHeader, {}, [className])}>
            <Text title={t('Profile')} />
            {canEdit && (
                <>
                    {readonly ? (
                        <Button
                            theme={ButtonTheme.OUTLINE}
                            className={cls.button}
                            onClick={onEdit}
                        >
                            {t('Edit')}
                        </Button>
                    ) : (
                        <div>
                            <Button
                                theme={ButtonTheme.OUTLINE_RED}
                                className={cls.button}
                                onClick={onCancel}
                            >
                                {t('Cancel')}
                            </Button>
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                className={cls.button}
                                onClick={onSave}
                            >
                                {t('Save')}
                            </Button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};