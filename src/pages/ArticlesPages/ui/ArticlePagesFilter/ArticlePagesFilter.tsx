import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticlePagesFilter.module.scss';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
    getArticlePagesOrder,
    getArticlePagesSearch,
    getArticlePagesSort,
    getArticlePagesType,
    getArticlePagesView,
} from '../../model/selectors/articlePagesSelector';
import { articlePagesAction } from '../../model/slice/articlePagesSlice';
import { fetchArticleList } from '../../model/service/fetchArticleList';
import { ArticleSortField, ArticleType, ArticleView } from '@/entities/Article';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Card } from '@/shared/ui/deprecated/Card';
import { SortOrder } from '@/shared/types';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { ArticleViewSelect } from '@/features/ArticleViewSelect';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { Input } from '@/shared/ui/deprecated/Input';

interface ArticlePagesFilterProps {
    className?: string;
}

export const ArticlePagesFilter = memo(
    ({ className }: ArticlePagesFilterProps) => {
        const { t } = useTranslation();
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

        return (
            <div
                className={classNames(cls.ArticlePagesFilter, {}, [className])}
            >
                <div className={cls.sortWrapper}>
                    <ArticleSortSelector
                        sort={sort}
                        order={order}
                        onChangeOrder={onChangeOrder}
                        onChangeSort={onChangeSort}
                    />
                    <ArticleViewSelect
                        view={view}
                        onViewClick={onChangeView}
                    />
                </div>
                <Card className={cls.search}>
                    <Input
                        value={search}
                        onChange={onChangeSearch}
                        placeholder={t('Поиск')}
                    />
                </Card>
                <ArticleTypeTabs
                    value={type}
                    onChangeType={onChangeType}
                />
            </div>
        );
    },
);

ArticlePagesFilter.displayName = 'ArticlePagesFilter';
