import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ArticleOrderType, ArticleSortType, ArticleType } from 'entities/Article';
import { getArticlesPageHasInited } from '../../../model/selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlePage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
    'articlesPage/initArticlePage',
    async (searchParams, thunkAPI) => {
        const { rejectWithValue, extra, getState, dispatch } = thunkAPI;
        const inited = getArticlesPageHasInited(getState());
        if (!inited) {
            dispatch(
                articlesPageActions.setOrder(searchParams.get('order') as ArticleOrderType ?? '')
            );
            dispatch(
                articlesPageActions.setSort(searchParams.get('sort') as ArticleSortType ?? '')
            );
            dispatch(
                articlesPageActions.setSearch(searchParams.get('search') ?? '')
            );
            dispatch(
                articlesPageActions.setType(searchParams.get('type') as ArticleType ?? '')
            );

            dispatch(articlesPageActions.initView());
            dispatch(fetchArticlesList({}));
        }
    }
);