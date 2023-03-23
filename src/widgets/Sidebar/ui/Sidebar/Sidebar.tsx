import cls from './Sidebar.module.scss';
import { memo, useMemo, useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { useSelector } from 'react-redux';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';

interface SidebarProps {
    className?: string
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItemsList = useSelector(getSidebarItems);

    const handleClick = () => {
        setCollapsed(state => !state);
    };

    const itemsList = useMemo(() => {
        return sidebarItemsList.map((item) => (
            <SidebarItem
                item={item}
                key={item.path}
                collapsed={collapsed}
                authOnly={item.authOnly}
            />
        ));
    }, [collapsed, sidebarItemsList]);

    return (
        <div
            data-testid="sidebar"
            className={
                classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])
            }>
            <Button
                data-testid="sidebar-btn"
                onClick={handleClick}
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>
                {itemsList}
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher short={collapsed} />
            </div>
        </div>
    );
});