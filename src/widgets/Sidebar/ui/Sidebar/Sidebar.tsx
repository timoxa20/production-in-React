import React, {useState} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss'
import {ThemeSwitcher} from "widgets/ThemeSwitcher/ui/ThemeSwitcher";
import {LangSwitcher} from "shared/ui/LangSwitcher/LangSwitcher";
import {Button, ButtonSize, ThemeButton} from "shared/ui/Button/Button";
import {useTranslation} from "react-i18next";
import {AppLinks, AppLinkTheme} from "shared/ui/AppLink/AppLinks";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import  AboutIcons  from 'shared/assets/icons/about-20-20.svg'
import   MainIcons  from 'shared/assets/icons/main-20-20.svg'

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)
    const {t} = useTranslation()
    const onToggle = () => {
        setCollapsed(prev => !prev)
    }
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
                <div>
                    <AppLinks
                        theme={AppLinkTheme.SECONDARY}
                        to={RoutePath.main}
                        className={cls.item}
                    >
                        <MainIcons className={cls.icon}/>
                        <span
                            className={cls.link}
                        >{t("Главная")}
                        </span>

                    </AppLinks>
                </div>
                <div className={cls.item}>
                    <AppLinks
                        theme={AppLinkTheme.SECONDARY}
                        to={RoutePath.about}
                        className={cls.item}
                    >
                        <AboutIcons className={cls.icon}/>
                        <span
                            className={cls.link}
                        >{t("О сайте")}
                        </span>
                    </AppLinks>
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
};



