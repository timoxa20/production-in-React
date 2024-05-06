import {classNames} from "shared/lib/classNames/classNames";
import cls from './ArticleDetails.module.scss'
import {useTranslation} from "react-i18next";
import {DynamicModuleLoader, ReducerList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {articleDetailsReducer} from "../../model/slice/articleDetailsSlice";
import {memo, useCallback, useEffect} from "react";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {fetchArticleById} from "../../model/secvices/fetchArticleById/fetchArticleById";
import {useSelector} from "react-redux";
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading
} from "../../model/selectors/articleDetails";
import {Text, TextAlign, TextSize, TextTheme} from "shared/ui/Text/Text";
import {Skeleton} from "shared/ui/Skeleton/Skeleton";
import {Avatar} from "shared/ui/Avatar/Avatar";
import EyeIcon from 'shared/assets/icons/eye-20-20.svg'
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg'
import {Icon} from "shared/ui/Icon/Icon";
import {ArticleBlock, ArticleBlockType} from "../../model/types/article";
import {ArticleCodeBlockComponent} from "../ArticleCodeBlockComponent/ArticleCodeBlockComponent";
import {ArticleImageBlockComponent} from "../ArticleImageBlockComponent/ArticleImageBlockComponent";
import {ArticleTextBlockComponent} from "../ArticleTextBlockComponent/ArticleTextBlockComponent";


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
    const isLoading = useSelector(getArticleDetailsIsLoading)
    const error = useSelector(getArticleDetailsError)

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.CODE:
            return <ArticleCodeBlockComponent
                key={block.id}
                block={block}
                className={cls.articleBlock}
            />
        case ArticleBlockType.IMAGE:
            return <ArticleImageBlockComponent
                key={block.id}
                block={block}
                className={cls.articleBlock}
            />
        case ArticleBlockType.TEXT:
            return <ArticleTextBlockComponent
                key={block.id}
                block={block}
                className={cls.articleBlock}
            />
        default:
            return null;
        }

    }, [])

    useEffect(() => {
        if (id != null && __PROJECT__ !== 'storybook') {
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
            <>
                <div className={cls.avatarWrapper}>
                    <Avatar
                        size={'200'}
                        src={article?.img}
                        className={cls.avatar}
                    />
                </div>
                <Text
                    className={cls.title}
                    title={article?.title}
                    text={article?.subtitle}
                    size={TextSize.L}
                />
                <div className={cls.articleInfo}>
                    <Icon Svg={EyeIcon} className={cls.icon}/>
                    <Text text={String(article?.views)}/>
                </div>
                <div className={cls.articleInfo}>
                    <Icon Svg={CalendarIcon} className={cls.icon}/>
                    <Text text={article?.createdAt}/>
                </div>
                {article?.blocks.map(renderBlock)}
            </>
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

ArticleDetails.displayName = 'ArticleDetails'

