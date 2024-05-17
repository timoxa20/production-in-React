import {classNames} from "@/shared/lib/classNames/classNames";
import cls from './ArticleList.module.scss'
import {HTMLAttributeAnchorTarget, memo} from "react";
import {Article, ArticleView} from "../../model/types/article";
import {ArticleListItem} from "../ArticleListItem/ArticleListItem";
import {ArticleListItemSkeleton} from "../ArticleListItem/ArticleListItemSkeleton";
import {Text, TextSize} from "@/shared/ui/Text";
import {useTranslation} from "react-i18next";


interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
    virtualized?: boolean
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
        <ArticleListItemSkeleton className={cls.card} key={index} view={view}/>
    ));

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        view = ArticleView.SMALL,
        isLoading,
        articles,
        target,
    } = props
    const {t} = useTranslation()

    const renderArticles = (articl: Article) => (
        <ArticleListItem
            key={articl.id}
            className={cls.card}
            article={articl}
            view={view}
            target={target}
        />
    );

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text size={TextSize.L} title={t('Статьй не найденны')}/>
            </div>
        )
    }

    return (
        <div
            data-testid={'ArticleList'}
            className={classNames(cls.ArticleList, {}, [className, cls[view]])}
        >
            {articles?.length > 0
                ? articles.map(renderArticles)
                : null}
            {isLoading && getSkeletons(view)}
        </div>
    );
});

ArticleList.displayName = 'ArticleList'