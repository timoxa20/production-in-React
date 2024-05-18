import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { getUserAuthData } from "../selectors/getUserAuthData/getUserAuthData";
import { getJsonSettings } from "../selectors/jsonSelectors/jsonSelectors";
import { JsonSettingsOption } from "../types/jsonSettings";
import { setJsonSettingsMutation } from "../api/userApi";

export const saveJsonSettings = createAsyncThunk<
    JsonSettingsOption,
    JsonSettingsOption,
    ThunkConfig<string>
>("user/saveJsonSettings", async (newJsonSettings, thunkApi) => {
    const { rejectWithValue, getState, dispatch } = thunkApi;
    const userData = getUserAuthData(getState());
    const currentSettings = getJsonSettings(getState());

    if (!userData) {
        return rejectWithValue("error");
    }

    try {
        const response = await dispatch(setJsonSettingsMutation({
            userId: userData?.id,
            jsonSettings: {
                ...currentSettings,
                ...newJsonSettings
            }
        })).unwrap();

        if (!response.jsonSettings) {
            return rejectWithValue("error");
        }

        return response.jsonSettings;

    } catch (e) {
        console.log(e);
        return rejectWithValue("error");
    }
});
