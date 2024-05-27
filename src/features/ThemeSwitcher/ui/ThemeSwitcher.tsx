import ThemeIcon from '../../..//shared/assets/icons/theme.svg?react';
import { memo, useCallback } from 'react';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { saveJsonSettings } from '@/entities/User';
import { Icon } from '@/shared/ui/redesigned/Icon';

export const ThemeSwitcher = memo(() => {
    const { toggleTheme } = useTheme();
    const dispatch = useAppDispatch();
    const onToggleHandler = useCallback(() => {
        toggleTheme((newTheme) => {
            dispatch(saveJsonSettings({ theme: newTheme }));
        });
    }, [toggleTheme, dispatch]);

    return (
        <Icon
            clickable
            onClick={onToggleHandler}
            Svg={ThemeIcon}
        />
    );
});

ThemeSwitcher.displayName = 'ThemeSwitcher';
