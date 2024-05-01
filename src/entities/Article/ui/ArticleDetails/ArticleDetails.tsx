import {classNames} from "shared/lib/classNames/classNames";
import cls from './ArticleDetails.module.scss'
import {useTranslation} from "react-i18next";
import {DynamicModuleLoader, ReducerList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {articleDetailsReducer} from "../../model/slice/articleDetailsSlice";
import {memo, useEffect} from "react";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {fetchArticleById} from "../..//model/secvices/fetchArticleById/fetchArticleById";
import {useSelector} from "react-redux";
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading
} from "../../model/selectors/articleDetails";
import {Text, TextAlign, TextTheme} from "shared/ui/Text/Text";
import {Skeleton} from "shared/ui/Skeleton/Skeleton";


interface ArticleDetailsProps {
    className?: string;
    id?: string
}

const reducers: ReducerList = {
    articleDetails: articleDetailsReducer
}

export const ArticleDetails = memo(({className, id}: ArticleDetailsProps) => {
    const {t} = useTranslation()
    const dispatch = useAppDispatch()
    const article = useSelector(getArticleDetailsData)
    // const isLoading = useSelector(getArticleDetailsIsLoading)
    const isLoading = true
    const error = useSelector(getArticleDetailsError)

    useEffect(() => {
        if (id != null) {
            dispatch(fetchArticleById(id))
        }
    }, [dispatch, id])

    let content;

    if (isLoading) {
        content = (
            <>
                <Skeleton className={cls.avatar} width={200} height={200} border={'50%'}/>
                <Skeleton className={cls.title} width={300} height={32}/>
                <Skeleton className={cls.skeleton} width={600} height={24}/>
                <Skeleton className={cls.skeleton} width='100%' height={200}/>
                <Skeleton className={cls.skeleton} width='100%' height={200}/>
            </>

        )
    } else if (error) {
        content = (
            <Text
                align={TextAlign.CENTER}
                title={t('Пойзошла ошибка')}
                theme={TextTheme.ERROR}
            />
        )
    } else {
        content = (
            <div>
                Article Details
            </div>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
});

