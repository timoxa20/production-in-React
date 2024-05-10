import {StateSchema} from "app/providers/StoreProvider";
import {getProfileForm} from "./getProfileForm";
import {Country} from "../../../../../entities/Country";
import {Currency} from "../../../../../entities/Currency";

describe('getLoginError.test', () => {
    test('should return error', () => {
        const data = {
            username: 'admin',
            age: 22,
            country: Country.Ukraine,
            lastname: 'Timofeev',
            first: 'Artem',
            city: 'SADAS',
            currency: Currency.EURO,
        }
        const state: Partial<StateSchema> = {
            profile: {
                form: data
            }
        }
        expect(getProfileForm(state)).toEqual(data)
    })
    test('should return error', () => {
        const state: Partial<StateSchema> = {}
        expect(getProfileForm(state)).toEqual(undefined)
    })
})