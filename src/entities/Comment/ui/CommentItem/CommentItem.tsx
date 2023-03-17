import cls from './CommentItem.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { CommentType } from '../../model/types/comment';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';

interface CommentItemProps {
    className?: string;
    isLoading?: boolean;
    comment: CommentType;
}

export const CommentItem = memo(({ className, isLoading, comment }: CommentItemProps) => {
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentItem, {}, [className])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} radius={'50%'} />
                    <Skeleton width={100} height={16} className={cls.username} />
                </div>
                <Skeleton className={cls.text} width={'100%'} height={50} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.CommentItem, {}, [className])}>
            <div className={cls.header}>
                {comment.user.avatar && <Avatar size={30} src={comment.user.avatar}/>}
                <Text title={comment.user.username} className={cls.username} />
            </div>
            <Text text={comment.text} className={cls.text} />
        </div>
    );
});