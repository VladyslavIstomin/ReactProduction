import cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t, i18n } = useTranslation();
    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <AppLink theme={AppLinkTheme.SECONDARY} className={cls.links} to={'/'}>
                {t('Main page link')}
            </AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} className={cls.links} to={'/about'}>
                {t('About page link')}
            </AppLink>
        </header>
    );
};