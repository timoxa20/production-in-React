import {classNames} from "@/shared/lib/classNames/classNames";
import React, {memo, useCallback} from "react";
import {useTranslation} from "react-i18next";
import {RoutePath} from "@/shared/config/routeConfig/routeConfig";
import {Avatar} from "@/shared/ui/Avatar/Avatar";
import {Dropdown} from "@/shared/ui/Dropdown/Dropdown";
import {useDispatch, useSelector} from "react-redux";
import {getUserAuthData, isUserAdmin, isUserManager, userActions} from "@/entities/User";


interface avatarDropdownProps {
    className?: string;
}

export const AvatarDropdown = memo(({className}: avatarDropdownProps) => {
    const {t} = useTranslation()
    const isAdmin = useSelector(isUserAdmin)
    const isManager = useSelector(isUserManager)
    const dispatch = useDispatch()
    const authData = useSelector(getUserAuthData)

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])

    const isAdminPanelAvailable = isAdmin || isManager

    if (!authData) {
        return null
    }

    return (
        <Dropdown
            className={classNames('', {}, [className])}
            active
            items={[
                ...(isAdminPanelAvailable ? [{
                    content: t('Админка'),
                    href: RoutePath.admin_panel
                }] : []),
                {
                    content: t('Выйти'),
                    onClick: onLogout
                },
                {
                    content: t('Профиль пользователя'),
                    href: RoutePath.profile + authData?.id
                }
            ]}
            trigger={<Avatar size={'30px'} src={authData?.avatar}/>}
        />
    );
});

AvatarDropdown.displayName = 'AvatarDropdown'