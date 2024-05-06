import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {getArticlePagesInited} from "pages/ArticlesPages/model/selectors/articlePagesSelector";
import {articlePagesAction} from "pages/ArticlesPages/model/slice/articlePagesSlice";
import {fetchArticleList} from "pages/ArticlesPages/model/service/fetchArticleList";


export const initedArticlePage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlePagesNext/initedArticlePage',
    async (_, thunkApi) => {
        const {getState, dispatch} = thunkApi
        const inited = getArticlePagesInited(getState())
        if (!inited) {
            dispatch(articlePagesAction.initState())
            dispatch(fetchArticleList({
                page: 1
            }))
        }
    },
)