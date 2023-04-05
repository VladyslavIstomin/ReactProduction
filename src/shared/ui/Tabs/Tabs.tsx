import cls from './Tabs.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, ReactNode, useCallback } from 'react';
import { Card, CardTheme } from 'shared/ui/Card/Card';

export interface TabsItem {
    value: string;
    content: ReactNode;
}

interface TabsProps {
    className?: string;
    tabs: TabsItem[];
    selected: string;
    onTabClick: (tab: TabsItem) => void;
}

export const Tabs = memo(({ className, tabs, onTabClick, selected }: TabsProps) => {
    const { t } = useTranslation();

    const clickHandler = useCallback((tab: TabsItem) => () => {
        onTabClick(tab);
    }, [onTabClick]);

    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabs.map(tab => (
                <Card
                    className={cls.tab}
                    key={tab.value}
                    theme={tab.value === selected ? CardTheme.NORMAL : CardTheme.OUTLINE}
                    onClick={clickHandler(tab)}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
});