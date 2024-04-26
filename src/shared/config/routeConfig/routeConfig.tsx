import {RouteProps} from "react-router-dom";
import {AboutPage} from "pages/AboutPages";
import {MainPage} from "pages/MainPages";
import {NotFoundPage} from "pages/NotFaundPage";
import {ProfilePage} from "pages/ProfilePages";


export enum AppRoute {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',

    // last
    NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoute, string> = {
    [AppRoute.MAIN]: '/',
    [AppRoute.ABOUT]: '/about',
    [AppRoute.PROFILE]: '/profile',
    // last
    [AppRoute.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoute, RouteProps> = {
    [AppRoute.MAIN]: {
        path: RoutePath.main,
        element: <MainPage/>
    },
    [AppRoute.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage/>
    },
    [AppRoute.PROFILE]: {
        path: RoutePath.profile,
        element: <ProfilePage/>
    },
    // last
    [AppRoute.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage/>
    },

}