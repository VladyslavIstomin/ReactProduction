import { validateProfileData } from './validateProfileData';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ValidateProfileErrors } from 'entities/Profile';

describe('validateProfileData.test', () => {
    const data = {
        first: 'sef',
        lastname: 'sds',
        age: 23,
        currency: Currency.RUB,
        country: Country.UKRAINE,
        city: 'Lviv',
        username: 'wef',
        avatar: ''
    };

    test('success', async () => {
        const validate = validateProfileData(data);
        expect(validate).toEqual([]);
    });

    test('incorrect first and last name', async () => {
        const validate = validateProfileData({ ...data, first: '', lastname: '' });
        expect(validate).toEqual([ValidateProfileErrors.INCORRECT_USER_DATA]);
    });

    test('incorrect age', async () => {
        const validate = validateProfileData({ ...data, age: undefined });
        expect(validate).toEqual([ValidateProfileErrors.INCORRECT_AGE]);
    });

    test('incorrect country', async () => {
        const validate = validateProfileData({ ...data, country: undefined });
        expect(validate).toEqual([ValidateProfileErrors.INCORRECT_COUNTRY]);
    });

    test('incorrect all fields', async () => {
        const validate = validateProfileData({});
        expect(validate).toEqual([
            ValidateProfileErrors.INCORRECT_USER_DATA,
            ValidateProfileErrors.INCORRECT_AGE,
            ValidateProfileErrors.INCORRECT_COUNTRY
        ]);
    });

    test('incorrect profile', async () => {
        const validate = validateProfileData();
        expect(validate).toEqual([ValidateProfileErrors.SERVER_ERROR]);
    });
});