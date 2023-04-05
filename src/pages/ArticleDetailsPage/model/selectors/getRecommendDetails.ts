import { StateScheme } from 'app/providers/StoreProvider';

export const getArticleDetailsRecommendIsLoading = (state: StateScheme) => {
    return state.articleDetailsPage?.recommend?.isLoading;
};
export const getArticleDetailsRecommendError = (state: StateScheme) => state.articleDetailsPage?.recommend?.error;