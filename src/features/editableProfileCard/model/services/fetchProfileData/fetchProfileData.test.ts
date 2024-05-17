import { fetchProfileData } from './fetchProfileData';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Country } from '../../../../../entities/Country';
import { Currency } from '../../../../../entities/Currency';

describe('fetchProfileData.test', () => {
    test('success', async () => {
        const data = {
            username: 'admin',
            age: 22,
            country: Country.Ukraine,
            lastname: 'Timofeev',
            first: 'Artem',
            city: 'SADAS',
            currency: Currency.EURO,
        };
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data: data }));
        const result = await thunk.callThumnk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('status error', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThumnk('1');
        expect(result.meta.requestStatus).toBe('rejected');
    });
});
