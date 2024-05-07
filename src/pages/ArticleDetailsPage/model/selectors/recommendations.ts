import {StateSchema} from "app/providers/StoreProvider";

export const getArticleRecommendationIsLoading = (state: StateSchema) => {
    return state.articleDetailsPage?.recommendations.isLoading
}
export const getArticleRecommendationError = (state: StateSchema) => {
    return state.articleDetailsPage?.recommendations.error
}
