import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserSchema } from '../types/user';
import {
    LOCAL_STORAGE_LAST_DESIGN_KEY,
    USER_LOCAL_STORAGE_KEY,
} from '@/shared/const/localStorage';
import { setFeatureFlag } from '@/shared/lib/features';
import { saveJsonSettings } from '../services/saveJsonSettings';
import { JsonSettingsOption } from '../types/jsonSettings';
import { initAuthData } from '../services/initAuthData';

const initialState: UserSchema = {
    _inited: false,
};
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, { payload }: PayloadAction<User>) => {
            state.authData = payload;
            setFeatureFlag(payload.features);
            if (payload.id) {
                localStorage.setItem(USER_LOCAL_STORAGE_KEY, payload.id);
            }
            localStorage.setItem(
                LOCAL_STORAGE_LAST_DESIGN_KEY,
                payload.features?.isAppRedesigned ? 'new' : 'old',
            );
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
                    if (state.authData) {
                        state.authData.jsonSettings = action.payload;
                    }
                },
            )
            .addCase(
                initAuthData.fulfilled,
                (state, { payload }: PayloadAction<User>) => {
                    state.authData = payload;
                    setFeatureFlag(payload.features);
                    state._inited = true;
                },
            )
            .addCase(initAuthData.rejected, (state) => {
                state._inited = true;
            });
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
