import { buildSelectors } from "@/shared/lib/store";
import { JsonSettingsOption } from "../../types/jsonSettings";

const defaultJsonSettings: JsonSettingsOption = {}

export const [useJsonSettings, getJsonSettings] = buildSelectors(
    state => state.user?.authData?.jsonSettings ?? defaultJsonSettings
);

