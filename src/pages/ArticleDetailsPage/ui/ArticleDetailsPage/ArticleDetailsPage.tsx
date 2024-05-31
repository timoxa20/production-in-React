import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleDetails } from '@/entities/Article';
import { useParams } from 'react-router-dom';
import {
    DynamicModuleLoader,
    ReducerList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from '@/widgets/Page';
import { articleDetailsPageReducer } from '../../model/slice';
import { ArticleDetailsPageHeaders } from './ArticleDetailsPageHeaders/ArticleDetailsPageHeaders';
import { VStack } from '@/shared/ui/Stack';
import { ArticleReacommendationList } from '@/features/articleReacommendationList';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleRating } from '@/features/articleRating';
import { ToggleFeature } from '@/shared/lib/features';
import { StickyContentLayout } from '@/shared/layouts/StickyComponentLayout';
import { ArticleDetailsContainer } from '@/pages/ArticleDetailsPage/ui/ArticleDetailsContainer/ArticleDetailsContainer';
import { AdditionalInfoContainer } from '@/pages/ArticleDetailsPage/ui/AditiaonalInfoContainer/AditiaonalInfoContainer';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducer: ReducerList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('article');
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return (
            <Page
                className={classNames(cls.ArticleDetailsPage, {}, [className])}
            >
                {t('Это недорозумение (^_^)')}
            </Page>
        );
    }

    return (
        <DynamicModuleLoader
            reducers={reducer}
            removeAfterUnmount
        >
            <ToggleFeature
                feature={'isAppRedesigned'}
                on={
                    <StickyContentLayout
                        content={
                            <Page
                                className={classNames(
                                    cls.ArticleDetailsPage,
                                    {},
                                    [className],
                                )}
                            >
                                <VStack
                                    gap="16"
                                    max
                                >
                                    <ArticleDetailsContainer />
                                    <ArticleDetailsPageHeaders />
                                    <ArticleRating articleId={id} />
                                    <ArticleReacommendationList />
                                    <ArticleDetailsComments id={id} />
                                </VStack>
                            </Page>
                        }
                        right={<AdditionalInfoContainer />}
                    />
                }
                off={
                    <Page
                        className={classNames(cls.ArticleDetailsPage, {}, [
                            className,
                        ])}
                    >
                        <VStack
                            gap="16"
                            max
                        >
                            <ArticleDetailsPageHeaders />
                            <ArticleDetails id={id} />
                            <ToggleFeature
                                on={<ArticleDetailsPageHeaders />}
                                off={<ArticleDetailsPageHeaders />}
                                feature={'isArticleRatingEnabled'}
                            />
                            <ArticleRating articleId={id} />
                            <ArticleReacommendationList />
                            <ArticleDetailsComments id={id} />
                        </VStack>
                    </Page>
                }
            />
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
