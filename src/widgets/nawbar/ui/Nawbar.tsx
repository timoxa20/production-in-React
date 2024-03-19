import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import {AppLinks, AppLinkTheme} from "shared/ui/AppLink/AppLinks";

interface NavbarProps {
    className?: string;
}

export const Nawbar = ({className}: NavbarProps) => {
    const about = "Главная"
    const main = "О сайте"
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLinks
                    theme={AppLinkTheme.SECONDARY}
                    to={'/'}
                    className={cls.mylinks}
                >
                    {about}</AppLinks>
                <AppLinks
                    theme={AppLinkTheme.SECONDARY}
                    to={'/about'}
                >
                    {main}</AppLinks>
            </div>

        </div>
    );
};



