import { classNames } from '@/shared/lib/classNames/classNames';
import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Avatar } from '@/shared/ui/Avatar';
import { Dropdown } from '@/shared/ui/Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import {
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    userActions,
} from '@/entities/User';
import { getRouteAdminPanel, getRouteProfile } from '@/shared/const/route';

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

    if (!authData) {
        return null;
    }

    if (authData.id) {
        return (
            <Dropdown
                className={classNames('', {}, [className])}
                active
                items={[
                    ...(isAdminPanelAvailable
                        ? [
                              {
                                  content: t('Админка'),
                                  href: getRouteAdminPanel(),
                              },
                          ]
                        : []),
                    {
                        content: t('Выйти'),
                        onClick: onLogout,
                    },
                    {
                        content: t('Профиль пользователя'),
                        href: getRouteProfile(authData?.id),
                    },
                ]}
                trigger={
                    <Avatar
                        fallbackInverted
                        size={'30px'}
                        src={authData?.avatar}
                    />
                }
            />
        );
    }
});

AvatarDropdown.displayName = 'AvatarDropdown';
