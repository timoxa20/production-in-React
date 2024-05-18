import { classNames } from "@/shared/lib/classNames/classNames";
import IconsLight from "@/shared/assets/icons/theme-light.svg?react";
import IconsDark from "@/shared/assets/icons/theme-dark.svg?react";
import { Button, ThemeButton } from "@/shared/ui/Button";
import { memo, useCallback } from "react";
import { Theme } from "@/shared/const/theme";
import { useTheme } from "@/shared/lib/hooks/useTheme/useTheme";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { saveJsonSettings } from "@/entities/User";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    const dispatch = useAppDispatch();
    const onToggleHandler = useCallback(() => {
        toggleTheme((newTheme) => {
            dispatch(saveJsonSettings({ theme: newTheme }));
        });
    }, [toggleTheme, dispatch]);

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames("", {}, [className])}
            onClick={onToggleHandler}
        >
            {theme === Theme.DARK ? <IconsDark /> : <IconsLight />}
        </Button>
    );
});

ThemeSwitcher.displayName = "ThemeSwitcher";
