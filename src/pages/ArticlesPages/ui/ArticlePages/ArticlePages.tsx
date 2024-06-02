import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticlePages.module.scss';
import { memo, useCallback } from 'react';
import {
    DynamicModuleLoader,
    ReducerList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articlePagesReducer } from '../../model/slice/articlePagesSlice';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from '@/widgets/Page';
import { fetchNextArticlePage } from '../../model/service/fetchNextArticlePage/fetchNextArticlePage';
import { initedArticlePage } from '../../model/service/initedArticlePage/initedArticlePage';
import { ArticlePagesFilter } from '../ArticlePagesFilter/ArticlePagesFilter';
import { useSearchParams } from 'react-router-dom';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';
import { ToggleFeature } from '@/shared/lib/features';
import { StickyContentLayout } from '@/shared/layouts/StickyComponentLayout';
import { ViewSelectorContainer } from '../ViewSelectorContainer/ViewSelectorContainer';
import { FiltersContainer } from '../../ui/FiltersContainer/FiltersContainer';

interface ArticlePagesProps {
    className?: string;
}

const reducers: ReducerList = {
    articlePages: articlePagesReducer,
};

const ArticlePages = ({ className }: ArticlePagesProps) => {
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlePage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initedArticlePage(searchParams));
    });

    const content = (
        <StickyContentLayout
                            left={<ViewSelectorContainer />}
                            right={<FiltersContainer />}
                            content={
                                <Page
                                    data-testid={'ArticlePage'}
                                    onScrollEnd={onLoadNextPart}
                                    className={classNames(
                                        cls.ArticlePagesRedesigned,
                                        {},
                                        [className],
                                    )}
                                >
                                    <ArticleInfiniteList className={cls.list} />
                                </Page>
                            }
                        />
    );

    return (
        <DynamicModuleLoader
            reducers={reducers}
            removeAfterUnmount={false}
        >
            {content}
        </DynamicModuleLoader>
    );
};

export default memo(ArticlePages);
