import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import {AppLinks, AppLinkTheme} from "shared/ui/AppLink/AppLinks";

interface NavbarProps {
    className?: string;
}

export const Nawbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLinks
                    theme={AppLinkTheme.SECONDARY}
                    to={'/'}
                    className={cls.mylinks}
                >
                    Главная</AppLinks>
                <AppLinks
                    theme={AppLinkTheme.SECONDARY}
                    to={'/about'}
                >
                    О сайте</AppLinks>
            </div>

        </div>
    );
};



