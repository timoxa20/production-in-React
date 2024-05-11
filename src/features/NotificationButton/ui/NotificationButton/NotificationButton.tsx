import {classNames} from "shared/lib/classNames/classNames";
import cls from './NotificationButton.module.scss'
import React, {memo} from "react";
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {Icon} from "shared/ui/Icon/Icon";
import NotificationIcons from "shared/assets/icons/notification-20-20.svg";
import {NotificationList} from "entities/Notification";
import {Popover} from "shared/ui/Popover/Popover";


interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo(({className}: NotificationButtonProps) => {
    return (
        <Popover
            className={classNames(cls.NotificationButton, {}, [className])}
            trigger={(
                <Button theme={ThemeButton.CLEAR}>
                    <Icon Svg={NotificationIcons} inverted/>
                </Button>
            )}>
            <NotificationList className={cls.notification}/>
        </Popover>
    );
});