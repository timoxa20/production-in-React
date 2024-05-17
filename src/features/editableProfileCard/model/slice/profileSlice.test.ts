import { profileActions, profileReducer } from '../slice/profileSlice';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { Country } from '../../../../entities/Country';
import { Currency } from '../../../../entities/Currency';
import {
    ProfileSchema,
    ValidateProFileError,
} from '../types/editableProfileCardSchema';

const data = {
    username: 'admin',
    age: 22,
    country: Country.Ukraine,
    lastname: 'Timofeev',
    first: 'Artem',
    city: 'SADAS',
    currency: Currency.EURO,
};
describe('profileSlice.test', () => {
    test('test set readonly', () => {
        const state: Partial<ProfileSchema> = { readonly: false };
        expect(profileReducer(state, profileActions.setReadonly(true))).toEqual(
            { readonly: true },
        );
    });

    test('test set update profile', () => {
        const state: Partial<ProfileSchema> = { form: { username: '123' } };
        expect(
            profileReducer(
                state,
                profileActions.updateProfile({
                    username: '123456',
                }),
            ),
        ).toEqual({
            form: {
                username: '123456',
            },
        });
    });

    test('test set cancel edit', () => {
        const state: Partial<ProfileSchema> = { data, form: { username: '' } };
        expect(profileReducer(state, profileActions.cancelEdit())).toEqual({
            readonly: true,
            validateError: undefined,
            data,
            form: data,
        });
    });

    test('test update profile service pending', () => {
        const state: Partial<ProfileSchema> = {
            isLoading: false,
            validateError: [ValidateProFileError.SERVER_ERROR],
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                updateProfileData.pending,
            ),
        ).toEqual({
            isLoading: true,
            validateError: undefined,
        });
    });

    test('test update profile service fulfilled', () => {
        const state: Partial<ProfileSchema> = {
            isLoading: true,
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                updateProfileData.fulfilled(data, ''),
            ),
        ).toEqual({
            isLoading: false,
            validateError: undefined,
            readonly: true,
            form: data,
            data,
        });
    });
});
