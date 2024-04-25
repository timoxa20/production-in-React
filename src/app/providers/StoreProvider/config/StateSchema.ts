import {UserSchema} from "../../../../entities/User";
import {LoginSchema} from "features/AuthByUserName";
import {EnhancedStore, PayloadAction, Reducer, ReducersMapObject} from "@reduxjs/toolkit";

export interface StateSchema {
    user?: UserSchema
    LoginForm?: LoginSchema
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>,
    reduce: (state: StateSchema, action: PayloadAction<any>) => StateSchema;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema>{
    reducerManager: ReducerManager
}