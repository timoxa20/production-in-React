import {classNames} from "shared/lib/classNames/classNames";
import cls from './ArticleDetailsPage.module.scss'
import {useTranslation} from "react-i18next";
import {memo, useCallback} from "react";
import {ArticleDetails, ArticleList} from "../../../../entities/Article";
import {useParams} from "react-router-dom";
import {Text, TextSize} from "shared/ui/Text/Text";
import {CommentList} from "../../../../entities/Comment";
import {DynamicModuleLoader, ReducerList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {getArticleComments} from "../../model/slice/articleDetailsCommentsSlice";
import {useSelector} from "react-redux";
import {getArticleCommentsIsLoading} from "../../model/selectors/comment";
import {useInitialEffect} from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import {fetchCommentsArticleById} from "../../model/services/fetchCommentsArticleById/fetchCommentsArticleById";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {AddCommentForm} from "features/addCommentForm";
import {addCommentFormArticle} from "../../model/services/addCommentFormArticle/addCommentFormArticle";
import {Page} from "widgets/Page/Page";
import {getArticleRecomendation} from "../../model/slice/articleDetailsPageRecomendationSlice";
import {getArticleRecommendationIsLoading} from "../../model/selectors/recommendations";
import {
    fetchArticleRecommendations
} from "../../model/services/fetchArticleRecomendation/fetchArticleRecomendation";
import {articleDetailsPageReducer} from "../..//model/slice";
import {
    ArticleDetailsPageHeaders
} from "./ArticleDetailsPageHeaders/ArticleDetailsPageHeaders";


interface ArticleDetailsPageProps {
    className?: string;
}

const reducer: ReducerList = {
    articleDetailsPage: articleDetailsPageReducer
}

const ArticleDetailsPage = ({className}: ArticleDetailsPageProps) => {
    const {t} = useTranslation('article')
    const {id} = useParams<{ id: string }>()
    const comments = useSelector(getArticleComments.selectAll)
    const recommend = useSelector(getArticleRecomendation.selectAll)
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading)
    const recommendIsLoading = useSelector(getArticleRecommendationIsLoading)
    const dispatch = useAppDispatch()

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentFormArticle(text))
    }, [dispatch])


    useInitialEffect(() => {
        dispatch(fetchCommentsArticleById(id))
        dispatch(fetchArticleRecommendations())
    })

    if (!id) {
        return (
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('Это недорозумение (^_^)')}
            </Page>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducer} removeAfterUnmount>
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <ArticleDetailsPageHeaders/>
                <ArticleDetails id={id}/>
                <Text
                    size={TextSize.L}
                    className={cls.commentTitle}
                    title={t('Рекомендуем')}
                />
                <ArticleList
                    articles={recommend}
                    isLoading={recommendIsLoading}
                    className={cls.recommendations}
                    target={'_blank'}
                />
                <Text
                    size={TextSize.L}
                    className={cls.commentTitle}
                    title={t('Комментарий')}
                />
                <AddCommentForm onSendComment={onSendComment}/>
                <CommentList
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage)

