import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserSchema } from '../types/user';
import { USER_LOCAL_STORAGE_KEY } from '@/shared/const/localStorage';
import { setFeatureFlag } from "@/shared/lib/features";
import { saveJsonSettings } from '../services/saveJsonSettings';
import { JsonSettingsOption } from '../types/jsonSettings';

const initialState: UserSchema = {
    _inited: false,
};
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
            setFeatureFlag(action.payload.features)
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(USER_LOCAL_STORAGE_KEY);

            if (user === null) return
            const json = JSON.parse(user) as User
            if (user) {
                state.authData = json;
                setFeatureFlag(json.features)
            }
            state._inited = true;
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(
                saveJsonSettings.fulfilled,
                (state, action: PayloadAction<JsonSettingsOption>) => {
                    if(state.authData) {
                        state.authData.jsonSettings = action.payload
                    }
                },
            )
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
