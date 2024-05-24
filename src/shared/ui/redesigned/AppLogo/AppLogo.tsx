import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLogo.module.scss';
import { memo } from 'react';
import AppSvg from '../../../assets/icons/app-image.svg?react';
import { HStack } from '../../Stack';

interface AppLogoProps {
    className?: string;
    size?: number;
}

export const AppLogo = memo(({ className, size = 50 }: AppLogoProps) => {
    return (
        <HStack
            max
            justify="center"
            className={classNames(cls.appLogoWrapper, {}, [className])}
        >
            <div className={cls.gradientBig} />
            <div className={cls.gradientSmall} />
            <AppSvg
                color="black"
                height={size}
                width={size}
                className={cls.appLogo}
            />
        </HStack>
    );
});

AppLogo.displayName = 'AppLogo';
