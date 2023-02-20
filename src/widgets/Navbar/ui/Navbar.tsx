import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import { useCallback, useState } from 'react';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const toggleHandler = useCallback(() => {
        setIsOpen(prev => !prev);
    }, []);

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Button onClick={toggleHandler} theme={ButtonTheme.CLEAR_INVERTED}>
                {t('Sign in')}
            </Button>
            <Modal isOpen={isOpen} onClose={toggleHandler}/>
        </header>
    );
};