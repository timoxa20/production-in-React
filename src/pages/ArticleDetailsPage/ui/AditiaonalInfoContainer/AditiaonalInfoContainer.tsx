import { memo, useCallback } from 'react';
import { ArticleAdditionInfo } from '@/widgets/ArticleAditionInfo';
import { Card } from '@/shared/ui/redesigned/Card';
import cls from './AditiaonalInfoContainer.module.scss';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from '@/entities/Article';
import { useNavigate } from 'react-router-dom';
import { getRouteArticleDetails } from '@/shared/const/route';

export const AdditionalInfoContainer = memo(() => {
    const article = useSelector(getArticleDetailsData);
    const navigate = useNavigate();

    const onEditArticle = useCallback(() => {
        if (article) {
            navigate(getRouteArticleDetails(article?.id));
        }
    }, [article, navigate]);

    if (!article) {
        return null;
    }

    return (
        <Card
            padding="24"
            border="partial"
            className={cls.card}
        >
            <ArticleAdditionInfo
                onEdit={onEditArticle}
                views={article.views}
                createAt={article.createdAt}
                author={article.user}
            />
        </Card>
    );
});

AdditionalInfoContainer.displayName = 'AdditionalInfoContainer';
