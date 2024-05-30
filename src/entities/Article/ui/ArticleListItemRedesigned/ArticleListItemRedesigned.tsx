import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleListItemRedesigned.module.scss';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleListItemProps } from '../ArticleListItem/ArticleListItem';
import { Text } from '@/shared/ui/redesigned/Text';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { ArticleView } from '@/entities/Article';
import {
    ArticleBlockType,
    ArticleTextBlock,
} from '@/entities/Article/model/types/article';
import { Card } from '@/shared/ui/redesigned/Card';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { AppLinks } from '@/shared/ui/redesigned/AppLink';
import { getRouteArticleDetails } from '@/shared/const/route';
import { Button } from '@/shared/ui/redesigned/Button';
import EyeIcon from '@/shared/assets/icons/eye.svg?react';
import { HStack, VStack } from '@/shared/ui/Stack';

export const ArticleListItemRedesigned = memo((props: ArticleListItemProps) => {
    const { article, target, view, className } = props;
    const { t } = useTranslation();

    const types = (
        <Text
            className={cls.types}
            text={article?.type.join(', ')}
        />
    );
    const views = (
        <HStack gap="8">
            <Icon Svg={EyeIcon} />
            <Text
                className={cls.views}
                text={String(article?.views)}
            />
        </HStack>
    );

    if (view === ArticleView.BIG) {
        const textBlock = article?.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;
        return (
            <Card
                padding="24"
                max
                data-testid="ArticleListItem"
                className={classNames(cls.ArticleListItem, {}, [
                    className,
                    cls[view],
                ])}
            >
                <VStack
                    gap="16"
                    max
                >
                    <HStack
                        gap="8"
                        max
                    >
                        <Avatar
                            size={'32px'}
                            src={article?.user.avatar}
                        />
                        <Text
                            bold
                            text={article?.user.username}
                        />
                        <Text text={article?.createdAt} />
                    </HStack>
                    <Text
                        bold
                        title={article?.title}
                        className={cls.title}
                    />
                    <Text
                        size="s"
                        title={article?.subtitle}
                    />
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
                    {types}
                    {textBlock?.paragraphs && (
                        <Text
                            className={cls.textBlock}
                            text={textBlock.paragraphs.slice(0, 2).join(' ')}
                        />
                    )}
                    <HStack
                        max
                        justify={'between'}
                    >
                        <AppLinks
                            target={target}
                            to={getRouteArticleDetails(article?.id)}
                        >
                            <Button variant={'outline'}>
                                {t('Читать дальше')}
                            </Button>
                        </AppLinks>
                        {views}
                    </HStack>
                </VStack>
            </Card>
        );
    }

    return (
        <AppLinks
            data-testid="ArticleListItem"
            target={target}
            to={getRouteArticleDetails(article?.id)}
            className={classNames(cls.ArticleListItem, {}, [className])}
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
