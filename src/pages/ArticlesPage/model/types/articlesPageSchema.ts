import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entities/Article';

export interface ArticlesPageSchema extends EntityState<Article>{
    isLoading?: boolean;
    error?: string;
    view: ArticleView;

    // Pagination
    limit?: number;
    page: number;
    hasMore: boolean;
}