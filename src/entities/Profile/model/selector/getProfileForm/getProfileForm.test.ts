import { StateScheme } from 'app/providers/StoreProvider';
import { getProfileForm } from './getProfileForm';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

describe('getProfileForm.test', () => {
    const form = {
        first: 'sef',
        lastname: 'sds',
        age: 23,
        currency: Currency.RUB,
        country: Country.UKRAINE,
        city: 'Lviv',
        username: 'wef',
        avatar: ''
    };

    test('Get error', () => {
        const state: DeepPartial<StateScheme> = {
            profile: {
                form: {
                    first: 'sef',
                    lastname: 'sds',
                    age: 23,
                    currency: Currency.RUB,
                    country: Country.UKRAINE,
                    city: 'Lviv',
                    username: 'wef',
                    avatar: ''
                }
            }
        };
        expect(getProfileForm(state as StateScheme)).toEqual(form);
    });

    test('Get error without state', () => {
        const state: DeepPartial<StateScheme> = {
            profile: {}
        };
        expect(getProfileForm(state as StateScheme)).toEqual(undefined);
    });
});