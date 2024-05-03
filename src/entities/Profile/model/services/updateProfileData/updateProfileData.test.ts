import {updateProfileData} from "./updateProfileData";
import {Country} from "../../../../Country/model/types/country";
import {Currency} from "../../../../Currency/model/types/curency";
import {TestAsyncThunk} from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import {ValidateProFileError} from "../../../../Profile";

const data = {
    username: 'admin',
    age: 22,
    country: Country.Ukraine,
    lastname: 'Timofeev',
    first: 'Artem',
    city: 'SADAS',
    currency: Currency.EURO,
    id: "1"
}

describe('updateProfileData.test', () => {
    test('success', async () => {

        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data
            }
        })
        thunk.api.put.mockReturnValue(Promise.resolve({data: data}))
        const result = await thunk.callThumnk()

        expect(thunk.api.put).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(data)
    });

    test('status error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data
            }
        })
        thunk.api.put.mockReturnValue(Promise.resolve({status: 403}))

        const result = await thunk.callThumnk()

        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toEqual([
            ValidateProFileError.SERVER_ERROR
        ])
    })

    test('validation error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: {...data, lastname: '', }
            }
        })

        const result = await thunk.callThumnk()

        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toEqual([
            ValidateProFileError.INCORRECT_USER_DATA
        ])
    })
})