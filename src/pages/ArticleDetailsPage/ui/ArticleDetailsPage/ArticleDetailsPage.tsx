import {classNames} from "shared/lib/classNames/classNames";
import cls from './ArticleDetailsPage.module.scss'
import {useTranslation} from "react-i18next";
import {memo, useCallback} from "react";
import {ArticleDetails} from "../../../../entities/Article";
import {useNavigate, useParams} from "react-router-dom";
import {Text} from "shared/ui/Text/Text";
import {CommentList} from "entities/Comment";
import {DynamicModuleLoader, ReducerList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {articleDetailsCommentReducer, getArticleComments} from "../../model/slice/articleDetailsCommentsSlice";
import {useSelector} from "react-redux";
import {getArticleCommentsIsLoading} from "../../model/selectors/comment";
import {useInitialEffect} from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import {
    fetchCommentsArticleById
} from "../../model/services/fetchCommentsArticleById/fetchCommentsArticleById";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {AddCommentForm} from "features/addCommentForm";
import {
    addCommentFormArticle
} from "../../model/services/addCommentFormArticle/addCommentFormArticle";
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import {Page} from "shared/ui/Page/Page";


interface ArticleDetailsPageProps {
    className?: string;
}

const reducer: ReducerList = {
    articleDetailsComments: articleDetailsCommentReducer
}

const ArticleDetailsPage = ({className}: ArticleDetailsPageProps) => {
    const {t} = useTranslation('article')
    const {id} = useParams<{ id: string }>()
    const comments = useSelector(getArticleComments.selectAll)
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentFormArticle(text))
    }, [dispatch])

    const onToBackList = useCallback(() => {
        navigate(RoutePath.articles)
    }, [navigate])

    useInitialEffect(() => {
        dispatch(fetchCommentsArticleById(id))
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
                <Button onClick={onToBackList} theme={ThemeButton.OUTLINE}>
                    {t('Назад к списку')}
                </Button>
                <ArticleDetails id={id}/>
                <Text className={cls.commentTitle} title={t('Комментарий')}/>
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

