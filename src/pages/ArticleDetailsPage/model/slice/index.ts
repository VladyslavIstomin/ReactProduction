import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from '../types/index';
import { articleDetailsRecommendReducer } from './articleDetailsRecommendSlice';
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
    recommend: articleDetailsRecommendReducer,
    comments: articleDetailsCommentsReducer
});