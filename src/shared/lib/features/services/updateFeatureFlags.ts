import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getAllFeatureFlag } from '../lib/setGetFeatures';
import { updateFeatureFlagsMutation } from '../api/featureFlagApi';
import { FeatureFlag } from '@/shared/types/featureFlag';

interface UpdateFeatureFlagOptions {
    userId: string;
    newFeatures: Partial<FeatureFlag>;
}

export const updateFeatureFlag = createAsyncThunk<
    void,
    UpdateFeatureFlagOptions,
    ThunkConfig<string>
>('user/saveJsonSettings', async ({ userId, newFeatures }, thunkApi) => {
    const { rejectWithValue, dispatch } = thunkApi;

    try {
        await dispatch(
            updateFeatureFlagsMutation({
                userId,
                features: {
                    ...getAllFeatureFlag(),
                    ...newFeatures,
                },
            }),
        );

        window.location.reload();
        return undefined;
    } catch (e) {
        console.log(e);
        return rejectWithValue('');
    }
});
