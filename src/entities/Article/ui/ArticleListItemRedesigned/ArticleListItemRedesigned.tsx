import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleListItemRedesigned.module.scss';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleListItemProps } from '../ArticleListItem/ArticleListItem';
import { Text } from '@/shared/ui/redesigned/Text';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Card } from '@/shared/ui/redesigned/Card';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { AppLinks } from '@/shared/ui/redesigned/AppLink';
import { getRouteArticleDetails } from '@/shared/const/route';
import { Button } from '@/shared/ui/redesigned/Button';
import EyeIcon from '@/shared/assets/icons/eye.svg?react';
import { HStack, VStack } from '@/shared/ui/Stack';
import {
    ArticleBlockType,
    ArticleTextBlock,
    ArticleView,
} from '../../model/types/article';

export const ArticleListItemRedesigned = memo((props: ArticleListItemProps) => {
    const { article, target, view, className } = props;
    const { t } = useTranslation();

    const userInfo = (
        <>
            <Avatar
                size={'32px'}
                src={article.user.avatar}
                className={cls.avatar}
            />
            <Text
                bold
                text={article.user.username}
            />
        </>
    );

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
                        {userInfo}
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
    if (view === ArticleView.SMALL) {
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
                <Card
                    padding="0"
                    className={cls.Card}
                    border="round"
                >
                    <AppImage
                        fallback={
                            <Skeleton
                                width={'100%'}
                                height={200}
                            />
                        }
                        className={cls.image}
                        src={article?.img}
                        alt={article?.title}
                    />
                    <VStack
                        className={cls.info}
                        gap="4"
                    >
                        <Text
                            title={article.title}
                            className={cls.title}
                        />
                        <VStack
                            gap="4"
                            className={cls.footer}
                            max
                        >
                            <HStack
                                justify="between"
                                max
                            >
                                <Text
                                    text={article.createdAt}
                                    className={cls.date}
                                />
                                {views}
                            </HStack>
                            <HStack gap="4">{userInfo}</HStack>
                        </VStack>
                    </VStack>
                </Card>
            </AppLinks>
        );
    }
});

ArticleListItemRedesigned.displayName = 'ArticleListItemRedesigned';
