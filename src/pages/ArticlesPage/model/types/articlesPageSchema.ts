import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleOrderType, ArticleSortType, ArticleType, ArticleView } from 'entities/Article';

export interface ArticlesPageSchema extends EntityState<Article>{
    isLoading?: boolean;
    error?: string;

    // Pagination
    limit: number;
    page: number;
    hasMore: boolean;
    // filters
    view: ArticleView;
    order: ArticleOrderType;
    sort: ArticleSortType;
    search: string;
    type: ArticleType;

    _inited: boolean;
}