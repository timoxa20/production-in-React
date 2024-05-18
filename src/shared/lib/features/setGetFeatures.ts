import { FeatureFlag } from "../../types/featureFlag";

let featureFlag: FeatureFlag;

export function setFeatureFlag(newFeatureFlag?: FeatureFlag) {
    if (newFeatureFlag) {
        featureFlag = newFeatureFlag;
    }
}

export function getFeatureFlag(flag: keyof FeatureFlag) {
    return featureFlag[flag];
}