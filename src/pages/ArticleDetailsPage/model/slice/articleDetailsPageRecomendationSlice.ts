import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { ArticleDetailsRecomendationSchema } from '../types/ArticleDetailsRecomendationSchema';
import { Article } from '@/entities/Article';
import { fetchArticleRecommendations } from '../services/fetchArticleRecomendation/fetchArticleRecomendation';

const recomendationAdapter = createEntityAdapter({
    selectId: (article: Article) => article.id,
});

export const getArticleRecomendation =
    recomendationAdapter.getSelectors<StateSchema>(
        (state) =>
            state?.articleDetailsPage?.recommendations ||
            recomendationAdapter.getInitialState(),
    );

const articleDetailsPageRecomendationSlice = createSlice({
    name: 'articleDetailsPageRecomendationSlice',
    initialState:
        recomendationAdapter.getInitialState<ArticleDetailsRecomendationSchema>(
            {
                isLoading: false,
                error: undefined,
                ids: [],
                entities: {},
            },
        ),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRecommendations.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticleRecommendations.fulfilled, (state, action) => {
                state.isLoading = false;
                recomendationAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticleRecommendations.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: articleDetailsPageRecomendationReducer } =
    articleDetailsPageRecomendationSlice;
