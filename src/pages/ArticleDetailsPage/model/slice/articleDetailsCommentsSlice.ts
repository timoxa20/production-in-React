import {Comment} from "entities/Comment";
import {
    createEntityAdapter,
    createSlice, PayloadAction,
} from '@reduxjs/toolkit'
import {StateSchema} from "app/providers/StoreProvider";
import {ArticleDetailsCommentsSchema} from "../types/ArticleDetailsCommentsSchema";
import {
    fetchCommentsArticleById
} from "pages/ArticleDetailsPage/model/services/fetchCommentsArticleById/fetchCommentsArticleById";


const commentsAdapter = createEntityAdapter({
    selectId: (comment: Comment) => comment.id,
})

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.comments || commentsAdapter.getInitialState()
)

const articleDetailsCommentsSlice = createSlice({
    name: 'articleDetailsCommentsSlice',
    initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {}
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsArticleById.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchCommentsArticleById.fulfilled,
                (state, action: PayloadAction<Comment[]>) => {
                    state.isLoading = false;
                    commentsAdapter.setAll(state, action.payload)
                })
            .addCase(fetchCommentsArticleById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload
            })
    },
})

export const {reducer: articleDetailsCommentReducer} = articleDetailsCommentsSlice
