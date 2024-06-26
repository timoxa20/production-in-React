import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './StarRating.module.scss';
import { memo, useState } from 'react';
import { Icon } from '../../redesigned/Icon/Icon';
import StartIcons from '../../../assets/icons/star.svg?react';

interface StarRatingProps {
    className?: string;
    onSelect?: (starCount: number) => void;
    size?: number;
    selectStart?: number;
}

const start = [1, 2, 3, 4, 5];
/**
 * @deprecated
 */
export const StarRating = memo((props: StarRatingProps) => {
    const { className, size = 30, selectStart = 0, onSelect } = props;
    const [currentStartCount, setCurrentStartCount] = useState(selectStart);
    const [isSelected, setIsSelected] = useState(Boolean(selectStart));

    const onHover = (startCount: number) => () => {
        if (!isSelected) {
            setCurrentStartCount(startCount);
        }
    };

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStartCount(0);
        }
    };

    const onClick = (startCount: number) => () => {
        if (!isSelected) {
            onSelect?.(startCount);
            setCurrentStartCount(startCount);
            setIsSelected(true);
        }
    };

    return (
        <div className={classNames(cls.StarRatingRedesigned, {}, [className])}>
            {start.map((startNumber) => {
                const commontProps = {
                    className: classNames(
                        cls.starIcons,
                        { [cls.selected]: isSelected },
                        [
                            currentStartCount >= startNumber
                                ? cls.hovered
                                : cls.normal,
                        ],
                    ),
                    Svg: StartIcons,
                    width: size,
                    height: size,
                    onMouseLeave: onLeave,
                    onMouseEnter: onHover(startNumber),
                    onClick: onClick(startNumber),
                    'data-testid': 'StarRating.' + startNumber,
                    'data-selected': currentStartCount >= startNumber,
                };
                return (
                    <Icon
                        key={startNumber}
                        clickable={!isSelected}
                        {...commontProps}
                    />
                );
            })}
        </div>
    );
});

StarRating.displayName = 'StarRating';
