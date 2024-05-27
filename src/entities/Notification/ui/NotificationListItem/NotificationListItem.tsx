import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotificationListItem.module.scss';
import { memo } from 'react';
import { Notification } from '../../model/types/notification';
import { Card as CardDeprecated, CardTheme } from '@/shared/ui/deprecated/Card';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { ToggleFeature } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card';

interface NotificationListItemProps {
    className?: string;
    item: Notification;
}

export const NotificationListItem = memo(
    ({ className, item }: NotificationListItemProps) => {
        const content = (
            <ToggleFeature
                on={
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
                }
                off={
                    <CardDeprecated
                        theme={CardTheme.OUTLINED}
                        className={classNames(cls.NotificationListItem, {}, [
                            className,
                        ])}
                    >
                        <TextDeprecated
                            title={item.title}
                            text={item.description}
                        />
                    </CardDeprecated>
                }
                feature={'isAppRedesigned'}
            />
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
