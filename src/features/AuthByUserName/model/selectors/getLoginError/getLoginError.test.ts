import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('getLoginError.test', () => {
    test('should return error', () => {
        const state: Partial<StateSchema> = {
            LoginForm: {
                error: 'error',
            },
        };
        expect(getLoginError(state)).toEqual('error');
    });
    test('should return error', () => {
        const state: Partial<StateSchema> = {};
        expect(getLoginError(state)).toEqual(undefined);
    });
});
