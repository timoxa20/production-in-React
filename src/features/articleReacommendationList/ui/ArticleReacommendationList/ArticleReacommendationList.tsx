import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { ArticleList } from '@/entities/Article';
import { VStack } from '@/shared/ui/Stack';
import { useArticleRecommendationList } from '../../api/articleRecommendationApi';
import { ToggleFeature } from '@/shared/lib/features';

interface ArticleReacommendationListProps {
    className?: string;
}

export const ArticleReacommendationList = memo(
    (props: ArticleReacommendationListProps) => {
        const { className } = props;
        const { t } = useTranslation('article');
        const {
            data: articles,
            isLoading,
            error,
        } = useArticleRecommendationList(3);

        if (isLoading || error || !articles) {
            return null;
        }

        return (
            <VStack
                data-testid="ArticleRecommendationList"
                gap="8"
                className={classNames('', {}, [className])}
            >
                <Text
                                            size={'l'}
                                            title={t('Рекомендуем')}
                                        />

                <ArticleList
                    articles={articles}
                    target={'_blank'}
                />
            </VStack>
        );
    },
);

ArticleReacommendationList.displayName = 'ArticleRecommendationList';
