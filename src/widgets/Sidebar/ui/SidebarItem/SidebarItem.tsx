import cls from './SidebarItem.module.scss'
import {useTranslation} from "react-i18next";
import {AppLinks, AppLinkTheme} from "shared/ui/AppLink/AppLinks";
import React, {memo} from "react";
import {SidebarItemType} from "../../model/item";
import {classNames} from "shared/lib/classNames/classNames";
import {useSelector} from "react-redux";
import {getUserAuthData} from "../../../../entities/User";


interface SidebarItemProps {
    item: SidebarItemType;
    collapsed?: boolean;
}

export const SidebarItem = memo(({item, collapsed}: SidebarItemProps) => {
    const {t} = useTranslation()
    const isAuth = useSelector(getUserAuthData)

    if (!isAuth && item.authOnly) {
        return null
    }
    return (
        <AppLinks
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
            className={cls.item}
        >
            <item.Icon className={classNames(cls.icon, {[cls.collapsed]: collapsed})}/>
            <span
                className={cls.link}
            >{t(item.text)}
            </span>
        </AppLinks>
    );
});

SidebarItem.displayName = 'SidebarItem'



