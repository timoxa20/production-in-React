import {classNames} from "shared/lib/classNames/classNames";
import cls from './ArticlePages.module.scss'
import {memo, useCallback} from "react";
import {ArticleList, ArticleView} from "entities/Article";
import {DynamicModuleLoader, ReducerList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {articlePagesAction, articlePagesReducer, getArticle} from "pages/ArticlesPages/model/slice/articlePagesSlice";
import {useInitialEffect} from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {fetchArticleList} from "../../model/service/fetchArticleList";
import {useSelector} from "react-redux";
import {
    getArticlePagesError,
    getArticlePagesIsLoading,
    getArticlePagesView
} from "../../model/selectors/articlePagesSelector";
import {ArticleViewSelect} from "features/ArticleViewSelect/ArticleViewSelect";
import {Page} from "shared/ui/Page/Page";
import {fetchNextArticlePage} from "pages/ArticlesPages/model/service/fetchNextArticlePage/fetchNextArticlePage";


interface ArticlePagesProps {
    className?: string;
}

const reducers: ReducerList = {
    articlePages: articlePagesReducer
}

const ArticlePages = ({className}: ArticlePagesProps) => {
    const dispatch = useAppDispatch()
    const article = useSelector(getArticle.selectAll)
    const view = useSelector(getArticlePagesView)
    const error = useSelector(getArticlePagesError)
    const isLoading = useSelector(getArticlePagesIsLoading)

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlePagesAction.setView(view))
    }, [dispatch])

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlePage())
    }, [dispatch])


    useInitialEffect(() => {
        dispatch(articlePagesAction.initState())
        dispatch(fetchArticleList({
            page: 1
        }))
    })

    if (error) {
        return null
    }


    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page onScrollEnd={onLoadNextPart} className={classNames(cls.ArticlePages, {}, [className])}>
                <ArticleViewSelect view={view} onViewClick={onChangeView}/>
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={article}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlePages)

