import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { Tabs, TabsItem } from 'shared/ui/Tabs/Tabs';
import { ArticleType } from 'entities/Article';

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onTypeChange: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo(({ className, value, onTypeChange }: ArticleTypeTabsProps) => {
    const { t } = useTranslation();

    const tabTypes = useMemo<TabsItem[]>(() => [
        {
            value: ArticleType.ALL,
            content: t('All')
        },
        {
            value: ArticleType.IT,
            content: t('IT')
        },
        {
            value: ArticleType.SCIENCE,
            content: t('Science')
        },
        {
            value: ArticleType.ECONOMICS,
            content: t('Economics')
        }
    ], [t]);

    const onTabClick = useCallback((tab: TabsItem) => {
        onTypeChange(tab.value as ArticleType);
    }, [onTypeChange]);

    return (
        <div className={classNames('', {}, [className])}>
            <Tabs
                tabs={tabTypes}
                selected={value}
                onTabClick={onTabClick}
            />
        </div>
    );
});