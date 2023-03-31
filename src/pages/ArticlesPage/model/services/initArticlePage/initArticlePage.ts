import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlesPageHasInited } from '../../../model/selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlePage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlesPage/initArticlePage',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra, getState, dispatch } = thunkAPI;
        const inited = getArticlesPageHasInited(getState());
        if (!inited) {
            dispatch(articlesPageActions.initView());
            dispatch(fetchArticlesList({
                page: 1
            }));
        }
    }
);