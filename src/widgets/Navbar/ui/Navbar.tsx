import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const onCloseHandler = useCallback(() => {
        setIsOpen(false);
    }, []);

    const onOpenHandler = useCallback(() => {
        setIsOpen(true);
    }, []);

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Button onClick={onOpenHandler} theme={ButtonTheme.CLEAR_INVERTED}>
                {t('Sign in')}
            </Button>
            <LoginModal isOpen={isOpen} onClose={onCloseHandler}/>
        </header>
    );
};