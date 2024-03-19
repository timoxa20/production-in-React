import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss'
import React, {useState} from "react";
import {ThemeSwitchet} from "widgets/ThemeSwitcher";
import {LangSwitcher} from "shared/ui/LangSwitcher/LangSwitcher";
import {Button} from "shared/ui/Button/Button";
import {t} from "i18next";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)
    const onToggle = () => {
        setCollapsed(prev => !prev)
    }
    const buttonToggle = "Toggle"
    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}
        >
            <Button onClick={onToggle}>{buttonToggle}</Button>
            <div className={cls.swithet}>
                <ThemeSwitchet />
                <LangSwitcher className={cls.lang}/>
            </div>
        </div>
    );
};



