import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from '@/entities/User';

import { ThunkExtraArg } from '@/app/providers/StoreProvider/config/StateSchema';

interface LoginByUserNameProps {
    username: string;
    password: string;
}

export const loginByUserName = createAsyncThunk<
    User,
    LoginByUserNameProps,
    { rejectValue: string; extra: ThunkExtraArg }
>('login/loginByUserName', async (authData, thunkApi) => {
    const { dispatch, rejectWithValue, extra } = thunkApi;
    try {
        const response = await extra.api.post<User>('/login', authData);
        if (!response.data) {
            throw new Error();
        }


        dispatch(userActions.setAuthData(response.data));

        return response.data;
    } catch (e) {
        console.log(e);
        return rejectWithValue('error');
    }
});
