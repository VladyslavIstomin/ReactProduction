import cls from './SidebarItem.module.scss';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getUserData } from 'entities/User';
import { SidebarItemType } from 'widgets/Sidebar/model/types/sidebar';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
    authOnly?: boolean
}

export const SidebarItem = memo(({ item, collapsed, authOnly }: SidebarItemProps) => {
    const { t } = useTranslation();
    const authUser = useSelector(getUserData);

    if (authOnly && !authUser) {
        return null;
    }

    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            className={
                classNames(cls.item, { [cls.collapsed]: collapsed }, [])
            }
            to={item.path}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>
                {t(item.text)}
            </span>
        </AppLink>
    );
});