import { classNames } from '@/shared/lib/classNames/classNames';
import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import {
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    userActions,
} from '@/entities/User';
import {
    getRouteAdminPanel,
    getRouteProfile,
    getRouteSettings,
} from '@/shared/const/route';
import { Dropdown } from '@/shared/ui/redesigned/Popup/Dropdown';
import { Avatar } from '@/shared/ui/redesigned/Avatar';

interface avatarDropdownProps {
    className?: string;
}

export const AvatarDropdown = memo(({ className }: avatarDropdownProps) => {
    const { t } = useTranslation();
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const dispatch = useDispatch();
    const authData = useSelector(getUserAuthData);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const isAdminPanelAvailable = isAdmin || isManager;

    const items = [
        ...(isAdminPanelAvailable
            ? [
                  {
                      content: t('Админка'),
                      href: getRouteAdminPanel(),
                  },
              ]
            : []),
        {
            content: t('Настройки'),
            href: getRouteSettings(),
        },
        {
            content: t('Выйти'),
            onClick: onLogout,
        },
        {
            content: t('Профиль пользователя'),
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            href: getRouteProfile(authData?.id),
        },
    ];

    if (!authData) {
        return null;
    }

    return (
        <Dropdown
            className={classNames('', {}, [className])}
            active
            items={items}
            trigger={
                <Avatar
                    size={'40px'}
                    src={authData?.avatar}
                />
            }
        />
    );
});

AvatarDropdown.displayName = 'AvatarDropdown';
