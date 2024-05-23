import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getArticle } from '../../model/slice/articlePagesSlice';
import {
    getArticlePagesError,
    getArticlePagesIsLoading,
    getArticlePagesView,
} from '../../model/selectors/articlePagesSelector';
import { ArticleList } from '@/entities/Article';
import { Text } from '@/shared/ui/deprecated/Text';

interface ArticleInfiniteListProps {
    className?: string;
}

export const ArticleInfiniteList = memo(
    ({ className }: ArticleInfiniteListProps) => {
        const { t } = useTranslation();
        const article = useSelector(getArticle.selectAll);
        const error = useSelector(getArticlePagesError);
        const isLoading = useSelector(getArticlePagesIsLoading);
        const view = useSelector(getArticlePagesView);

        if (error) {
            return <Text title={t('Ошибка при загрузке статей')} />;
        }

        return (
            <ArticleList
                className={className}
                isLoading={isLoading}
                view={view}
                articles={article}
            />
        );
    },
);

ArticleInfiniteList.displayName = 'ArticleInfiniteList';
