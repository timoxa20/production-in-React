export enum AppRoute {
    MAIN = 'main',
    Settings = 'settings',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'article_details',
    ARTICLE_CREATE = 'article_create',
    ARTICLE_EDIT = 'article_edit',
    ADMIN_PANEL = 'admin_panel',
    FORBIDDEN = 'forbidden',
    // last
    NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteSettings = () => '/settings';
export const getRouteAbout = () => '/about';
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteArticle = () => `/article`;
export const getRouteArticleDetails = (id: string) => `/article/${id}`;
export const getRouteArticleCreate = () => `/article/new`;
export const getRouteArticleEdit = (id: string) => `/article/${id}/edit`;
export const getRouteAdminPanel = () => `/admin`;
export const getRouteForbidden = () => `/forbidden`;

export const AppRouteByPathPattern: Record<string, AppRoute> = {
    [getRouteMain()]: AppRoute.MAIN,
    [getRouteSettings()]: AppRoute.Settings,
    [getRouteAbout()]: AppRoute.ABOUT,
    [getRouteProfile(':id')]: AppRoute.PROFILE,
    [getRouteArticle()]: AppRoute.ARTICLES,
    [getRouteArticleDetails(':id')]: AppRoute.ARTICLE_DETAILS,
    [getRouteArticleCreate()]: AppRoute.ARTICLE_CREATE,
    [getRouteArticleEdit(':id')]: AppRoute.ARTICLE_EDIT,
    [getRouteAdminPanel()]: AppRoute.ADMIN_PANEL,
    [getRouteForbidden()]: AppRoute.FORBIDDEN,
};
