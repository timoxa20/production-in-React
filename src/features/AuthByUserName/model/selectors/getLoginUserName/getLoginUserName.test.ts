import {StateSchema} from "app/providers/StoreProvider";
import {getLoginUserName} from "features/AuthByUserName/model/selectors/getLoginUserName/getLoginUserName";

describe('getLoginUserName.test', () => {
    test('should return value', () => {
        const state: Partial<StateSchema> = {
            LoginForm: {
                username: 'rom'
            }
        }
        expect(getLoginUserName(state)).toEqual('rom')
    })
    test('should return value', () => {
        const state: Partial<StateSchema> = {

        }
        expect(getLoginUserName(state)).toEqual('')
    })
})