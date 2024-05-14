import {classNames} from "@/shared/lib/classNames/classNames";
import cls from './NotificationButton.module.scss'
import React, {memo, useCallback, useState} from "react";
import {Button, ThemeButton} from "@/shared/ui/Button";
import {Icon} from "@/shared/ui/Icon";
import NotificationIcons from "@/shared/assets/icons/notification-20-20.svg?react";
import {NotificationList} from "@/entities/Notification";
import {Popover} from "@/shared/ui/Popover";
import {Drawer} from "@/shared/ui/Drower";
import {BrowserView, MobileView} from "react-device-detect";


interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo(({className}: NotificationButtonProps) => {
    const [isDrawer, setIsDrawer] = useState(false)

    const openDrawer = useCallback(() => {
        setIsDrawer(true)
    }, [])

    const closeDrawer = useCallback(() => {
        setIsDrawer(false)
    }, [])

    const trigger = (
        <Button
            onClick={openDrawer}
            theme={ThemeButton.CLEAR}
        >
            <Icon Svg={NotificationIcons} inverted/>
        </Button>
    )


    return (
        <div>
            <BrowserView>
                <Popover
                    className={classNames(cls.NotificationButton, {}, [className])}
                    trigger={trigger}>
                    <NotificationList className={cls.notification}/>
                </Popover>
            </BrowserView>
            <MobileView>
                {trigger}
                <Drawer isOpen={isDrawer} onClose={closeDrawer}>
                    <NotificationList/>
                </Drawer>
            </MobileView>
        </div>
    );
});

NotificationButton.displayName = 'NotificationButton'