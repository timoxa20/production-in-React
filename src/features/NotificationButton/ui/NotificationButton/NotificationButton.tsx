import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotificationButton.module.scss';
import React, { memo, useCallback, useState } from 'react';
import NotificationIcons from '@/shared/assets/icons/notification.svg?react';
import { NotificationList } from '@/entities/Notification';
import { Drawer } from '@/shared/ui/deprecated/Drower';
import { BrowserView, MobileView } from 'react-device-detect';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Popover } from '@/shared/ui/redesigned/Popup/Popover';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo(
    ({ className }: NotificationButtonProps) => {
        const [isDrawer, setIsDrawer] = useState(false);

        const openDrawer = useCallback(() => {
            setIsDrawer(true);
        }, []);

        const closeDrawer = useCallback(() => {
            setIsDrawer(false);
        }, []);

        const trigger = (
            <Icon
                Svg={NotificationIcons}
                width={30}
                height={30}
                clickable
                onClick={openDrawer}
            />
        );

        return (
            <div>
                <BrowserView>
                    <Popover
                        className={classNames(cls.NotificationButton, {}, [
                            className,
                        ])}
                        trigger={trigger}
                    >
                        <NotificationList className={cls.notification} />
                    </Popover>
                </BrowserView>
                <MobileView>
                    {trigger}
                    <Drawer
                        isOpen={isDrawer}
                        onClose={closeDrawer}
                    >
                        <NotificationList />
                    </Drawer>
                </MobileView>
            </div>
        );
    },
);

NotificationButton.displayName = 'NotificationButton';
