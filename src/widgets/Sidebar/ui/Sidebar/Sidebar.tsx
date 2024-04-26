import React, {memo, useMemo, useState} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss'
import {ThemeSwitcher} from "widgets/ThemeSwitcher/ui/ThemeSwitcher";
import {LangSwitcher} from "shared/ui/LangSwitcher/LangSwitcher";
import {Button, ButtonSize, ThemeButton} from "shared/ui/Button/Button";
import {SidebarItemsList} from "../../model/item";
import {SidebarItem} from "../SidebarItem/SidebarItem";


interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)
    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    const itemList = useMemo(() => {
        return SidebarItemsList.map((item) => (
            <SidebarItem
                collapsed={collapsed}
                item={item}
                key={item.path}
            />
        ))
    }, [collapsed])

    return (
        <div
            data-testid='sidebar'
            className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}
        >
            <Button
                data-testid='sidebar-toggle'
                onClick={onToggle}
                className={cls.collapsedBtn}
                theme={ThemeButton.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.Items}>

                <div className={cls.item}>
                    {itemList}
                </div>
            </div>
            <div className={cls.switcher}>
                <ThemeSwitcher/>
                <LangSwitcher
                    short={collapsed}
                    className={cls.lang}
                />
            </div>
        </div>
    );
});

Sidebar.displayName = 'Sidebar'



