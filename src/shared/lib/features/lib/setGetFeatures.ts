import { FeatureFlag } from '../../../types/featureFlag';

let featureFlags: FeatureFlag = {};

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
