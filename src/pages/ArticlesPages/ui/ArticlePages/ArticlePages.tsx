import {classNames} from "shared/lib/classNames/classNames";
import cls from './ArticlePages.module.scss'
import {memo, useCallback} from "react";
import {DynamicModuleLoader, ReducerList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {articlePagesReducer} from "../../model/slice/articlePagesSlice";
import {useInitialEffect} from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {Page} from "widgets/Page/Page";
import {fetchNextArticlePage} from "../../model/service/fetchNextArticlePage/fetchNextArticlePage";
import {initedArticlePage} from "../../model/service/initedArticlePage/initedArticlePage";
import {ArticlePagesFilter} from "../ArticlePagesFilter/ArticlePagesFilter";
import {useSearchParams} from "react-router-dom";
import {ArticleInfiniteList} from "../ArticleInfiniteList/ArticleInfiniteList";


interface ArticlePagesProps {
    className?: string;
}

const reducers: ReducerList = {
    articlePages: articlePagesReducer
}

const ArticlePages = ({className}: ArticlePagesProps) => {
    const dispatch = useAppDispatch()
    const [searchParams] = useSearchParams()

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlePage())
    }, [dispatch])

    useInitialEffect(() => {
        dispatch(initedArticlePage(searchParams))
    })

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page onScrollEnd={onLoadNextPart} className={classNames(cls.ArticlePages, {}, [className])}>
                <ArticlePagesFilter/>
                <ArticleInfiniteList className={cls.list}/>
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlePages)

