import React from "react";
import  AboutIcons  from '@/shared/assets/icons/about-20-20.svg?react'
import   MainIcons  from '@/shared/assets/icons/main-20-20.svg?react'
import   ProfileIcons  from '@/shared/assets/icons/profile-20-20.svg?react'
import   ArticleIcons  from '@/shared/assets/icons/article-20-20.svg?react'
import {RoutePath} from "@/shared/const/route";

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean
}

export const SidebarItemsList: SidebarItemType[]  = [
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
        text: 'Профиль',
        authOnly: true
    },
    {
        path: RoutePath.articles,
        Icon: ArticleIcons,
        text: 'Статья',
        authOnly: true
    },

]