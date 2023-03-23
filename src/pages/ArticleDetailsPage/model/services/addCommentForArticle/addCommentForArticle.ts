import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserData } from 'entities/User';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateScheme';
import { CommentType } from 'entities/Comment';
import { getArticleData } from 'entities/Article';
import {
    fetchCommentsByArticleId
} from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<CommentType, string, ThunkConfig<string>>(
    'articleDetails/addCommentForArticle',
    async (text, thunkAPI) => {
        const { dispatch, rejectWithValue, extra, getState } = thunkAPI;

        const userData = getUserData(getState());
        const article = getArticleData(getState());

        if (!userData || !text || !article) {
            return rejectWithValue('no data');
        }

        try {
            const response = await extra.api.post<CommentType>('/comments', {
                articleId: article?.id,
                userId: userData.authUser?.id,
                text,
            });
            if (!response.data) {
                throw new Error();
            }

            dispatch(fetchCommentsByArticleId(article?.id));

            return response.data;
        } catch(e) {
            console.log(e);
            return rejectWithValue('error');
        }
    }
);