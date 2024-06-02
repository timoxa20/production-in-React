import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import { useNotifications } from '../../api/notificationApi';
import { VStack } from '@/shared/ui/Stack';
import { NotificationListItem } from '../NotificationListItem/NotificationListItem';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';

interface NotificationListProps {
    className?: string;
}

export const NotificationList = memo(({ className }: NotificationListProps) => {
    const { data, isLoading } = useNotifications(null, {
        pollingInterval: 5000,
    });

    const Skeleton = SkeletonRedesigned;

    if (isLoading) {
        return (
            <VStack
                gap="16"
                max
                className={classNames('', {}, [className])}
            >
                <Skeleton
                    width={500}
                    border={'8px'}
                    height={80}
                />
                <Skeleton
                    width={500}
                    border={'8px'}
                    height={80}
                />
                <Skeleton
                    width={500}
                    border={'8px'}
                    height={80}
                />
            </VStack>
        );
    }

    return (
        <VStack
            gap="16"
            className={classNames('', {}, [className])}
        >
            {data?.map((item) => (
                <NotificationListItem
                    key={item.id}
                    item={item}
                />
            ))}
        </VStack>
    );
});

NotificationList.displayName = 'NotificationList';
