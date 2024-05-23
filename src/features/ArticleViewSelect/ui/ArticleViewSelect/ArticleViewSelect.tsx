import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleViewSelect.module.scss';
import { memo } from 'react';
import { ArticleView } from '@/entities/Article';
import ListIcons from '@/shared/assets/icons/list-24-24.svg?react';
import TiledIcons from '@/shared/assets/icons/tiled-24-24.svg?react';
import { Button, ThemeButton } from '@/shared/ui/deprecated/Button';
import { Icon } from '@/shared/ui/deprecated/Icon';

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
        <div className={classNames(cls.ArticleViewSelect, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    key={viewType.view}
                    theme={ThemeButton.CLEAR}
                    onClick={onClickView(viewType.view)}
                >
                    <Icon
                        height={24}
                        width={24}
                        className={classNames('', {
                            [cls.notSelected]: viewType.view !== view,
                        })}
                        Svg={viewType.icons}
                    />
                </Button>
            ))}
        </div>
    );
});

ArticleViewSelect.displayName = 'ArticleViewSelect';
