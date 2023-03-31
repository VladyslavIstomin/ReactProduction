import cls from './ArticleList.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '..//ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
    className?: string;
    isLoading?: boolean;
    articles: Article[];
    view?: ArticleView;
}

const getSkeleton = (view: ArticleView) => new Array(view == ArticleView.BIG ? 3 : 9)
    .fill(0)
    .map((value, index) => (
        <ArticleListItemSkeleton view={view} className={cls.card} key={index} />
    ));

export const ArticleList = memo((props: ArticleListProps) => {
    const { t } = useTranslation();
    const {
        className,
        isLoading,
        articles,
        view = ArticleView.SMALL
    } = props;

    const renderArticle = useCallback((article: Article) => {
        return <ArticleListItem article={article} view={view} key={article.id} className={cls.card} />;
    }, [view]);

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length > 0 ? articles.map(renderArticle) : null}
            {isLoading && getSkeleton(view)}
        </div>
    );
});