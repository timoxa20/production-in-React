import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import {
    Article,
    ArticleType,
    ArticleView,
    ArticleSortField,
} from '@/entities/Article';
import { ArticlePagesSchema } from '../types/articlePagesSchema';
import { fetchArticleList } from '../service/fetchArticleList';
import { ARTICLE_VIEW_LOCAL_STORAGE_KEY } from '@/shared/const/localStorage';
import { SortOrder } from '@/shared/types';

const articleAdapter = createEntityAdapter({
    selectId: (article: Article) => article.id,
});

export const getArticle = articleAdapter.getSelectors<StateSchema>(
    (state) => state.articlePages || articleAdapter.getInitialState(),
);

const articlePagesSlice = createSlice({
    name: 'articlePagesSlice',
    initialState: articleAdapter.getInitialState<ArticlePagesSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        view: ArticleView.SMALL,
        page: 1,
        hasMore: true,
        _inited: false,
        limit: 9,
        sort: ArticleSortField.CREATED,
        order: 'asc',
        search: '',
        type: ArticleType.ALL,
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(
                ARTICLE_VIEW_LOCAL_STORAGE_KEY,
                action.payload,
            );
        },
        initState: (state) => {
            const view = localStorage.getItem(
                ARTICLE_VIEW_LOCAL_STORAGE_KEY,
            ) as ArticleView;
            state.view = view;
            state.limit = view === ArticleView.BIG ? 4 : 9;
            state._inited = true;
        },
        initPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setOrder: (state, action: PayloadAction<SortOrder>) => {
            state.order = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        setSort: (state, action: PayloadAction<ArticleSortField>) => {
            state.sort = action.payload;
        },
        setType: (state, action: PayloadAction<ArticleType>) => {
            state.type = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleList.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
                if (action.meta.arg.replace) {
                    articleAdapter.removeAll(state);
                }
            })
            .addCase(fetchArticleList.fulfilled, (state, action) => {
                state.isLoading = false;
                state.hasMore = action.payload.length > 0;
                if (action.meta.arg.replace) {
                    articleAdapter.setAll(state, action.payload);
                } else {
                    articleAdapter.addMany(state, action.payload);
                }
            })
            .addCase(fetchArticleList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: articlePagesReducer } = articlePagesSlice;
export const { actions: articlePagesAction } = articlePagesSlice;
