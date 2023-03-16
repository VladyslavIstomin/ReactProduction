import { StateScheme } from 'app/providers/StoreProvider';

export const getArticleData = (state: StateScheme) => state.articles?.data;
export const getArticleIsLoading = (state: StateScheme) => state.articles?.isLoading || false;
export const getArticleError = (state: StateScheme) => state.articles?.error;