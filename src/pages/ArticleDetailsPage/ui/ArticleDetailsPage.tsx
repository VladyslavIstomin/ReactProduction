import cls from './ArticleDetailsPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleDetails, ArticleList } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/component/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsCommentsReducer, getArticleComments } from '../model/slice/articleDetailsCommentsSlice';
import { useSelector } from 'react-redux';
import { getArticleDetailsCommentsIsLoading } from '../model/selectors/getCommentDetails';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { AddComentForm } from 'features/AddCommentForm';
import { addCommentForArticle } from '../model/services/addCommentForArticle/addCommentForArticle';
import { RoutePaths } from 'shared/config/routerConfig/routerConfig';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Page } from 'widgets/Page/Page';
import { articleDetailsRecommendReducer, getArticleRecommend } from '../model/slice/articleDetailsRecommendSlice';
import { getArticleDetailsRecommendIsLoading } from '../model/selectors/getRecommendDetails';
import {
    fetchArticleRecommend
} from '../model/services/fetchArticleRecommend/fetchArticleRecommend';
import { articleDetailsPageReducer } from '../model/slice';

interface ArticleDetailsPageProps {
    className?: string
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('article');
    const { id } = useParams<{id: string}>();
    const comments = useSelector(getArticleComments.selectAll);
    const recommend = useSelector(getArticleRecommend.selectAll);
    const commentsIsLoading = useSelector(getArticleDetailsCommentsIsLoading);
    const recommendIsLoading = useSelector(getArticleDetailsRecommendIsLoading);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onBackList = useCallback(() => {
        navigate(RoutePaths.articles);
    }, [navigate]);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticleRecommend());
    });

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    if (!id) {
        return (
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('Article is not found')}
            </Page>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount >
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <Button onClick={onBackList} theme={ButtonTheme.OUTLINE}>
                    {t('Back to article list')}
                </Button>
                <ArticleDetails id={id}/>
                <Text className={cls.commentTitle} title={t('Recommending')} size={TextSize.L} />
                <ArticleList
                    target={'_blank'}
                    articles={recommend}
                    isLoading={recommendIsLoading}
                    className={cls.list}
                />
                <Text className={cls.commentTitle} title={t('Comments section')} size={TextSize.L} />
                <AddComentForm onSendComment={onSendComment} />
                <CommentList isLoading={commentsIsLoading} comments={comments} />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);