import cls from './SidebarItem.module.scss';
import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import { SidebarItemType } from '../../model/types/item';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
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
    );
});

SidebarItem.displayName = 'SidebarItem';
