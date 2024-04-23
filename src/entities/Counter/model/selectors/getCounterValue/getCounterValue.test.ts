import {getCounterValue} from "./getCounterValue";
import {StateSchema} from "app/providers/StoreProvider";

describe('getCounterValue', () => {
    test('', () => {
        const state: StateSchema = {
            counter: {value: 10}
        }
        expect(getCounterValue(state)).toEqual(10)
    })
})