import {classNames} from "shared/lib/classNames/classNames";
import {memo, useCallback} from "react";
import {useTranslation} from "react-i18next";
import {Text, TextSize} from "shared/ui/Text/Text";
import {AddCommentForm} from "features/addCommentForm";
import {CommentList} from "../../../../entities/Comment";
import {useSelector} from "react-redux";
import {getArticleComments} from "../../model/slice/articleDetailsCommentsSlice";
import {getArticleCommentsIsLoading} from "../../model/selectors/comment";
import {
    addCommentFormArticle
} from "../../model/services/addCommentFormArticle/addCommentFormArticle";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {useInitialEffect} from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import {
    fetchCommentsArticleById
} from "../../model/services/fetchCommentsArticleById/fetchCommentsArticleById";
import {VStack} from "shared/ui/Stack";


interface ArticleDetailsCommentsProps {
    className?: string;
    id: string
}

export const ArticleDetailsComments = memo(({className, id}: ArticleDetailsCommentsProps) => {
    const {t} = useTranslation('article')
    const comments = useSelector(getArticleComments.selectAll)
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading)
    const dispatch = useAppDispatch()

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentFormArticle(text))
    }, [dispatch])

    useInitialEffect(() => {
        dispatch(fetchCommentsArticleById(id))
    })

    return (
        <VStack max gap='8' className={classNames('', {}, [className])}>
            <Text
                size={TextSize.L}
                title={t('Комментарий')}
            />
            <AddCommentForm onSendComment={onSendComment}/>
            <CommentList
                isLoading={commentsIsLoading}
                comments={comments}
            />
        </VStack>
    );
});

ArticleDetailsComments.displayName = 'ArticleDetailsComments'