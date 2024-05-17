import { Decorator } from '@storybook/react';
import React from 'react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { loginReducer } from '@/features/AuthByUserName/testing';
import { ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { addCommentFormReducer } from '@/features/addCommentForm/testing';
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/testing';
import { profileReducer } from '@/features/editableProfileCard';
import { articleDetailsReducer } from '@/entities/Article';

const defaultAsyncReducers: ReducerList = {
    LoginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsPage: articleDetailsPageReducer,
};
// eslint-disable-next-line react/display-name
export const StoreDecorator =
    (state: Partial<StateSchema>): Decorator =>
    (Story) => (
        <StoreProvider
            initialState={state}
            asyncReducers={defaultAsyncReducers}
        >
            <Story />
        </StoreProvider>
    );
