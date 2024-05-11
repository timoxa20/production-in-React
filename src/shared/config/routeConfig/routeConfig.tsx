import {RouteProps} from "react-router-dom";
import {AboutPage} from "@/pages/AboutPages";
import {MainPage} from "@/pages/MainPages";
import {NotFoundPage} from "@/pages/NotFaundPage";
import {ProfilePage} from "@/pages/ProfilePages";
import {ArticlePage} from "@/pages/ArticlesPages";
import {ArticleDetailPage} from "@/pages/ArticleDetailsPage";
import {ArticleEditPage} from "@/pages/ArticleEditPage";
import {UserRole} from "@/entities/User";
import {AdminPanel} from "@/pages/AdminPanelPage";
import {ForbiddenPages} from "@/pages/ForbiddenPages";

export type AppRouteProps = RouteProps & {
    authOnly?: boolean;
    roles?: UserRole[]
}
export enum AppRoute {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'article_details',
    ARTICLE_CREATE = 'article_create',
    ARTICLE_EDIT = 'article_edit',
    ADMIN_PANEL = 'admin_panel',
    FORBIDDEN = 'forbidden',
    // last
    NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoute, string> = {
    [AppRoute.MAIN]: '/',
    [AppRoute.ABOUT]: '/about',
    [AppRoute.PROFILE]: '/profile/',
    [AppRoute.ARTICLES]: '/article',
    [AppRoute.ARTICLE_DETAILS]: '/article/', // + :id,
    [AppRoute.ARTICLE_CREATE]: '/article/new',
    [AppRoute.ARTICLE_EDIT]: '/article/:id/edit',
    [AppRoute.ADMIN_PANEL]: '/admin',
    [AppRoute.FORBIDDEN]: '/forbidden',
    // last
    [AppRoute.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoute, AppRouteProps> = {
    [AppRoute.MAIN]: {
        path: RoutePath.main,
        element: <MainPage/>
    },
    [AppRoute.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage/>
    },
    [AppRoute.PROFILE]: {
        path: `${RoutePath.profile}:id`,
        element: <ProfilePage/>,
        authOnly: true
    },
    [AppRoute.ARTICLES]: {
        path: RoutePath.articles,
        element: <ArticlePage/>,
        authOnly: true
    },
    [AppRoute.ARTICLE_DETAILS]: {
        path:`${RoutePath.article_details}:id`,
        element: <ArticleDetailPage/>,
        authOnly: true
    },
    [AppRoute.ARTICLE_CREATE]: {
        path:`${RoutePath.article_create}`,
        element: <ArticleEditPage/>,
        authOnly: true
    },
    [AppRoute.ARTICLE_EDIT]: {
        path:`${RoutePath.article_edit}`,
        element: <ArticleEditPage/>,
        authOnly: true
    },
    [AppRoute.ADMIN_PANEL]: {
        path:`${RoutePath.admin_panel}`,
        element: <AdminPanel/>,
        authOnly: true,
        roles: [UserRole.ADMIN, UserRole.MANAGER]
    },
    [AppRoute.FORBIDDEN]: {
        path:`${RoutePath.forbidden}`,
        element: <ForbiddenPages/>,
    },
    // last
    [AppRoute.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage/>
    },

}