import { FeatureFlag } from '../../../types/featureFlag';
import { LOCAL_STORAGE_LAST_DESIGN_KEY } from '@/shared/const/localStorage';

const defaultFeatures = {
    isAppRedesigned:
        localStorage.getItem(LOCAL_STORAGE_LAST_DESIGN_KEY) === 'new',
};

let featureFlags: FeatureFlag = {
    ...defaultFeatures,
};

export function setFeatureFlag(newFeatureFlags?: FeatureFlag) {
    if (newFeatureFlags) {
        featureFlags = newFeatureFlags;
    }
}

export function getFeatureFlag(flag: keyof FeatureFlag) {
    return featureFlags[flag];
}

export function getAllFeatureFlag() {
    return featureFlags;
}
