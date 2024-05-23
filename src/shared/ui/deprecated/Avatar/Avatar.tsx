import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { CSSProperties, useMemo } from 'react';
import { AppImage } from '../AppImage';
import { Skeleton } from '../Skeleton';
import UserIcons from '../../../assets/icons/user-filled.svg?react';
import { Icon } from '../Icon';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: string;
    alt?: string;
    fallbackInverted?: boolean;
}

export const Avatar = (props: AvatarProps) => {
    const { className, src, size = 100, alt, fallbackInverted } = props;

    const errorFallback = (
        <Icon
            inverted={fallbackInverted}
            width={size}
            height={size}
            Svg={UserIcons}
        />
    );
    const fallback = (
        <Skeleton
            width={size}
            height={size}
            border="50%"
        />
    );

    const mods: Mods = {};
    const styles = useMemo<CSSProperties>(() => {
        return {
            width: size,
            height: size,
        };
    }, [size]);

    return (
        <AppImage
            errorFallback={errorFallback}
            fallback={fallback}
            src={src}
            alt={alt}
            style={styles}
            className={classNames(cls.Avatar, mods, [className])}
        />
    );
};
