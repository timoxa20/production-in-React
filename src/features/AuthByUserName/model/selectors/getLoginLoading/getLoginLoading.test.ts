import {StateSchema} from "app/providers/StoreProvider";
import {getLoginLoading} from "./getLoginLoading";

describe('getLoginLoading.test', () => {
    test('should return true', () => {
        const state: Partial<StateSchema> = {
            LoginForm: {
                isLoading: true
            }
        }
        expect(getLoginLoading(state)).toEqual(true)
    })
    test('should return false', () => {
        const state: Partial<StateSchema> = {

        }
        expect(getLoginLoading(state)).toEqual(false)
    })
})