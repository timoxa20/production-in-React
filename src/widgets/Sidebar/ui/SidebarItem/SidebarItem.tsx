import cls from './SidebarItem.module.scss';
import { useTranslation } from 'react-i18next';
import {
    AppLinks as AppLinkDepricated,
    AppLinkTheme,
} from '@/shared/ui/deprecated/AppLink';
import React, { memo } from 'react';
import { SidebarItemType } from '../../model/types/item';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { ToggleFeature } from '@/shared/lib/features';
import { AppLinks } from '@/shared/ui/redesigned/AppLink';
import { Icon } from '@/shared/ui/deprecated/Icon';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed?: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();
    const isAuth = useSelector(getUserAuthData);

    if (!isAuth && item.authOnly) {
        return null;
    }
    return (
        <ToggleFeature
            feature={'isAppRedesigned'}
            on={
                <AppLinks
                    to={item.path}
                    className={classNames(cls.item, {
                        [cls.collapsedRedesigned]: collapsed,
                    })}
                    activeClassName={cls.active}
                >
                    <Icon Svg={item.Icon} />
                    <span className={cls.link}>{t(item.text)}</span>
                </AppLinks>
            }
            off={
                <AppLinkDepricated
                    theme={AppLinkTheme.SECONDARY}
                    to={item.path}
                    className={classNames(cls.item, {
                        [cls.collapsed]: collapsed,
                    })}
                >
                    <item.Icon className={cls.icon} />
                    <span className={cls.link}>{t(item.text)}</span>
                </AppLinkDepricated>
            }
        />
    );
});

SidebarItem.displayName = 'SidebarItem';
