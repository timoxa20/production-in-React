import {classNames} from "shared/lib/classNames/classNames";
import cls from './ArticlePages.module.scss'
import {memo, useCallback} from "react";
import {ArticleList} from "../../../../entities/Article";
import {DynamicModuleLoader, ReducerList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {articlePagesReducer, getArticle} from "pages/ArticlesPages/model/slice/articlePagesSlice";
import {useInitialEffect} from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {useSelector} from "react-redux";
import {
    getArticlePagesError,
    getArticlePagesIsLoading,
    getArticlePagesView
} from "../../model/selectors/articlePagesSelector";
import {Page} from "widgets/Page/Page";
import {fetchNextArticlePage} from "../../model/service/fetchNextArticlePage/fetchNextArticlePage";
import {initedArticlePage} from "../../model/service/initedArticlePage/initedArticlePage";
import {ArticlePagesFilter} from "pages/ArticlesPages/ui/ArticlePagesFilter/ArticlePagesFilter";
import { useSearchParams } from "react-router-dom";


interface ArticlePagesProps {
    className?: string;
}

const reducers: ReducerList = {
    articlePages: articlePagesReducer
}

const ArticlePages = ({className}: ArticlePagesProps) => {
    const dispatch = useAppDispatch()
    const article = useSelector(getArticle.selectAll)
    const error = useSelector(getArticlePagesError)
    const isLoading = useSelector(getArticlePagesIsLoading)
    const view = useSelector(getArticlePagesView)
    const [searchParams] = useSearchParams()

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlePage())
    }, [dispatch])


    useInitialEffect(() => {
        dispatch(initedArticlePage(searchParams))
    })

    if (error) {
        return null
    }


    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page onScrollEnd={onLoadNextPart} className={classNames(cls.ArticlePages, {}, [className])}>
                <ArticlePagesFilter />
                <ArticleList
                    className={cls.list}
                    isLoading={isLoading}
                    view={view}
                    articles={article}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlePages)

