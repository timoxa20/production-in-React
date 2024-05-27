import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { CSSProperties, useMemo } from 'react';
import { AppImage } from '../../redesigned/AppImage';
import UserIcons from '../../../assets/icons/user-filled.svg?react';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: string;
    alt?: string;
}

export const Avatar = (props: AvatarProps) => {
    const { className, src, size = 100, alt } = props;

    const errorFallback = (
        <Icon
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
