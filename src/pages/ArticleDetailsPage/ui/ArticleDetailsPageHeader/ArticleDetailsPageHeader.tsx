import cls from './ArticleDetailsPageHeader.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { RoutePaths } from 'shared/config/routerConfig/routerConfig';
import { useSelector } from 'react-redux';
import { getCanEditArticle } from '../../model/selectors/getCanEditArticle';
import { getArticleData } from 'entities/Article';

interface ArticleDetailsPageHeaderProps {
    className?: string
}

export const ArticleDetailsPageHeader = memo(({ className }: ArticleDetailsPageHeaderProps) => {
    const { t } = useTranslation('article');
    const navigate = useNavigate();
    const canEdit = useSelector(getCanEditArticle);
    const article = useSelector(getArticleData);

    const onBackList = useCallback(() => {
        navigate(RoutePaths.articles);
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        navigate(`${RoutePaths.articles}/${article?.id}/edit`);
    }, [article?.id, navigate]);

    return (
        <div className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}>
            <Button onClick={onBackList} theme={ButtonTheme.OUTLINE}>
                {t('Back to article list')}
            </Button>
            {canEdit && (
                <Button onClick={onEditArticle} theme={ButtonTheme.OUTLINE}>
                    {t('Refactoring')}
                </Button>
            )}
        </div>
    );
});