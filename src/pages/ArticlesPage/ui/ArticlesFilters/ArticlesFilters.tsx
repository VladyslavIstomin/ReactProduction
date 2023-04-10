import cls from './ArticlesFilters.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { ViewSelector } from 'features/ViewSelector';
import { ArticleOrderType, ArticleSortType, ArticleTypeTabs, ArticleView } from 'entities/Article';
import { articlesPageActions } from '../../model/slice/articlesPageSlice';
import { useSelector } from 'react-redux';
import {
    getArticlesPageOrder, getArticlesPageSearch,
    getArticlesPageSort, getArticlesPageType,
    getArticlesPageView
} from '../../model/selectors/articlesPageSelectors';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Select } from 'shared/ui/Select/Select';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';
import { SortSelector } from 'features/SortSelector';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { Tabs, TabsItem } from 'shared/ui/Tabs/Tabs';
import { ArticleType } from 'entities/Article/model/types/article';

interface PageFiltersProps {
    className?: string
}

export const ArticlesFilters = memo(({ className }: PageFiltersProps) => {
    const { t } = useTranslation();
    const view = useSelector(getArticlesPageView);
    const dispatch = useAppDispatch();
    const sort = useSelector(getArticlesPageSort);
    const order = useSelector(getArticlesPageOrder);
    const search = useSelector(getArticlesPageSearch);
    const type = useSelector(getArticlesPageType);

    const onViewClick = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const debouncedFetchData = useDebounce(fetchData, 500);

    const onOrderChange = useCallback((value: ArticleOrderType) => {
        dispatch(articlesPageActions.setOrder(value));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const onSortChange = useCallback((value: ArticleSortType) => {
        dispatch(articlesPageActions.setSort(value));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const onTypeChange = useCallback((value: ArticleType) => {
        dispatch(articlesPageActions.setType(value));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const onSearchChange = useCallback((value: string) => {
        dispatch(articlesPageActions.setSearch(value));
        dispatch(articlesPageActions.setPage(1));
        debouncedFetchData();
    }, [debouncedFetchData, dispatch]);

    return (
        <div className={classNames(cls.PageFilters, {}, [className])}>
            <div className={cls.toolsWrapper}>
                <SortSelector
                    sort={sort}
                    order={order}
                    onOrderChange={onOrderChange}
                    onSortChange={onSortChange}
                />
                <ViewSelector onViewClick={onViewClick} view={view}/>
            </div>
            <Card className={cls.search}>
                <Input value={search} onChangeCallback={onSearchChange} label={t('Search')} />
            </Card>
            <ArticleTypeTabs value={type} onTypeChange={onTypeChange} className={cls.tabs}/>
        </div>
    );
});