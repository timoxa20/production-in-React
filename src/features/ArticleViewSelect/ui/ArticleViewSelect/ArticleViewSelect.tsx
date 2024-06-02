import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleViewSelect.module.scss';
import { memo } from 'react';
import { ArticleView } from '@/entities/Article';

import ListIcons from '@/shared/assets/icons/burger.svg?react';
import TiledIcons from '@/shared/assets/icons/tile.svg?react';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Card } from '@/shared/ui/redesigned/Card';
import { HStack } from '@/shared/ui/Stack';

interface ArticleViewSelectProps {
    className?: string;
    view?: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icons: TiledIcons,
    },
    {
        view: ArticleView.BIG,
        icons: ListIcons,
    },
];

export const ArticleViewSelect = memo((props: ArticleViewSelectProps) => {
    const { className, view, onViewClick } = props;

    const onClickView = (newView: ArticleView) => {
        return () => {
            onViewClick?.(newView);
        };
    };

    return (
        <Card
                            className={classNames(cls.ArticleViewSelectRedesigned, {}, [
                                className,
                            ])}
                            border={'round'}
                        >
                            <HStack gap="8">
                                {viewTypes.map((viewType) => (
                                    <Icon
                                        clickable
                                        onClick={onClickView(viewType.view)}
                                        key={viewType.view}
                                        className={classNames('', {
                                            [cls.notSelected]: viewType.view !== view,
                                        })}
                                        Svg={viewType.icons}
                                    />
                                ))}
                            </HStack>
                        </Card>
    );
});

ArticleViewSelect.displayName = 'ArticleViewSelect';
