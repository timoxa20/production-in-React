import { AppRoute } from '@/shared/const/route';
import { ReactElement } from 'react';
import { ScrollToolbar } from '@/widgets/scrollToolbar';
import { useRouteChange } from '@/shared/lib/route/useRouteChange';

export function useAppToolbar() {
    const appRoute = useRouteChange();
    const toolbarByAppRoute: OptionalRecord<AppRoute, ReactElement> = {
        [AppRoute.ARTICLES]: <ScrollToolbar />,
        [AppRoute.ARTICLE_DETAILS]: <ScrollToolbar />,
        [AppRoute.ABOUT]: <ScrollToolbar />,
        [AppRoute.MAIN]: <ScrollToolbar />,
    };
    return toolbarByAppRoute[appRoute];
}
