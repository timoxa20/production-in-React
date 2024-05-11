import { Profile } from "@/entities/Profile"
import {ValidateProFileError} from "../../types/editableProfileCardSchema";

export const valideitProfileData = (profile?: Profile) => {
    if(!profile) {
        return [ValidateProFileError.NO_DATA]
    }
    const {first, lastname, age, country} = profile
    const errors: ValidateProFileError[] = []

    if(!first || !lastname) {
        errors.push(ValidateProFileError.INCORRECT_USER_DATA)
    }

    if(!age || !Number.isInteger(age)) {
        errors.push(ValidateProFileError.INCORRECT_AGE)
    }

    if(!country ) {
        errors.push(ValidateProFileError.INCORRECT_COUNTRY)
    }

    return errors
}