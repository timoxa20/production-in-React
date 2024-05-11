import {classNames} from "@/shared/lib/classNames/classNames";
import cls from './NotificationListItem.module.scss'
import {memo} from "react";
import {Notification} from "../../model/types/notification";
import {Card, CardTheme} from "@/shared/ui/Card/Card";
import {Text} from "@/shared/ui/Text/Text";


interface NotificationListItemProps {
    className?: string;
    item: Notification
}

export const NotificationListItem = memo(({className, item}: NotificationListItemProps) => {
    const content = (
        <Card
            theme={CardTheme.OUTLINED}
            className={classNames(cls.NotificationListItem, {}, [className])}
        >
            <Text title={item.title} text={item.description}/>
        </Card>
    )

    if (item.href) {
        return (
            <a className={cls.href} target={"_blank"} href={item.href} rel="noreferrer">
                {content}
            </a>
        )
    }
    return content;
});

NotificationListItem.displayName = 'NotificationListItem'