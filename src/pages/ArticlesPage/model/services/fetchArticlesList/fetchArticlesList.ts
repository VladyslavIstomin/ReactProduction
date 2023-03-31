import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { getArticlesPageLimit } from '../../../model/selectors/articlesPageSelectors';

interface fetchArticlesListArgs {
    page?: number;
}

export const fetchArticlesList = createAsyncThunk<Article[], fetchArticlesListArgs, ThunkConfig<string>>(
    'articlesPage/fetchArticlesList',
    async (args, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI;
        try {
            const limit = getArticlesPageLimit(getState());
            const { page } = args;

            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _page: page,
                    _limit: limit
                }
            });

            if(!response.data) {
                throw new Error();
            }

            return response.data;
        } catch(e) {
            console.log(e);
            return rejectWithValue('error');
        }
    }
);