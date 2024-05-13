import {MainPage} from "@/pages/MainPages";
import {AboutPage} from "@/pages/AboutPages";
import {ProfilePage} from "@/pages/ProfilePages";
import {ArticlePage} from "@/pages/ArticlesPages";
import {ArticleDetailPage} from "@/pages/ArticleDetailsPage";
import {ArticleEditPage} from "@/pages/ArticleEditPage";
import {AdminPanel} from "@/pages/AdminPanelPage";
import {UserRole} from "@/entities/User";
import {ForbiddenPages} from "@/pages/ForbiddenPages";
import {NotFoundPage} from "@/pages/NotFaundPage";
import {AppRoute, RoutePath} from "@/shared/const/route";
import {AppRouteProps} from "@/shared/types/route";

export const routeConfig: Record<AppRoute, AppRouteProps> = {
    [AppRoute.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />
    },
    [AppRoute.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />
    },
    [AppRoute.PROFILE]: {
        path: `${RoutePath.profile}:id`,
        element: <ProfilePage />,
        authOnly: true
    },
    [AppRoute.ARTICLES]: {
        path: RoutePath.articles,
        element: <ArticlePage />,
        authOnly: true
    },
    [AppRoute.ARTICLE_DETAILS]: {
        path: `${RoutePath.article_details}:id`,
        element: <ArticleDetailPage />,
        authOnly: true
    },
    [AppRoute.ARTICLE_CREATE]: {
        path: `${RoutePath.article_create}`,
        element: <ArticleEditPage />,
        authOnly: true
    },
    [AppRoute.ARTICLE_EDIT]: {
        path: `${RoutePath.article_edit}`,
        element: <ArticleEditPage />,
        authOnly: true
    },
    [AppRoute.ADMIN_PANEL]: {
        path: `${RoutePath.admin_panel}`,
        element: <AdminPanel />,
        authOnly: true,
        roles: [UserRole.ADMIN, UserRole.MANAGER]
    },
    [AppRoute.FORBIDDEN]: {
        path: `${RoutePath.forbidden}`,
        element: <ForbiddenPages />,
    },
    // last
    [AppRoute.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />
    },

}