import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {Comment} from "entities/Comment";
import {Article} from "../../../../entities/Article";

export const fetchArticleList = createAsyncThunk<Article[], void, ThunkConfig<string>>(
    'articlePages/fetchArticleList',
    async (articleId, thunkApi) => {

        const {rejectWithValue, extra} = thunkApi


        try {
            const response = await extra.api.get<Article[]>(`/articles`, {
                params: {
                    _expand: 'user'
                }
            })

            if(!response.data) {
                throw new Error()
            }

            return response.data
        } catch (e) {
            console.log(e)
            return rejectWithValue('error')
        }
    },
)