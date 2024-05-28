import React, { memo, useMemo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { VStack } from '@/shared/ui/Stack';
import { LangSwitcher } from '@/features/LangSwitcher';
import { useSelector } from 'react-redux';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { AppLogo } from '@/shared/ui/redesigned/AppLogo';
import { Icon } from '@/shared/ui/redesigned/Icon';
import ArrowIcons from '@/shared/assets/icons/arrow-bottom.svg?react';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItemsList = useSelector(getSidebarItems);
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const itemList = useMemo(() => {
        return sidebarItemsList.map((item) => (
            <SidebarItem
                collapsed={collapsed}
                item={item}
                key={item.path}
            />
        ));
    }, [collapsed, sidebarItemsList]);

    return (
        <aside
            data-testid="sidebar"
            className={classNames(
                cls.SidebarRedesigned,
                { [cls.collapsedRedesigned]: collapsed },
                [className],
            )}
        >
            <AppLogo
                size={collapsed ? 30 : 50}
                className={cls.appLogo}
            />
            <VStack
                role="navigation"
                gap="8"
                className={cls.items}
            >
                {itemList}
            </VStack>
            <Icon
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapseBtn}
                Svg={ArrowIcons}
                clickable
            ></Icon>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher
                    short={collapsed}
                    className={cls.lang}
                />
            </div>
        </aside>
    );
});

Sidebar.displayName = 'Sidebar';
