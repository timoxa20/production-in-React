import {classNames} from "@/shared/lib/classNames/classNames";
import cls from './ArticleListItem.module.scss'
import React, {HTMLAttributeAnchorTarget, memo} from "react";
import {useTranslation} from "react-i18next";
import {Article, ArticleBlockType, ArticleTextBlock, ArticleView} from "../../model/types/article";
import {Text} from "@/shared/ui/Text/Text";
import {Icon} from "@/shared/ui/Icon/Icon";
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg'
import {Card} from "@/shared/ui/Card/Card";
import {Avatar} from "@/shared/ui/Avatar/Avatar";
import {Button, ThemeButton} from "@/shared/ui/Button/Button";
import {ArticleTextBlockComponent} from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import {RoutePath} from "@/shared/config/routeConfig/routeConfig";
import {AppLinks} from "@/shared/ui/AppLink/AppLinks";


interface ArticleListItemProps {
    className?: string;
    article?: Article;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const {
        className,
        view = ArticleView.SMALL,
        article,
        target
    } = props
    const {t} = useTranslation()
    const types = <Text className={cls.types} text={article?.type.join(', ')}/>
    const views = (
        <>
            <Text className={cls.views} text={String(article?.views)}/>
            <Icon Svg={EyeIcon}/>
        </>
    )

    if (view === ArticleView.BIG) {
        const textBlock = article?.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT
        ) as ArticleTextBlock
        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card className={cls.Card}>
                    <div className={cls.header}>
                        <Avatar size={'30px'} src={article?.user.avatar}/>
                        <Text className={cls.username} text={article?.user.username}/>
                        <Text className={cls.date} text={article?.createdAt}/>
                    </div>
                    <Text title={article?.title} className={cls.title}/>
                    {types}
                    <img className={cls.img} src={article?.img} alt={article?.title}/>
                    {textBlock && (
                        <ArticleTextBlockComponent block={textBlock} className={cls.textBlock}/>
                    ) }
                    <div className={cls.footer}>
                        <AppLinks
                            target={target}
                            to={RoutePath.article_details + article?.id}
                        >
                            <Button
                                theme={ThemeButton.OUTLINE}
                            >
                                {t('Читать дальше')}
                            </Button>
                        </AppLinks>
                        {views}
                    </div>
                </Card>
            </div>
        )
    }

    return (
        <AppLinks
            target={target}
            to={RoutePath.article_details + article?.id}
            className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
        >
            <Card className={cls.Card}>
                <div className={cls.imageWrapper}>
                    <img className={cls.image} src={article?.img} alt={article?.title}/>
                    <Text className={cls.date} text={article?.createdAt}/>
                </div>
                <div className={cls.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Text className={cls.title} text={article?.title}/>
            </Card>
        </AppLinks>
    );
});

ArticleListItem.displayName = 'ArticleListItem'