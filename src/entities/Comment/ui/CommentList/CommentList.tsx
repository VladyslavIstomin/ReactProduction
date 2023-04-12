import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { CommentType } from '../../model/types/comment';
import { CommentItem } from '../CommentItem/CommentItem';
import { Text } from 'shared/ui/Text/Text';
import { VStack } from 'shared/ui/Stack';

interface CommentListProps {
    className?: string
    comments?: CommentType[];
    isLoading?: boolean;
}

export const CommentList = memo(({ className, comments, isLoading }: CommentListProps) => {
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <VStack gap={16} w100 className={classNames('', {}, [className])}>
                <CommentItem isLoading />
                <CommentItem isLoading />
                <CommentItem isLoading />
            </VStack>
        );
    }

    return (
        <VStack gap={16} className={classNames('', {}, [className])}>
            {comments?.length ? comments.map((comment, index) => (
                <CommentItem
                    comment={comment}
                    key={index}
                    isLoading={isLoading}
                />
            )) : <Text text={t('Comments are not found')} />}
        </VStack>
    );
});