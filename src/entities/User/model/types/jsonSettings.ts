import { Theme } from "@/shared/const/theme";


export interface JsonSettingsOption {
    theme?: Theme;
    isFirstVisit?: boolean;
    settingsPageHasBeenOpen?: boolean
}