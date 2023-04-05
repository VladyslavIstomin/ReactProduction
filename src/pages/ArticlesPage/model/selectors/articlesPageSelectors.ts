import { StateScheme } from 'app/providers/StoreProvider';
import { ArticleOrderType, ArticleSortType, ArticleType, ArticleView } from 'entities/Article';

export const getArticlesPageIsLoading = (state: StateScheme) => state.articlesPage?.isLoading || false;
export const getArticlesPageError = (state: StateScheme) => state.articlesPage?.error;
export const getArticlesPageView = (state: StateScheme) => state.articlesPage?.view || ArticleView.SMALL;
export const getArticlesPageNumber = (state: StateScheme) => state.articlesPage?.page || 1;
export const getArticlesPageLimit = (state: StateScheme) => state.articlesPage?.limit;
export const getArticlesPageHasMore = (state: StateScheme) => state.articlesPage?.hasMore;
export const getArticlesPageOrder = (state: StateScheme) => state.articlesPage?.order || ArticleOrderType.ASC;
export const getArticlesPageSort = (state: StateScheme) => state.articlesPage?.sort || ArticleSortType.CREATED;
export const getArticlesPageSearch = (state: StateScheme) => state.articlesPage?.search || '';
export const getArticlesPageHasInited = (state: StateScheme) => state.articlesPage?._inited || false;
export const getArticlesPageType = (state: StateScheme) => state.articlesPage?.type || ArticleType.ALL;