import cls from './ArticleTextComponent.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleBlockText } from '../../model/types/article';
import { Text } from 'shared/ui/Text/Text';

interface ArticleTextComponentProps {
    className?: string;
    block: ArticleBlockText;
}

export const ArticleTextComponent = memo(({ className, block }: ArticleTextComponentProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ArticleTextComponent, {}, [className])}>
            {block.title && (
                <Text title={block.title} className={cls.title} />
            )}
            {block.paragraphs.map((text) => (
                <Text text={text} key={text} className={cls.paragraph} />
            ))}
        </div>
    );
});