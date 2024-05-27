import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotificationListItem.module.scss';
import { memo } from 'react';
import { Notification } from '../../model/types/notification';
import { Text } from '@/shared/ui/redesigned/Text';
import { Card } from '@/shared/ui/redesigned/Card';

interface NotificationListItemProps {
    className?: string;
    item: Notification;
}

export const NotificationListItem = memo(
    ({ className, item }: NotificationListItemProps) => {
        const content = (
            <Card
                variant={'normal'}
                className={classNames(cls.NotificationListItem, {}, [
                    className,
                ])}
            >
                <Text
                    title={item.title}
                    text={item.description}
                />
            </Card>
        );

        if (item.href) {
            return (
                <a
                    className={cls.href}
                    target={'_blank'}
                    href={item.href}
                    rel="noreferrer"
                >
                    {content}
                </a>
            );
        }
        return content;
    },
);

NotificationListItem.displayName = 'NotificationListItem';
