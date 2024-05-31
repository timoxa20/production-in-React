import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import { useNotifications } from '../../api/notificationApi';
import { VStack } from '@/shared/ui/Stack';
import { NotificationListItem } from '../NotificationListItem/NotificationListItem';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { toggleFeatures } from '@/shared/lib/features';

interface NotificationListProps {
    className?: string;
}

export const NotificationList = memo(({ className }: NotificationListProps) => {
    const { data, isLoading } = useNotifications(null, {
        pollingInterval: 5000,
    });

    const showSkeleton = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => SkeletonRedesigned,
        off: () => SkeletonDeprecated,
    });

    if (isLoading) {
        return (
            <VStack
                gap="16"
                max
                className={classNames('', {}, [className])}
            >
                <SkeletonDeprecated
                    width={500}
                    border={'8px'}
                    height={80}
                />
                <SkeletonDeprecated
                    width={500}
                    border={'8px'}
                    height={80}
                />
                <SkeletonDeprecated
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
