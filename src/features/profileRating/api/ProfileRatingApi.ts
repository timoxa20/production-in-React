import { rtkApi } from '@/shared/api/rtkApi';
import { Rating } from '@/entities/Rating';

interface getArticleRatingArg {
    userId: string;
    profileId: string;
}

interface mutationArticleRatingArg {
    userId: string;
    profileId: string;
    rate: number;
    feedback?: string;
}

const profileRatingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getProfileRating: build.query<Rating[], getArticleRatingArg>({
            query: ({ profileId, userId }) => ({
                url: '/profile-rating',
                params: {
                    profileId,
                    userId,
                },
            }),
        }),
        rateProfileActive: build.mutation<void, mutationArticleRatingArg>({
            query: (arg) => ({
                url: '/profile-rating',
                method: 'POST',
                body: arg,
            }),
        }),
    }),
});

export const useGetProfileRating = profileRatingApi.useGetProfileRatingQuery;
export const useRateProfile = profileRatingApi.useRateProfileActiveMutation;
