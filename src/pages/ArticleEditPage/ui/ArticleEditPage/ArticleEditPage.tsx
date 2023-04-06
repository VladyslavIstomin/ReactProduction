import cls from './ArticleEditPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useParams } from 'react-router-dom';

interface ArticleEditPageProps {
    className?: string
}

const ArticleEditPage = memo(({ className }: ArticleEditPageProps) => {
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();
    const isEdit = Boolean(id);

    return (
        <div className={classNames(cls.ArticleEditPage, {}, [className])}>
            {isEdit ?
                t('Article Edit Page id = ' + id) :
                t('Create new page')
            }
        </div>
    );
});

export default ArticleEditPage;