import {rtkApi} from "@/shared/api/rtkApi";
import {Article} from "@/entities/Article";

const recommendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRecommendationList: build.query<Article[], number>({
            query: (limit) => ({
                url: '/articles',
                params: {
                    _limit: limit
                }
            }),
        }),
    }),
})

export const useArticleRecommendationList = recommendationsApi.useGetArticleRecommendationListQuery;
