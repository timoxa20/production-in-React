import { ThemeContext } from '../../../lib/context/ThemeContext';
import { useContext } from 'react';
import { Theme } from '../../../const/theme';

interface UseThemeResult {
    toggleTheme: (saveAction?: (theme: Theme) => void) => void;
    theme: Theme;
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);
    const toggleTheme = (saveAction?: (theme: Theme) => void) => {
        let newTheme: Theme;
        switch (theme) {
            case Theme.DARK:
                newTheme = Theme.NORMAL;
                break;
            case Theme.NORMAL:
                newTheme = Theme.ORANGE;
                break;
            case Theme.ORANGE:
                newTheme = Theme.DARK;
                break;
            default:
                newTheme = Theme.NORMAL;
        }
        setTheme?.(newTheme);
        saveAction?.(newTheme)
    };
    return {
        theme: theme || Theme.NORMAL,
        toggleTheme,
    };
}
