import {createEntityAdapter, createSlice, PayloadAction,} from '@reduxjs/toolkit'
import {StateSchema} from "app/providers/StoreProvider";
import {Article, ArticleView} from "../../../../entities/Article";
import {ArticlePagesSchema} from "pages/ArticlesPages/model/types/articlePagesSchema";
import {fetchArticleList} from "pages/ArticlesPages/model/service/fetchArticleList";
import {ARTICLE_VIEW_LOCAL_STORAGE_KEY} from "shared/const/localStorage";


const articleAdapter = createEntityAdapter({
    selectId: (article: Article) => article.id,
})

export const getArticle = articleAdapter.getSelectors<StateSchema>(
    (state) => state.articlePages || articleAdapter.getInitialState()
)

const articlePagesSlice = createSlice({
    name: 'articlePagesSlice',
    initialState: articleAdapter.getInitialState<ArticlePagesSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        view: ArticleView.SMALL
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload
            localStorage.setItem(ARTICLE_VIEW_LOCAL_STORAGE_KEY, action.payload)
        },
        initState: (state) => {
            state.view = localStorage.getItem(ARTICLE_VIEW_LOCAL_STORAGE_KEY) as ArticleView
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleList.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchArticleList.fulfilled,
                (state, action: PayloadAction<Article[]>) => {
                    state.isLoading = false;
                    articleAdapter.setAll(state, action.payload)
                })
            .addCase(fetchArticleList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload
            })
    },
})

export const {reducer: articlePagesReducer} = articlePagesSlice
export const {actions: articlePagesAction} = articlePagesSlice
