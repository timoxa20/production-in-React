import {classNames} from "@/shared/lib/classNames/classNames";
import cls from './ArticleDetailsPage.module.scss'
import {useTranslation} from "react-i18next";
import {memo} from "react";
import {ArticleDetails} from "@/entities/Article";
import {useParams} from "react-router-dom";
import {DynamicModuleLoader, ReducerList} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {Page} from "@/widgets/Page";
import {articleDetailsPageReducer} from "../../model/slice";
import {ArticleDetailsPageHeaders} from "./ArticleDetailsPageHeaders/ArticleDetailsPageHeaders";
import {VStack} from "@/shared/ui/Stack";
import {ArticleReacommendationList} from "@/features/articleReacommendationList";
import {ArticleDetailsComments} from "../ArticleDetailsComments/ArticleDetailsComments";
import {ArticleRating} from "@/features/articleRating";


interface ArticleDetailsPageProps {
    className?: string;
}

const reducer: ReducerList = {
    articleDetailsPage: articleDetailsPageReducer
}

const ArticleDetailsPage = ({className}: ArticleDetailsPageProps) => {
    const {t} = useTranslation('article')
    const {id} = useParams<{ id: string }>()

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
                <VStack gap='16' max>
                    <ArticleDetailsPageHeaders/>
                    <ArticleDetails id={id}/>
                    <ArticleRating articleId={id}/>
                    <ArticleReacommendationList/>
                    <ArticleDetailsComments id={id}/>
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage)

