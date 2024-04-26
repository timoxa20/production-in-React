import React from "react";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import  AboutIcons  from 'shared/assets/icons/about-20-20.svg'
import   MainIcons  from 'shared/assets/icons/main-20-20.svg'
import   ProfileIcons  from 'shared/assets/icons/profile-20-20.svg'

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        Icon: MainIcons,
        text: 'Главная'
    },
    {
        path: RoutePath.about,
        Icon: AboutIcons,
        text: 'О сайте'
    },
    {
        path: RoutePath.profile,
        Icon: ProfileIcons,
        text: 'Профиль'
    }
]