import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { memo, useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData, userActions } from 'entities/User';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePaths } from 'shared/config/routerConfig/routerConfig';

interface NavbarProps {
    className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t, i18n } = useTranslation();
    const authUser = useSelector(getUserData);
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);

    const onCloseHandler = useCallback(() => {
        setIsOpen(false);
    }, []);

    const onOpenHandler = useCallback(() => {
        setIsOpen(true);
    }, []);
    
    const onLogout = () => {
        dispatch(userActions.logout());
    };

    if (authUser) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <AppLink
                    className={cls.appName}
                    to={RoutePaths.main}
                    theme={AppLinkTheme.SECONDARY}
                >
                    {t('React Production')}
                </AppLink>
                <AppLink
                    to={RoutePaths.article_create}
                    theme={AppLinkTheme.SECONDARY}
                >
                    {t('Create new Article')}
                </AppLink>
                <Button onClick={onLogout} theme={ButtonTheme.CLEAR_INVERTED} className={cls.btn}>
                    {t('Sign out')}
                </Button>
            </header>
        );
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <AppLink
                className={cls.appName}
                to={RoutePaths.main}
                theme={AppLinkTheme.SECONDARY}
            >
                {t('React Production')}
            </AppLink>
            <Button onClick={onOpenHandler} theme={ButtonTheme.CLEAR_INVERTED} className={cls.btn}>
                {t('Sign in')}
            </Button>
            {isOpen && <LoginModal isOpen={isOpen} onClose={onCloseHandler}/>}
        </header>
    );
});