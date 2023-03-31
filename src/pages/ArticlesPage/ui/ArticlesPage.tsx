import cls from './ArticlesPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Article, ArticleList, ArticleView } from 'entities/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/component/DynamicModuleLoader/DynamicModuleLoader';
import { articlesPageActions, articlesPageReducer, getArticlesPage } from '../model/slice/articlesPageSlice';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticlesList } from '../model/services/fetchArticlesList/fetchArticlesList';
import { useSelector } from 'react-redux';
import {
    getArticlesPageError, getArticlesPageHasMore,
    getArticlesPageIsLoading, getArticlesPageNumber,
    getArticlesPageView
} from '../model/selectors/articlesPageSelectors';
import { ViewSelector } from 'features/ViewSelector';
import { Page } from 'shared/ui/Page/Page';
import { fetchNextArticlePage } from '../model/services/fetchNextArticlePage/fetchNextArticlePage';

interface ArticlesPageProps {
    className?: string
}

const reducer: ReducersList = {
    articlesPage: articlesPageReducer
};

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticlesPage.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const view = useSelector(getArticlesPageView);
    const page = useSelector(getArticlesPageNumber);

    const onScrollHandler = useCallback(() => {
        dispatch(fetchNextArticlePage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(articlesPageActions.initView());
        dispatch(fetchArticlesList({
            page
        }));
    });

    const onViewClick = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducer}>
            <Page
                onScrollHandler={onScrollHandler}
                className={classNames(cls.ArticlesPage, {}, [className])}
            >
                <ViewSelector onViewClick={onViewClick} view={view}/>
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);