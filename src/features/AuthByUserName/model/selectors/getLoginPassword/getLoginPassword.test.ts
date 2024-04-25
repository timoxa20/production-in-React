import {StateSchema} from "app/providers/StoreProvider";
import {getLoginPassword} from "./getLoginPassword";

describe('getLoginPassword.test', () => {
    test('should return value', () => {
        const state: Partial<StateSchema> = {
            LoginForm: {
                password: '131242'
            }
        }
        expect(getLoginPassword(state)).toEqual('131242')
    })
    test('should return value', () => {
        const state: Partial<StateSchema> = {

        }
        expect(getLoginPassword(state)).toEqual('')
    })
})