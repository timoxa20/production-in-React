import { Country } from "../../../../../entities/Country";
import {valideitProfileData} from "./valideitProfileData";
import { ValidateProFileError } from "../../types/editableProfileCardSchema";
import {Currency} from "../../../../../entities/Currency";


const data = {
    username: 'admin',
    age: 22,
    country: Country.Ukraine,
    lastname: 'Timofeev',
    first: 'Artem',
    city: 'SADAS',
    currency: Currency.EURO,
}
describe('valideitProfileData.test', () => {
    test('success', async () => {
        const result = valideitProfileData(data)
        expect(result).toEqual([])
    });

    test('without first and last name', async () => {
        const result = valideitProfileData({...data, first: '', lastname: ''})
        expect(result).toEqual([
            ValidateProFileError.INCORRECT_USER_DATA
        ])
    })

    test('incorrect age', async () => {
        const result = valideitProfileData({...data, age: undefined})
        expect(result).toEqual([
            ValidateProFileError.INCORRECT_AGE
        ])
    })

    test('incorrect country', async () => {
        const result = valideitProfileData({...data, country: undefined})
        expect(result).toEqual([
            ValidateProFileError.INCORRECT_COUNTRY
        ])
    })

    test('incorrect all', async () => {
        const result = valideitProfileData({})
        expect(result).toEqual([
            ValidateProFileError.INCORRECT_USER_DATA,
            ValidateProFileError.INCORRECT_AGE,
            ValidateProFileError.INCORRECT_COUNTRY,
        ])
    })
})