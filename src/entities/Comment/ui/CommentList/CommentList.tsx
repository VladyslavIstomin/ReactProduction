import cls from './CommentList.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { CommentType } from '../../model/types/comment';
import { CommentItem } from '../CommentItem/CommentItem';
import { Text } from 'shared/ui/Text/Text';

interface CommentListProps {
    className?: string
    comments?: CommentType[];
    isLoading?: boolean;
}

export const CommentList = memo(({ className, comments, isLoading }: CommentListProps) => {
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentList, {}, [className])}>
                <CommentItem isLoading />
                <CommentItem isLoading />
                <CommentItem isLoading />
            </div>
        );
    }

    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length ? comments.map((comment, index) => (
                <CommentItem
                    className={cls.commentItem}
                    comment={comment}
                    key={index}
                    isLoading={isLoading}
                />
            )) : <Text text={t('Comments are not found')} />}
        </div>
    );
});