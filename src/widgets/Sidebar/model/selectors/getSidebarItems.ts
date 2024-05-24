import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import MainIconDeprecated from '@/shared/assets/icons/main-20-20.svg?react';
import AboutIconDeprecated from '@/shared/assets/icons/about-20-20.svg?react';
import ProfileIconDeprecated from '@/shared/assets/icons/profile-20-20.svg?react';
import ArticleIconDeprecated from '@/shared/assets/icons/article-20-20.svg?react';
import MainIcon from '@/shared/assets/icons/home.svg?react';
import ArticleIcon from '@/shared/assets/icons/article.svg?react';
import AboutIcon from '@/shared/assets/icons/Info.svg?react';
import ProfileIcon from '@/shared/assets/icons/avatar.svg?react';
import { SidebarItemType } from '../types/item';
import {
    getRouteAbout,
    getRouteArticle,
    getRouteMain,
    getRouteProfile,
} from '@/shared/const/route';
import { toggleFeatures } from '@/shared/lib/features';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
        {
            path: getRouteMain(),
            Icon: toggleFeatures({
                name: 'isAppRedesigned',
                off: () => MainIconDeprecated,
                on: () => MainIcon,
            }),
            text: 'Главная',
        },
        {
            path: getRouteAbout(),
            Icon: toggleFeatures({
                name: 'isAppRedesigned',
                off: () => AboutIconDeprecated,
                on: () => AboutIcon,
            }),
            text: 'О сайте',
        },
    ];

    if (userData && userData.id) {
        sidebarItemsList.push(
            {
                path: getRouteProfile(userData?.id),
                Icon: toggleFeatures({
                    name: 'isAppRedesigned',
                    off: () => ProfileIconDeprecated,
                    on: () => ProfileIcon,
                }),
                text: 'Профиль',
                authOnly: true,
            },
            {
                path: getRouteArticle(),
                Icon: toggleFeatures({
                    name: 'isAppRedesigned',
                    off: () => ArticleIconDeprecated,
                    on: () => ArticleIcon,
                }),
                text: 'Статьи',
                authOnly: true,
            },
        );
    }

    return sidebarItemsList;
});
