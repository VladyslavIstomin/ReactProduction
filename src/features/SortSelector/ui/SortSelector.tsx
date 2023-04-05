import cls from './SortSelector.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { Select, SelectOptionsList } from 'shared/ui/Select/Select';
import { ArticleOrderType, ArticleSortType } from 'entities/Article';

interface SortSelectorProps {
    className?: string;
    order: string;
    sort: string;
    onSortChange: (value: ArticleSortType) => void;
    onOrderChange: (value: ArticleOrderType) => void;
}

export const SortSelector = memo(({ className, sort, order, onSortChange, onOrderChange }: SortSelectorProps) => {
    const { t } = useTranslation();

    const orderOptions = useMemo<SelectOptionsList[]>(() => [
        {
            value: 'asc',
            content: t('ascending')
        },
        {
            value: 'desc',
            content: t('descending')
        }
    ], [t]);

    const sortOptions = useMemo<SelectOptionsList[]>(() => [
        {
            value: ArticleSortType.CREATED,
            content: t('date creation')
        },
        {
            value: ArticleSortType.TITLE,
            content: t('title')
        },
        {
            value: ArticleSortType.VIEWS,
            content: t('views amount')
        },
    ], [t]);

    const onOrderChangeHandler = useCallback((order: string) => {
        onOrderChange(order as ArticleOrderType);
    }, [onOrderChange]);

    const onSortChangeHandler = useCallback((sort: string) => {
        onSortChange(sort as ArticleSortType);
    }, [onSortChange]);

    return (
        <div className={classNames(cls.SortSelector, {}, [className])}>
            <Select
                label={t('Order to')}
                options={orderOptions}
                selectValue={order}
                onChange={onOrderChangeHandler}
            />
            <Select
                label={t('Sort by')}
                options={sortOptions}
                selectValue={sort}
                onChange={onSortChangeHandler}
            />
        </div>
    );
});