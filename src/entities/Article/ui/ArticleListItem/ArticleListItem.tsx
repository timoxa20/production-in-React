import {classNames} from "shared/lib/classNames/classNames";
import cls from './ArticleListItem.module.scss'
import {memo, useCallback} from "react";
import {useTranslation} from "react-i18next";
import {Article, ArticleBlockType, ArticleTextBlock, ArticleView} from "../../model/types/article";
import {Text} from "shared/ui/Text/Text";
import {Icon} from "shared/ui/Icon/Icon";
import EyeIcon from 'shared/assets/icons/eye-20-20.svg'
import {Card} from "shared/ui/Card/Card";
import {Avatar} from "shared/ui/Avatar/Avatar";
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {ArticleTextBlockComponent} from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import {useNavigate} from "react-router-dom";
import {RoutePath} from "shared/config/routeConfig/routeConfig";


interface ArticleListItemProps {
    className?: string;
    article?: Article;
    view?: ArticleView
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const {
        className,
        view = ArticleView.SMALL,
        article
    } = props
    const {t} = useTranslation()
    const types = <Text className={cls.types} text={article?.type.join(', ')}/>
    const views = (
        <>
            <Text className={cls.views} text={String(article?.views)}/>
            <Icon Svg={EyeIcon}/>
        </>
    )
    const navigate = useNavigate()

    const onOpenArticle = useCallback(() => {
        navigate(RoutePath.article_details + article?.id)
    }, [article?.id, navigate])

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
                        <Button
                            onClick={onOpenArticle}
                            theme={ThemeButton.OUTLINE}
                        >
                            {t('Читать дальше')}
                        </Button>
                        {views}
                    </div>
                </Card>
            </div>
        )
    }

    return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <Card onClick={onOpenArticle} className={cls.Card}>
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
        </div>
    );
});