import cls from './ArticleCodeComponent.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleBlockCode } from '../../model/types/article';
import { Code } from 'shared/ui/Code/Code';

interface ArticleCodeComponentProps {
    className?: string;
    block: ArticleBlockCode;
}

export const ArticleCodeComponent = memo(({ className, block }: ArticleCodeComponentProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ArticleCodeComponent, {}, [className])}>
            <Code text={block.code} />
        </div>
    );
});