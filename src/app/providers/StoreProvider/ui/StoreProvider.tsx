import {ReactNode} from "react";
import {Provider} from "react-redux";
import {createReduxStore} from "app/providers/StoreProvider";
import {StateSchema} from "../config/StateSchema";
import {ReducersMapObject} from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

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
    } =props

    const navigate = useNavigate()

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const store = createReduxStore(initialState, asyncReducers, navigate)
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};



