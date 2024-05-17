import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: Partial<LoginSchema> = { username: '123' };
        expect(loginReducer(state, loginActions.setUserName('123'))).toEqual({
            username: '123',
        });
    });
    test('test set password', () => {
        const state: Partial<LoginSchema> = { password: '123' };
        expect(loginReducer(state, loginActions.setPassword('123'))).toEqual({
            password: '123',
        });
    });
});
