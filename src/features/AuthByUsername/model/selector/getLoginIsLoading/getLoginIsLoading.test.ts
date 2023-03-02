import { DeepPartial } from '@reduxjs/toolkit';
import { StateScheme } from 'app/providers/StoreProvider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoading.test', () => {
    test('Get isLoading', () => {
        const state: DeepPartial<StateScheme> = {
            login: {
                isLoading: true
            }
        };
        expect(getLoginIsLoading(state as StateScheme)).toEqual(true);
    });

    test('Get isLoading without state', () => {
        const state: DeepPartial<StateScheme> = {
            login: {}
        };
        expect(getLoginIsLoading(state as StateScheme)).toEqual(false);
    });
});