import {memo, useCallback} from "react";
import {useTranslation} from "react-i18next";
import {RatingCard} from "@/entities/Rating";
import {useGetArticleRating, useRateArticle} from "../../api/ArticleRatingApi";
import {useSelector} from "react-redux";
import {getUserAuthData} from "@/entities/User";
import {Skeleton} from "@/shared/ui/Skeleton";


export interface ArticleRatingProps {
    className?: string;
    articleId: string
}

export const ArticleRating = ({className, articleId}: ArticleRatingProps) => {
    const {t} = useTranslation()
    const userData = useSelector(getUserAuthData)
    const {data, isLoading} = useGetArticleRating({
        articleId,
        userId: userData?.id ?? ''
    })

    const [rateArticleMutation] = useRateArticle()

    const handleRateArticle = useCallback((startCount: number, feedback?: string) => {
        try {
            rateArticleMutation({
                userId: userData?.id ?? '',
                articleId,
                rate: startCount,
                feedback,
            })
        } catch (e) {
            console.log(e)
        }

    }, [articleId, rateArticleMutation, userData?.id])

    const onAccept = useCallback((startCount: number, feedback?: string) => {
        handleRateArticle(startCount, feedback)
    }, [handleRateArticle])

    const onCancel = useCallback((startCount: number) => {
        handleRateArticle(startCount)
    }, [handleRateArticle])

    const rating = data?.[0]

    if (isLoading) {
        return (
            <Skeleton width='100%' height={120}/>
        )
    }

    return (
        <RatingCard
            onCancel={onCancel}
            onAccept={onAccept}
            rate={rating?.rate}
            className={className}
            title={t('Оцените статью')}
            feedbackTitle={t('Оставьте свой отзыв о статье, это поможет улучшить качество')}
            hasFeedback
        />
    );
};

export default memo(ArticleRating)