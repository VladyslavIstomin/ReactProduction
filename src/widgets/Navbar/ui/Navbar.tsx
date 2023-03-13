import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { memo, useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData, userActions } from 'entities/User';

interface NavbarProps {
    className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t, i18n } = useTranslation();
    const { authUser } = useSelector(getUserData);
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
                <Button onClick={onLogout} theme={ButtonTheme.CLEAR_INVERTED}>
                    {t('Sign out')}
                </Button>
            </header>
        );
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Button onClick={onOpenHandler} theme={ButtonTheme.CLEAR_INVERTED}>
                {t('Sign in')}
            </Button>
            {isOpen && <LoginModal isOpen={isOpen} onClose={onCloseHandler}/>}
        </header>
    );
});