import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {Article} from "../../../../entities/Article";
import {getArticlePagesLimit} from "pages/ArticlesPages/model/selectors/articlePagesSelector";


interface fetchArticleListProps {
    page?: number;
}

export const fetchArticleList = createAsyncThunk<Article[], fetchArticleListProps, ThunkConfig<string>>(
    'articlePages/fetchArticleList',
    async (props, thunkApi) => {
        const {rejectWithValue, extra, getState} = thunkApi
        const {page= 1} = props
        const limit = getArticlePagesLimit(getState())

        try {
            const response = await extra.api.get<Article[]>(`/articles`, {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page
                }
            })

            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (e) {
            console.log(e)
            return rejectWithValue('error')
        }
    },
)