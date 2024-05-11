import {LOCAL_STORAGE_LOCAL_KEY, Theme, ThemeContext} from "@/app/providers/ThemeProvider/lib/ThemeContext";
import {useContext} from "react";

interface UseThemeResult {
    toggleTheme: () => void,
    theme: Theme
}

export function useTheme(): UseThemeResult {
    const {theme, setTheme} = useContext(ThemeContext);
    const toggleTheme = () => {
        let newTheme: Theme;
        switch (theme) {
        case Theme.DARK:
            newTheme = Theme.NORMAL
            break;
        case Theme.NORMAL:
            newTheme = Theme.ORANGE
            break
        case Theme.ORANGE:
            newTheme = Theme.DARK
            break
        default:
            newTheme = Theme.NORMAL
        }
        setTheme?.(newTheme)
        localStorage.setItem(LOCAL_STORAGE_LOCAL_KEY, newTheme)
    }
    return {
        theme: theme || Theme.NORMAL,
        toggleTheme
    }
}