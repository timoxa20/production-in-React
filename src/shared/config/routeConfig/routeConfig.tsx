import {RouteProps} from "react-router-dom";
import {AboutPage} from "pages/AboutPages";
import {MainPage} from "pages/MainPages";
import {NotFoundPage} from "pages/NotFaundPage";
import {ProfilePage} from "pages/ProfilePages";
import {ArticlePage} from "pages/ArticlesPages";
import {ArticleDetailPage} from "pages/ArticleDetailsPage";

export type AppRouteProps = RouteProps & {
    authOnly?: boolean;
}
export enum AppRoute {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'article_details',
    // last
    NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoute, string> = {
    [AppRoute.MAIN]: '/',
    [AppRoute.ABOUT]: '/about',
    [AppRoute.PROFILE]: '/profile/',
    [AppRoute.ARTICLES]: '/article',
    [AppRoute.ARTICLE_DETAILS]: '/article/', // + :id,
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
    // last
    [AppRoute.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage/>
    },

}