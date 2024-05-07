import {Decorator} from "@storybook/react";
import React from "react";
import {StateSchema, StoreProvider} from "app/providers/StoreProvider";
import {loginReducer} from "features/AuthByUserName/model/slice/loginSlice";
import {ReducerList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {profileReducer} from "../../../../entities/Profile/model/slice/profileSlice";
import {articleDetailsReducer} from "../../../../entities/Article/model/slice/articleDetailsSlice";
import {addCommentFormReducer} from "features/addCommentForm/model/slice/addCommentFormSlice";
import {articleDetailsPageReducer} from "pages/ArticleDetailsPage/model/slice";

const defaultAsyncReducers: ReducerList = {
    LoginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsPage: articleDetailsPageReducer
}
// eslint-disable-next-line react/display-name
export const StoreDecorator = (state: Partial<StateSchema>): Decorator => (Story) => (

    <StoreProvider initialState={state} asyncReducers={defaultAsyncReducers}>
        <Story/>
    </StoreProvider>
);

