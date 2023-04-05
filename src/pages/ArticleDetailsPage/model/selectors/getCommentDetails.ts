import { StateScheme } from 'app/providers/StoreProvider';

export const getArticleDetailsCommentsIsLoading = (state: StateScheme) => state.articleDetailsPage?.comments?.isLoading;
export const getArticleDetailsCommentsError = (state: StateScheme) => state.articleDetailsPage?.comments?.error;