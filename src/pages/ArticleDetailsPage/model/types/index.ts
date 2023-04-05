import { ArticleDetailsRecommendSchema } from './ArticleDetailsRecommendSchema';
import { ArticleDetailsCommentsSchema } from './ArticleDetailsCommentsSchema';

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsCommentsSchema;
    recommend: ArticleDetailsRecommendSchema
}