import { rtkApi } from '@/shared/api/rtkApi';
import { FeatureFlag } from '@/shared/types/featureFlag';

interface UpdateFeatureFlagOption {
    userId: string | undefined;
    features: Partial<FeatureFlag>;
}

const featureFlagApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        updateFeatureFlag: build.mutation<void, UpdateFeatureFlagOption>({
            query: ({ userId, features }) => ({
                url: `/users/${userId}`,
                method: 'PATCH',
                body: {
                    features,
                },
            }),
        }),
    }),
});

export const updateFeatureFlagsMutation =
    featureFlagApi.endpoints.updateFeatureFlag.initiate;
