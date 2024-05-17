import { StateSchema } from '@/app/providers/StoreProvider';
import { getProfileReadonly } from './getProfileReadonly';

describe('getProfileReadonly.test', () => {
    test('should loading', () => {
        const state: Partial<StateSchema> = {
            profile: {
                readonly: true,
            },
        };
        expect(getProfileReadonly(state)).toEqual(true);
    });
    test('should return error', () => {
        const state: Partial<StateSchema> = {};
        expect(getProfileReadonly(state)).toEqual(undefined);
    });
});
