import {classNames} from "shared/lib/classNames/classNames";
import cls from './ThemeSwitchet.module.scss'
import React from "react";
import {useTheme, Theme} from "app/providers/ThemeProvider";
import IconsLight from 'shared/assets/icons/theme-light.svg'
import IconsDark from 'shared/assets/icons/theme-dark.svg'
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface ThemeSwitchetProps {
    className?: string;
}

export const ThemeSwitchet = ({className}: ThemeSwitchetProps) => {
    const {theme, toggleTheme} = useTheme()
    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.ThemeSwitchet, {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <IconsDark/> : <IconsLight/>}
        </Button>
    );
};



