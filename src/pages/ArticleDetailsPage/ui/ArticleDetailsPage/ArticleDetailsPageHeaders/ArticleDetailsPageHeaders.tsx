import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from '@/shared/ui/deprecated/Button';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from '@/entities/Article';
import { getCanEditArticle } from '../../../model/selectors/article';
import { HStack } from '@/shared/ui/Stack';
import { getRouteArticle, getRouteArticleDetails } from '@/shared/const/route';

interface ArticleDetailsPageHeadersProps {
    className?: string;
}

export const ArticleDetailsPageHeaders = memo(
    ({ className }: ArticleDetailsPageHeadersProps) => {
        const { t } = useTranslation('article');
        const navigate = useNavigate();
        const article = useSelector(getArticleDetailsData);
        const canEdit = useSelector(getCanEditArticle);

        const onToBackList = useCallback(() => {
            navigate(getRouteArticle());
        }, [navigate]);

        const onEditArticle = useCallback(() => {
            if (article) {
                navigate(getRouteArticleDetails(article?.id));
            }
        }, [article, navigate]);

        return (
            <HStack
                justify="between"
                max
                className={classNames('', {}, [className])}
            >
                <Button
                    onClick={onToBackList}
                    theme={ThemeButton.OUTLINE}
                >
                    {t('Назад к списку')}
                </Button>
                {canEdit && (
                    <Button
                        onClick={onEditArticle}
                        theme={ThemeButton.OUTLINE}
                    >
                        {t('Редактировать')}
                    </Button>
                )}
            </HStack>
        );
    },
);

ArticleDetailsPageHeaders.displayName = 'ArticleDetailsPageHeaders';
