import { DeepPartial } from '@reduxjs/toolkit';
import { StateScheme } from 'app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('getLoginError.test', () => {
    test('Get error', () => {
        const state: DeepPartial<StateScheme> = {
            login: {
                error: 'error'
            }
        };
        expect(getLoginError(state as StateScheme)).toEqual('error');
    });

    test('Get error without state', () => {
        const state: DeepPartial<StateScheme> = {
            login: {}
        };
        expect(getLoginError(state as StateScheme)).toEqual(undefined);
    });
});