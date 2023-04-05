import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from 'pages/ArticleDetailsPage';
import { articleDetailsRecommendReducer } from './articleDetailsRecommendSlice';
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
    recommend: articleDetailsRecommendReducer,
    comments: articleDetailsCommentsReducer
});