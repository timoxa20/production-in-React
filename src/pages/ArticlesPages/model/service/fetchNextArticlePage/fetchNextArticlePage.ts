import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {
    getArticlePagesHasMore, getArticlePagesIsLoading,
    getArticlePagesNum
} from "pages/ArticlesPages/model/selectors/articlePagesSelector";
import {articlePagesAction} from "pages/ArticlesPages/model/slice/articlePagesSlice";
import {fetchArticleList} from "pages/ArticlesPages/model/service/fetchArticleList";


export const fetchNextArticlePage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlePagesNext/fetchNextArticlePage',
    async (_, thunkApi) => {
        const {getState, dispatch} = thunkApi
        const hasMore = getArticlePagesHasMore(getState())
        const page = getArticlePagesNum(getState())
        const isLoading = getArticlePagesIsLoading(getState())

        if (hasMore && !isLoading) {
            dispatch(articlePagesAction.initPage(page + 1))
            dispatch(fetchArticleList({ page: page + 1 }));
        }
    },
)