import { FeatureFlag } from '@/shared/types/featureFlag';
import { ReactElement } from 'react';
import { getFeatureFlag } from './setGetFeatures';

interface ToggleFeatureProps {
    on: ReactElement;
    off: ReactElement;
    feature: keyof FeatureFlag;
}

export const ToggleFeature = (props: ToggleFeatureProps) => {
    const { off, on, feature } = props;

    if (getFeatureFlag(feature)) {
        return on;
    }
    return off;
};
