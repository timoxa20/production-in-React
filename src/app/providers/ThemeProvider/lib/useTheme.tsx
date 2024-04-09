import {LOCAL_STORAGE_LOCAL_KEY, Theme, ThemeContext} from "app/providers/ThemeProvider/lib/ThemeContext";
import {useContext} from "react";

interface UseThemeResult {
    toggleTheme: () => void,
    theme: Theme
}

export function useTheme(): UseThemeResult {
    const {theme, setTheme} = useContext(ThemeContext);
    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.NORMAL : Theme.DARK
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_LOCAL_KEY, newTheme)
    }
    return {
        theme,
        toggleTheme
    }
}