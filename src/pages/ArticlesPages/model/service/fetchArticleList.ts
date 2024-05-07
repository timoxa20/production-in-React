import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {Article, ArticleType} from "../../../../entities/Article";
import {
    getArticlePagesLimit,
    getArticlePagesNum,
    getArticlePagesOrder,
    getArticlePagesSearch,
    getArticlePagesSort,
    getArticlePagesType
} from "../selectors/articlePagesSelector";
import {addQueryParams} from "shared/lib/url/addQueryParams/addQueryParams";


interface fetchArticleListProps {
    replace?: boolean
}

export const fetchArticleList = createAsyncThunk<Article[], fetchArticleListProps, ThunkConfig<string>>(
    'articlePages/fetchArticleList',
    async (props, thunkApi) => {
        const {rejectWithValue, extra, getState} = thunkApi
        const sort = getArticlePagesSort(getState())
        const order = getArticlePagesOrder(getState())
        const search = getArticlePagesSearch(getState())
        const limit = getArticlePagesLimit(getState())
        const page = getArticlePagesNum(getState())
        const type = getArticlePagesType(getState())

        try {
            addQueryParams({
                sort, search, order, type
            })
            const response = await extra.api.get<Article[]>(`/articles`, {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
                    _sort:sort,
                    q: search,
                    _order: order,
                    type: type === ArticleType.ALL ? undefined : type
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