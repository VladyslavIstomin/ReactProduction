import { StateScheme } from 'app/providers/StoreProvider';
import { getProfileData } from './getProfileData';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

describe('getProfileData.test', () => {
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

    test('Get error', () => {
        const state: DeepPartial<StateScheme> = {
            profile: {
                data: {
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
        expect(getProfileData(state as StateScheme)).toEqual(data);
    });

    test('Get error without state', () => {
        const state: DeepPartial<StateScheme> = {
            profile: {}
        };
        expect(getProfileData(state as StateScheme)).toEqual(undefined);
    });
});