import { MainPage } from '@/pages/MainPages';
import { AboutPage } from '@/pages/AboutPages';
import { ProfilePage } from '@/pages/ProfilePages';
import { ArticlePage } from '@/pages/ArticlesPages';
import { ArticleDetailPage } from '@/pages/ArticleDetailsPage';
import { ArticleEditPage } from '@/pages/ArticleEditPage';
import { AdminPanel } from '@/pages/AdminPanelPage';
import { UserRole } from '@/entities/User';
import { ForbiddenPages } from '@/pages/ForbiddenPages';
import { NotFoundPage } from '@/pages/NotFaundPage';
import {
    AppRoute,
    getRouteAbout,
    getRouteAdminPanel,
    getRouteArticle,
    getRouteArticleCreate,
    getRouteArticleDetails,
    getRouteArticleEdit,
    getRouteForbidden,
    getRouteMain,
    getRouteProfile,
    getRouteSettings,
} from '@/shared/const/route';
import { AppRouteProps } from '@/shared/types/route';
import { SitingsPage } from '@/pages/SitingsPage';

export const routeConfig: Record<AppRoute, AppRouteProps> = {
    [AppRoute.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />,
    },
    [AppRoute.Settings]: {
        path: getRouteSettings(),
        element: <SitingsPage />,
    },
    [AppRoute.ABOUT]: {
        path: getRouteAbout(),
        element: <AboutPage />,
    },
    [AppRoute.PROFILE]: {
        path: getRouteProfile(':id'),
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoute.ARTICLES]: {
        path: getRouteArticle(),
        element: <ArticlePage />,
        authOnly: true,
    },
    [AppRoute.ARTICLE_DETAILS]: {
        path: getRouteArticleDetails(':id'),
        element: <ArticleDetailPage />,
        authOnly: true,
    },
    [AppRoute.ARTICLE_CREATE]: {
        path: getRouteArticleCreate(),
        element: <ArticleEditPage />,
        authOnly: true,
    },
    [AppRoute.ARTICLE_EDIT]: {
        path: getRouteArticleEdit(':id'),
        element: <ArticleEditPage />,
        authOnly: true,
    },
    [AppRoute.ADMIN_PANEL]: {
        path: getRouteAdminPanel(),
        element: <AdminPanel />,
        authOnly: true,
        roles: [UserRole.ADMIN, UserRole.MANAGER],
    },
    [AppRoute.FORBIDDEN]: {
        path: getRouteForbidden(),
        element: <ForbiddenPages />,
    },
    // last
    [AppRoute.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage />,
    },
};
