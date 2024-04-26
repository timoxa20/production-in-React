import {Decorator} from "@storybook/react";
import React from "react";
import {StateSchema, StoreProvider} from "app/providers/StoreProvider";
import {ReducersMapObject} from "@reduxjs/toolkit";
import {loginReducer} from "features/AuthByUserName/model/slice/loginSlice";

const defaultAsyncReducers: Partial<ReducersMapObject<StateSchema>> = {
    LoginForm: loginReducer,
}
// eslint-disable-next-line react/display-name
export const StoreDecorator = (state: Partial<StateSchema>): Decorator => ( Story) => (
    <StoreProvider initialState={state} asyncReducers={defaultAsyncReducers}>
        <Story/>
    </StoreProvider>
);