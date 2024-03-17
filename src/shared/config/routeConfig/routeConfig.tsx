import {RouteProps} from "react-router-dom";
import {AboutPage} from "pages/AboutPages";
import {MainPage} from "pages/MainPages";


export enum AppRoute {
    MAIN = 'main',
    ABOUT = 'about',
}

export const RoutePath: Record<AppRoute, string> = {
    [AppRoute.MAIN]: '/',
    [AppRoute.ABOUT]: '/about'
}

export const routeConfig: Record<AppRoute, RouteProps> = {
    [AppRoute.MAIN]: {
        path: RoutePath.main,
        element: <MainPage/>
    },
    [AppRoute.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage/>
    }
}