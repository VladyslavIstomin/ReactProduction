import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    getArticlesPageHasMore,
    getArticlesPageIsLoading,
    getArticlesPageNumber
} from '../../../model/selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const fetchNextArticlePage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlesPage/fetchNextArticlePage',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra, getState, dispatch } = thunkAPI;
        const isLoading = getArticlesPageIsLoading(getState());
        const page = getArticlesPageNumber(getState());
        const hasMore = getArticlesPageHasMore(getState());

        if (hasMore && !isLoading) {
            dispatch(articlesPageActions.setPage(page + 1));
            dispatch(fetchArticlesList({
                page: page + 1
            }));
        }
    }
);