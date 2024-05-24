import { classNames } from '@/shared/lib/classNames/classNames';
import ThemeIconDeprecated from '../../..//shared/assets/icons/theme-dark.svg?react';
import ThemeIcon from '../../..//shared/assets/icons/theme.svg?react';
import { Button } from '@/shared/ui/redesigned/Button';
import { memo, useCallback } from 'react';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { saveJsonSettings } from '@/entities/User';
import { Icon as IconsDeprecated } from '@/shared/ui/deprecated/Icon';
import { ToggleFeature } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redesigned/Icon';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { toggleTheme } = useTheme();
    const dispatch = useAppDispatch();
    const onToggleHandler = useCallback(() => {
        toggleTheme((newTheme) => {
            dispatch(saveJsonSettings({ theme: newTheme }));
        });
    }, [toggleTheme, dispatch]);

    return (
        <ToggleFeature
            on={
                <Icon
                    clickable
                    onClick={onToggleHandler}
                    Svg={ThemeIcon}
                />
            }
            off={
                <Button
                    className={classNames('', {}, [className])}
                    onClick={onToggleHandler}
                >
                    <IconsDeprecated
                        Svg={ThemeIconDeprecated}
                        width={40}
                        height={40}
                    />
                </Button>
            }
            feature={'isAppRedesigned'}
        />
    );
});

ThemeSwitcher.displayName = 'ThemeSwitcher';
