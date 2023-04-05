export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';
export { ArticleList } from './ui/ArticleList/ArticleList';
export { ArticleTypeTabs } from './ui/ArticleTypeTabs/ArticleTypeTabs';

export { articleDetailsActions, articleDetailsReducer } from './model/slice/articleDetailsSlice';

export { Article, ArticleView, ArticleSortType, ArticleOrderType, ArticleType } from './model/types/article';
export { ArticleDetailsSchema } from './model/types/ArticleDetailsSchema';
export { getArticleData } from './model/selectors/getArticleDetails/getArticleDetails';