import {Decorator} from "@storybook/react";
import React from "react";
import {StateSchema, StoreProvider} from "app/providers/StoreProvider";
import {loginReducer} from "features/AuthByUserName/model/slice/loginSlice";
import {ReducerList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {profileReducer} from "../../../../entities/Profile/model/slice/profileSlice";

const defaultAsyncReducers: ReducerList = {
    LoginForm: loginReducer,
    profile: profileReducer,
}
// eslint-disable-next-line react/display-name
export const StoreDecorator = (state: Partial<StateSchema>): Decorator => ( Story) => (
    <StoreProvider initialState={state} asyncReducers={defaultAsyncReducers}>
        <Story/>
    </StoreProvider>
);