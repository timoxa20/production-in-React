import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { getUserDataByIdQuery } from "../api/userApi";
import { User } from "../types/user";
import { USER_LOCAL_STORAGE_KEY } from "@/shared/const/localStorage";

export const initAuthData = createAsyncThunk<
    User,
    void,
    ThunkConfig<string>
>("user/initAuthData", async (newJsonSettings, thunkApi) => {
    const { rejectWithValue, dispatch } = thunkApi;

    const userId = localStorage.getItem(USER_LOCAL_STORAGE_KEY);

    if (!userId) {
        return rejectWithValue("error");
    }

    try {
        const response = await dispatch(
            getUserDataByIdQuery(userId)
        ).unwrap();


        return response;

    } catch (e) {
        console.log(e);
        return rejectWithValue("error");
    }
});
