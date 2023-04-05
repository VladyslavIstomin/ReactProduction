import { createEntityAdapter, createSlice, } from '@reduxjs/toolkit';
import { StateScheme } from 'app/providers/StoreProvider';
import { ArticleDetailsRecommendSchema } from '../types/articleDetailsRecommendSchema';
import { Article } from 'entities/Article';
import {
    fetchArticleRecommend
} from '../services/fetchArticleRecommend/fetchArticleRecommend';

const recommendAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticleRecommend = recommendAdapter.getSelectors<StateScheme>(state => {
    return state.articleDetailsPage?.recommend || recommendAdapter.getInitialState();
});

export const articleDetailsRecommendSlice = createSlice({
    name: 'articleDetailsRecommend',
    initialState: recommendAdapter.getInitialState<ArticleDetailsRecommendSchema>({
        entities: {},
        ids: [],
        isLoading: false,
        error: undefined
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRecommend.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticleRecommend.fulfilled, (state, action) => {
                state.isLoading = false;
                recommendAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticleRecommend.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const articleDetailsRecommendReducer =  articleDetailsRecommendSlice.reducer;