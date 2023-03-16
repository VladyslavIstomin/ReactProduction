import cls from './ArticleImageComponent.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleBlockImage } from '../../model/types/article';
import { Text, TextAlign } from 'shared/ui/Text/Text';

interface ArticleImageComponentProps {
    className?: string;
    block: ArticleBlockImage;
}

export const ArticleImageComponent = memo(({ className, block }: ArticleImageComponentProps) => {
    return (
        <div className={classNames(cls.ArticleImageComponent, {}, [className])}>
            <img src={block.src} alt={block.title}/>
            {block.title && (
                <Text text={block.title} align={TextAlign.CENTER} />
            )}
        </div>
    );
});