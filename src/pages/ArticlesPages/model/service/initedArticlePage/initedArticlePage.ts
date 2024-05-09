import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {getArticlePagesInited} from "../../selectors/articlePagesSelector";
import {articlePagesAction} from "../../slice/articlePagesSlice";
import {fetchArticleList} from "../fetchArticleList";
import {ArticleSortField, ArticleType} from "entities/Article";
import {SortOrder} from "shared/types";


export const initedArticlePage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
    'articlePagesNext/initedArticlePage',
    async (searchParams, thunkApi) => {
        const {getState, dispatch} = thunkApi
        const inited = getArticlePagesInited(getState())
        if (!inited) {
            const sortFromURL = searchParams.get('sort') as ArticleSortField
            const orderFromURL = searchParams.get('order') as SortOrder
            const searchFromURL = searchParams.get('search')
            const typeFromType = searchParams.get('type') as ArticleType

            if (orderFromURL) {
                dispatch(articlePagesAction.setOrder(orderFromURL))
            }
            if (sortFromURL) {
                dispatch(articlePagesAction.setSort(sortFromURL))
            }
            if (searchFromURL) {
                dispatch(articlePagesAction.setSearch(searchFromURL))
            }
            if (typeFromType) {
                dispatch(articlePagesAction.setType(typeFromType))
            }

            dispatch(articlePagesAction.initState())
            dispatch(fetchArticleList({}))
        }
    },
)