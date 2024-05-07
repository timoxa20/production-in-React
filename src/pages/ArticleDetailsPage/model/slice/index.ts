import {combineReducers} from "@reduxjs/toolkit";
import {articleDetailsCommentReducer} from "./articleDetailsCommentsSlice";
import {
    articleDetailsPageRecomendationReducer
} from "./articleDetailsPageRecomendationSlice";


export const articleDetailsPageReducer = combineReducers({
    comments: articleDetailsCommentReducer,
    recommendations: articleDetailsPageRecomendationReducer,
})