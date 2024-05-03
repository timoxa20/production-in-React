import {classNames} from "shared/lib/classNames/classNames";
import cls from './ArticleDetailsPage.module.scss'
import {useTranslation} from "react-i18next";
import {memo, useCallback} from "react";
import {ArticleDetails} from "../../../../entities/Article";
import {useParams} from "react-router-dom";
import {Text} from "shared/ui/Text/Text";
import {CommentList} from "entities/Comment";
import {
    DynamicModuleLoader,
    ReducerList
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
    articleDetailsCommentReducer,
    getArticleComments
} from "../../model/slice/articleDetailsCommentsSlice";
import {useSelector} from "react-redux";
import {
    getArticleCommentsIsLoading
} from "../../model/selectors/comment";
import {useInitialEffect} from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import {
    fetchCommentsArticleById
} from "pages/ArticleDetailsPage/model/services/fetchCommentsArticleById/fetchCommentsArticleById";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {AddCommentForm} from "features/addCommentForm";
import {
    addCommentFormArticle
} from "pages/ArticleDetailsPage/model/services/addCommentFormArticle/addCommentFormArticle";


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

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentFormArticle(text))
    }, [dispatch])

    useInitialEffect(() => {
        dispatch(fetchCommentsArticleById(id))
    })

    if (!id) {
        return (
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('Это недорозумение (^_^)')}
            </div>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducer} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <ArticleDetails id={id}/>
                <Text className={cls.commentTitle} title={t('Комментарий')}/>
                <AddCommentForm onSendComment={onSendComment}/>
                <CommentList
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage)

