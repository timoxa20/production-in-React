import { useSelector } from 'react-redux';
import {
    getArticlePagesOrder,
    getArticlePagesSearch,
    getArticlePagesSort,
    getArticlePagesType,
    getArticlePagesView,
} from '../../model/selectors/articlePagesSelector';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback } from 'react';
import { ArticleSortField, ArticleType, ArticleView } from '@/entities/Article';
import { articlePagesAction } from '../../model/slice/articlePagesSlice';
import { SortOrder } from '@/shared/types';
import { fetchArticleList } from '../../model/service/fetchArticleList';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';

export function useArticleFilters() {
    const view = useSelector(getArticlePagesView);
    const sort = useSelector(getArticlePagesSort);
    const order = useSelector(getArticlePagesOrder);
    const search = useSelector(getArticlePagesSearch);
    const type = useSelector(getArticlePagesType);
    const dispatch = useAppDispatch();

    const fetchData = useCallback(() => {
        dispatch(
            fetchArticleList({
                replace: true,
            }),
        );
    }, [dispatch]);

    const debounceFetchData = useDebounce(fetchData, 500);

    const onChangeView = useCallback(
        (view: ArticleView) => {
            dispatch(articlePagesAction.setView(view));
        },
        [dispatch],
    );

    const onChangeOrder = useCallback(
        (newOrder: SortOrder) => {
            dispatch(articlePagesAction.setOrder(newOrder));
            dispatch(articlePagesAction.initPage(1));
            fetchData();
        },
        [dispatch, fetchData],
    );

    const onChangeSort = useCallback(
        (newSort: ArticleSortField) => {
            dispatch(articlePagesAction.setSort(newSort));
            dispatch(articlePagesAction.initPage(1));
            fetchData();
        },
        [dispatch, fetchData],
    );

    const onChangeSearch = useCallback(
        (search: string) => {
            dispatch(articlePagesAction.setSearch(search));
            dispatch(articlePagesAction.initPage(1));
            debounceFetchData();
        },
        [dispatch, debounceFetchData],
    );

    const onChangeType = useCallback(
        (value: ArticleType) => {
            dispatch(articlePagesAction.setType(value));
            dispatch(articlePagesAction.initPage(1));
            fetchData();
        },
        [dispatch, fetchData],
    );

    return {
        view,
        sort,
        order,
        search,
        type,
        onChangeView,
        onChangeOrder,
        onChangeSort,
        onChangeSearch,
        onChangeType,
    };
}
