import {StateSchema} from "@/app/providers/StoreProvider";
import {getProfileValidateErrors} from "./getProfileValidateErrors";
import { ValidateProFileError } from "../../types/editableProfileCardSchema";


describe('getProfileValidateErrors.test', () => {
    test('should loading', () => {
        const state: Partial<StateSchema> = {
            profile: {
                validateError: [
                    ValidateProFileError.SERVER_ERROR,
                    ValidateProFileError.INCORRECT_USER_DATA,
                    ValidateProFileError.INCORRECT_AGE,
                    ValidateProFileError.NO_DATA,
                    ValidateProFileError.INCORRECT_COUNTRY
                ]
            }
        }
        expect(getProfileValidateErrors(state)).toEqual([
            ValidateProFileError.SERVER_ERROR,
            ValidateProFileError.INCORRECT_USER_DATA,
            ValidateProFileError.INCORRECT_AGE,
            ValidateProFileError.NO_DATA,
            ValidateProFileError.INCORRECT_COUNTRY
        ])
    })
    test('should return error', () => {
        const state: Partial<StateSchema> = {}
        expect(getProfileValidateErrors(state)).toEqual(undefined)
    })
})