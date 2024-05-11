import {StateSchema} from "@/app/providers/StoreProvider";
import {getProfileError} from "./getProfileError";

describe('getProfileError.test', () => {
    test('should return error', () => {
        const state: Partial<StateSchema> = {
            profile: {
                error: '123'
            }
        }
        expect(getProfileError(state)).toEqual('123')
    })
    test('should return error', () => {
        const state: Partial<StateSchema> = {}
        expect(getProfileError(state)).toEqual(undefined)
    })
})