import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import MainIcon from '@/shared/assets/icons/main-20-20.svg?react';
import AboutIcon from '@/shared/assets/icons/about-20-20.svg?react';
import ProfileIcon from '@/shared/assets/icons/profile-20-20.svg?react';
import ArticleIcon from '@/shared/assets/icons/article-20-20.svg?react';
import { SidebarItemType } from '../types/item';
import {getRouteAbout, getRouteArticle, getRouteMain, getRouteProfile} from "@/shared/const/route";


export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
            {
                path: getRouteMain(),
                Icon: MainIcon,
                text: 'Главная',
            },
            {
                path: getRouteAbout(),
                Icon: AboutIcon,
                text: 'О сайте',
            },
        ];

        if (userData) {
            sidebarItemsList.push(
                {
                    path: getRouteProfile(userData.id),
                    Icon: ProfileIcon,
                    text: 'Профиль',
                    authOnly: true,
                },
                {
                    path: getRouteArticle(),
                    Icon: ArticleIcon,
                    text: 'Статьи',
                    authOnly: true,
                },
            );
        }

        return sidebarItemsList;
    },
);
