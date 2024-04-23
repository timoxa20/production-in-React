import {getCounter} from "./getCounter";
import {StateSchema} from "app/providers/StoreProvider";

describe('getCounter', () => {
    test('should return counter value', () => {
        const state: StateSchema = {
            counter: {value: 10}
        }
        expect(getCounter(state)).toEqual({value: 10})
    })
})
