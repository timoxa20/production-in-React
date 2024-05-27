import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotificationButton.module.scss';
import React, { memo, useCallback, useState } from 'react';
import { Button } from '@/shared/ui/redesigned/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import NotificationIconsDeprecated from '@/shared/assets/icons/notification-20-20.svg?react';
import NotificationIcons from '@/shared/assets/icons/notification.svg?react';
import { NotificationList } from '@/entities/Notification';
import { Popover as PopoverDeprecated } from '@/shared/ui/deprecated/Popover';
import { Drawer } from '@/shared/ui/deprecated/Drower';
import { BrowserView, MobileView } from 'react-device-detect';
import { ToggleFeature } from '@/shared/lib/features';
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
            <ToggleFeature
                on={
                    <Icon
                        Svg={NotificationIcons}
                        width={30}
                        height={30}
                        clickable
                        onClick={openDrawer}
                    />
                }
                off={
                    <Button
                        onClick={openDrawer}
                        variant={'clear'}
                    >
                        <IconDeprecated
                            Svg={NotificationIconsDeprecated}
                            width={30}
                            height={30}
                        />
                    </Button>
                }
                feature={'isAppRedesigned'}
            />
        );

        return (
            <div>
                <BrowserView>
                    <ToggleFeature
                        on={
                            <Popover
                                className={classNames(
                                    cls.NotificationButton,
                                    {},
                                    [className],
                                )}
                                trigger={trigger}
                            >
                                <NotificationList
                                    className={cls.notification}
                                />
                            </Popover>
                        }
                        off={
                            <PopoverDeprecated
                                className={classNames(
                                    cls.NotificationButton,
                                    {},
                                    [className],
                                )}
                                trigger={trigger}
                            >
                                <NotificationList
                                    className={cls.notification}
                                />
                            </PopoverDeprecated>
                        }
                        feature={'isAppRedesigned'}
                    />
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
