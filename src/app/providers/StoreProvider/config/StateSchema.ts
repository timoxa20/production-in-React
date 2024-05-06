import  {UserSchema} from "../../../../entities/User";
import {LoginSchema} from "features/AuthByUserName";
import {EnhancedStore, PayloadAction, Reducer, ReducersMapObject} from "@reduxjs/toolkit";
import {ProfileSchema} from "entities/Profile";
import {AxiosInstance} from "axios";
import {ArticleDetailsSchema} from "entities/Article";
import {ArticleDetailsCommentsSchema} from "pages/ArticleDetailsPage";
import {AddCommentFormSchema} from "features/addCommentForm";
import {ArticlePagesSchema} from "pages/ArticlesPages";
import {AppDispatch} from "app/providers/StoreProvider/config/store";

export interface StateSchema {
    user?: UserSchema;
    LoginForm?: LoginSchema;
    profile?: ProfileSchema;
    articleDetails?: ArticleDetailsSchema;
    articleDetailsComments?: ArticleDetailsCommentsSchema;
    addCommentForm?: AddCommentFormSchema;
    articlePages?: ArticlePagesSchema;

}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducer = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>,
    reduce: (state: StateSchema, action: PayloadAction<any>) => StateSchema;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
    getMountedReducer: () => MountedReducer
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema>{
    reducerManager: ReducerManager
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    dispatch: AppDispatch;
    state: StateSchema
}


