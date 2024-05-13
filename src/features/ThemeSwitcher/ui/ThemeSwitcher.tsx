import {classNames} from "@/shared/lib/classNames/classNames";
import IconsLight from '@/shared/assets/icons/theme-light.svg?react'
import IconsDark from '@/shared/assets/icons/theme-dark.svg?react'
import {Button, ThemeButton} from "@/shared/ui/Button/Button";
import {memo} from "react";
import {Theme} from "@/shared/const/theme";
import {useTheme} from "@/shared/lib/hooks/useTheme/useTheme";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme()
    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <IconsDark/> : <IconsLight/>}
        </Button>
    );
});

ThemeSwitcher.displayName = 'ThemeSwitcher'



