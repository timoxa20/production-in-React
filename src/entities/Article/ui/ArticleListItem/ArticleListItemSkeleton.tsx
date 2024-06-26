import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleListItem.module.scss';
import { memo } from 'react';
import { ArticleView } from '../../model/types/article';
import { Card as CardRedesigned } from '@/shared/ui/redesigned/Card';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';

interface ArticleListItemSkeletonProps {
    className?: string;
    view?: ArticleView;
}

export const ArticleListItemSkeleton = memo(
    (props: ArticleListItemSkeletonProps) => {
        const { className, view = ArticleView.SMALL } = props;

        const mainClass = cls.ArticleListItemRedesigned;

        const Skeleton = SkeletonRedesigned;
        const Card = CardRedesigned;

        if (view === ArticleView.BIG) {
            return (
                <div
                    className={classNames(mainClass, {}, [
                        className,
                        cls[view],
                    ])}
                >
                    <Card className={cls.Card}>
                        <div className={cls.header}>
                            <Skeleton
                                border={'50%'}
                                width={30}
                                height={30}
                            />
                            <Skeleton
                                width={150}
                                height={16}
                                className={cls.username}
                            />
                            <Skeleton
                                width={150}
                                height={16}
                                className={cls.date}
                            />
                        </div>
                        <Skeleton
                            width={250}
                            height={24}
                            className={cls.title}
                        />
                        <Skeleton
                            width={200}
                            className={cls.img}
                        />
                        <div className={cls.footer}>
                            <Skeleton
                                width={200}
                                height={36}
                            ></Skeleton>
                        </div>
                    </Card>
                </div>
            );
        }

        return (
            <div className={classNames(mainClass, {}, [className, cls[view]])}>
                <Card className={cls.Card}>
                    <div className={cls.imageWrapper}>
                        <Skeleton
                            width={200}
                            height={200}
                            className={cls.image}
                        />
                    </div>
                    <div className={cls.infoWrapper}>
                        <Skeleton
                            width={130}
                            height={16}
                        />
                    </div>
                    <Skeleton
                        width={150}
                        height={16}
                        className={cls.title}
                    />
                </Card>
            </div>
        );
    },
);

ArticleListItemSkeleton.displayName = 'ArticleListItemSkeleton';
