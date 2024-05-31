import { FeatureFlag } from '../../../types/featureFlag';
import { getFeatureFlag } from './setGetFeatures';

interface ToggleFeaturesOptions<T> {
    name: keyof FeatureFlag;
    on: () => T;
    off: () => T;
}

export function toggleFeatures<T>({
    off,
    on,
    name,
}: ToggleFeaturesOptions<T>): T {
    if (getFeatureFlag(name)) {
        return on();
    }
    return off();
}
