import cls from './ArticleDetails.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/component/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { useSelector } from 'react-redux';
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text';
import {
    getArticleData,
    getArticleError,
    getArticleIsLoading
} from '../../model/selectors/getArticleDetails/getArticleDetails';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import EyeIcon from 'shared/assets/icons/eye.svg';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { ArticleBlockType } from '../../model/types/article';
import { ArticleTextComponent } from '../ArticleTextComponent/ArticleTextComponent';
import { ArticleCodeComponent } from '../ArticleCodeComponent/ArticleCodeComponent';
import { ArticleImageComponent } from '../ArticleImageComponent/ArticleImageComponent';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { HStack, VStack } from 'shared/ui/Stack';

interface ArticleDetailsProps {
    className?: string;
    id: string;
}

const dynamicReducers: ReducersList = {
    articles: articleDetailsReducer
};

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleIsLoading);
    const error = useSelector(getArticleError);
    const article = useSelector(getArticleData);
    
    useInitialEffect(() => {
        dispatch(fetchArticleById(id));
    });

    const renderBlock = useCallback((block) => {
        switch (block.type) {
        case ArticleBlockType.TEXT:
            return <ArticleTextComponent block={block} className={cls.block} key={block.id} />;
        case ArticleBlockType.CODE:
            return <ArticleCodeComponent block={block} className={cls.block} key={block.id} />;
        case ArticleBlockType.IMAGE:
            return <ArticleImageComponent block={block} className={cls.block} key={block.id} />;
        default:
            return null;
        }
    }, []);

    let content;
    if (isLoading) {
        content = (
            <VStack w100 gap={8}>
                <Skeleton className={cls.avatar} width={200} height={200} radius={'50%'}/>
                <Skeleton className={cls.text} width={300} height={32}/>
                <Skeleton className={cls.text} width={600} height={24}/>
                <Skeleton className={cls.text} width={'100%'} height={200}/>
                <Skeleton className={cls.text} width={'100%'} height={200}/>
            </VStack>
        );
    } else if (error) {
        content = (
            <Text
                align={TextAlign.CENTER}
                title={t('Error during getting article')}
            />
        );
    } else {
        content = (
            <>
                <HStack justify={'center'} w100 className={cls.avatarWrapper}>
                    <Avatar
                        src={article?.img}
                        size={200}
                        className={cls.avatar}
                    />
                </HStack>
                <VStack w100 gap={4}>
                    <Text
                        text={article?.title}
                        title={article?.subtitle}
                        className={cls.title}
                        size={TextSize.L}
                    />
                    <HStack gap={8} className={cls.articleInfo}>
                        <Icon Svg={EyeIcon} className={cls.icon} />
                        <Text text={String(article?.views)} />
                    </HStack>
                    <HStack gap={8} className={cls.articleInfo}>
                        <Icon Svg={CalendarIcon} className={cls.icon} />
                        <Text text={article?.createdAt} />
                    </HStack>
                </VStack>
                {article?.blocks.map(renderBlock)}
            </>
        );
    }

    return (
        <DynamicModuleLoader reducers={dynamicReducers} removeAfterUnmount={true}>
            <VStack gap={16} className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </VStack>
        </DynamicModuleLoader>
    );
});