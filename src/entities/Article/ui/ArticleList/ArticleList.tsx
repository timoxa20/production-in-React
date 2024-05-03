import {classNames} from "shared/lib/classNames/classNames";
import cls from './ArticleList.module.scss'
import {memo} from "react";
import {useTranslation} from "react-i18next";
import {Article, ArticleView} from "../../model/types/article";
import {ArticleListItem} from "../ArticleListItem/ArticleListItem";
import {ArticleListItemSkeleton} from "entities/Article/ui/ArticleListItem/ArticleListItemSkeleton";


interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView
}

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        view = ArticleView.SMALL,
        isLoading,
        articles
    } = props
    const {t} = useTranslation()

    if (isLoading) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                {
                    new Array(view === ArticleView.SMALL ? 9 : 3)
                        .fill(0)
                        .map((item, index) => (
                            <ArticleListItemSkeleton className={cls.card} key={index} view={view}/>
                        ))
                }
            </div>
        )
    }

    const renderArticles = (articl: Article) => (
        <ArticleListItem key={articl.id} className={cls.card} article={articl} view={view}/>
    );


    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles?.length > 0
                ? articles.map(renderArticles)
                : null}
        </div>
    );
});

ArticleList.displayName = 'ArticleList'