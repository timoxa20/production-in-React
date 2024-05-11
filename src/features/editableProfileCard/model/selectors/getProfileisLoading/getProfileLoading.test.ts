import {StateSchema} from "@/app/providers/StoreProvider";
import {getProfileisLoading} from "./getProfileisLoading";

describe('getProfileisLoading.test', () => {
    test('should loading', () => {
        const state: Partial<StateSchema> = {
            profile: {
                isLoading: true
            }
        }
        expect(getProfileisLoading(state)).toEqual(true)
    })
    test('should return error', () => {
        const state: Partial<StateSchema> = {}
        expect(getProfileisLoading(state)).toEqual(undefined)
    })
})