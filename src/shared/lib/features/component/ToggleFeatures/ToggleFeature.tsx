import { FeatureFlag } from '@/shared/types/featureFlag';
import { ReactElement } from 'react';
import { getFeatureFlag } from '../../lib/setGetFeatures';

interface ToggleFeatureProps {
    on: ReactElement;
    off: ReactElement;
    feature: keyof FeatureFlag;
}

export const ToggleFeature = (props: ToggleFeatureProps) => {
    const { feature, on, off } = props;

    if (getFeatureFlag(feature)) {
        return on;
    }
    return off;
};
