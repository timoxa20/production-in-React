import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './CommentCard.module.scss';
import { memo } from 'react';
import { Comment } from '../../model/types/comment';
import { Text } from '@/shared/ui/redesigned/Text';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { HStack, VStack } from '@/shared/ui/Stack';
import { getRouteProfile } from '@/shared/const/route';
import { AppLinks } from '@/shared/ui/redesigned/AppLink';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Card } from '@/shared/ui/redesigned/Card';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo(
    ({ className, comment, isLoading }: CommentCardProps) => {
        const Skeleton = SkeletonDeprecated;
        if (isLoading) {
            return (
                <VStack
                    data-testid="CommentCard.Loading"
                    max
                    gap="8"
                    className={classNames(cls.CommentCard, {}, [
                        className,
                        cls.loading,
                    ])}
                >
                    <div className={cls.header}>
                        <Skeleton
                            width={30}
                            height={30}
                            border={'50%'}
                        />
                        <Skeleton
                            width={100}
                            height={16}
                            className={cls.username}
                        />
                    </div>
                    <Skeleton
                        width={'100%'}
                        height={50}
                        className={cls.text}
                    />
                </VStack>
            );
        }

        if (!comment) {
            return null;
        }

        if (comment.user.id) {
            return (
                <Card
                                            max
                                            border={'partial'}
                                            padding={'24'}
                                        >
                                            <VStack
                                                data-testid="CommentCard.Content"
                                                gap="8"
                                                max
                                                className={classNames(
                                                    cls.CommentCardRedesigned,
                                                    {},
                                                    [className],
                                                )}
                                            >
                                                <AppLinks
                                                    to={getRouteProfile(comment?.user.id)}
                                                    className={cls.header}
                                                >
                                                    <HStack gap="8">
                                                        {comment?.user.avatar ? (
                                                            <Avatar
                                                                size={'30px'}
                                                                src={comment?.user.avatar}
                                                            />
                                                        ) : null}
                                                    </HStack>
                                                    <Text
                                                        bold
                                                        text={comment?.user.username}
                                                    />
                                                </AppLinks>
                                                <Text
                                                    className={cls.text}
                                                    text={comment?.text}
                                                />
                                            </VStack>
                                        </Card>
            );
        }
    },
);

CommentCard.displayName = 'CommentCard';
