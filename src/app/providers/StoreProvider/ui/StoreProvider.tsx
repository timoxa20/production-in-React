import {ReactNode} from "react";
import {Provider} from "react-redux";
import {StateSchema} from "../config/StateSchema";
import {ReducersMapObject} from "@reduxjs/toolkit";
import { createReduxStore } from "../config/store";

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: StateSchema
    asyncReducers?: Partial<ReducersMapObject<StateSchema>>
}

export const StoreProvider = (props: StoreProviderProps) => {
    const {
        children,
        initialState,
        asyncReducers
    } = props



    const store = createReduxStore(
        initialState,
        asyncReducers,
    )
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};



