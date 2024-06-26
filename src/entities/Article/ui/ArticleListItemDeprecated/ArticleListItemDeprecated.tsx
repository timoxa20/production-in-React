import { classNames } from '@/shared/lib/classNames/classNames';
import cls from '../ArticleListItem/ArticleListItem.module.scss';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from '@/shared/ui/deprecated/Text';
import { Icon } from '@/shared/ui/deprecated/Icon';
import { Card } from '@/shared/ui/deprecated/Card';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { AppLinks } from '@/shared/ui/deprecated/AppLink';
import { getRouteArticleDetails } from '@/shared/const/route';
import { Button } from '@/shared/ui/redesigned/Button';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg?react';
import { ArticleListItemProps } from '../ArticleListItem/ArticleListItem';
import {
    ArticleBlockType,
    ArticleTextBlock,
    ArticleView,
} from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

export const ArticleListItemDeprecated = memo((props: ArticleListItemProps) => {
    const { className, view = ArticleView.SMALL, article, target } = props;
    const { t } = useTranslation();
    const types = (
        <Text
            className={cls.types}
            text={article?.type.join(', ')}
        />
    );
    const views = (
        <>
            <Text
                className={cls.views}
                text={String(article?.views)}
            />
            <Icon Svg={EyeIcon} />
        </>
    );

    if (view === ArticleView.BIG) {
        const textBlock = article?.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;
        return (
            <div
                data-testid="ArticleListItem"
                className={classNames(cls.ArticleListItem, {}, [
                    className,
                    cls[view],
                ])}
            >
                <Card className={cls.Card}>
                    <div className={cls.header}>
                        <Avatar
                            size={'30px'}
                            src={article?.user.avatar}
                        />
                        <Text
                            className={cls.username}
                            text={article?.user.username}
                        />
                        <Text
                            className={cls.date}
                            text={article?.createdAt}
                        />
                    </div>
                    <Text
                        title={article?.title}
                        className={cls.title}
                    />
                    {types}
                    <AppImage
                        fallback={
                            <Skeleton
                                width={'100%'}
                                height={250}
                            />
                        }
                        className={cls.img}
                        src={article?.img}
                        alt={article?.title}
                    />
                    {textBlock && (
                        <ArticleTextBlockComponent
                            block={textBlock}
                            className={cls.textBlock}
                        />
                    )}
                    <div className={cls.footer}>
                        <AppLinks
                            target={target}
                            to={getRouteArticleDetails(article?.id)}
                        >
                            <Button variant={'outline'}>
                                {t('Читать дальше')}
                            </Button>
                        </AppLinks>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <AppLinks
            data-testid="ArticleListItem"
            target={target}
            to={getRouteArticleDetails(article?.id)}
            className={classNames(cls.ArticleListItem, {}, [
                className,
                cls[view],
            ])}
        >
            <Card className={cls.Card}>
                <div className={cls.imageWrapper}>
                    <AppImage
                        fallback={
                            <Skeleton
                                width={200}
                                height={200}
                            />
                        }
                        className={cls.image}
                        src={article?.img}
                        alt={article?.title}
                    />
                    <Text
                        className={cls.date}
                        text={article?.createdAt}
                    />
                </div>
                <div className={cls.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Text
                    className={cls.title}
                    text={article?.title}
                />
            </Card>
        </AppLinks>
    );
});

ArticleListItemDeprecated.displayName = 'ArticleListItemDeprecated';
