import {createAsyncThunk} from "@reduxjs/toolkit";
import {getProfileForm} from "../../selectors/getProfileForm/getProfileForm";
import {ThunkConfig} from "app/providers/StoreProvider";
import { Profile } from "../../types/profile";

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/updateProfileData',
    async (_, thunkApi) => {

        const {rejectWithValue, extra, getState} = thunkApi

        const formData = getProfileForm(getState())

        try {
            const response = await extra.api.put<Profile>('/profile', formData)
            return response.data
        } catch (e) {
            console.log(e)
            return rejectWithValue('error')
        }
    },
)