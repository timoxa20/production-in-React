import {createAsyncThunk} from "@reduxjs/toolkit";
import {getProfileForm} from "../../selectors/getProfileForm/getProfileForm";
import {ThunkConfig} from "app/providers/StoreProvider";
import {Profile, ValidateProFileError} from "../../types/profile";
import {valideitProfileData} from "../valideitProfileData/valideitProfileData";

export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<ValidateProFileError[]>>(
        'profile/updateProfileData',
        async (_, thunkApi) => {

            const {rejectWithValue, extra, getState} = thunkApi

            const formData = getProfileForm(getState())

            const errors = valideitProfileData(formData)

            if (errors.length) {
                return rejectWithValue(errors)
            }
            try {
                const response = await extra.api.put<Profile>(
                    `/profile/${formData?.id}`,
                    formData
                )
                if(!response.data) {
                    throw new Error()
                }
                return response.data
            } catch (e) {
                console.log(e)
                return rejectWithValue([ValidateProFileError.SERVER_ERROR])
            }
        },
    )