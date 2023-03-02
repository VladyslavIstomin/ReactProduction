import { DeepPartial } from '@reduxjs/toolkit';
import { StateScheme } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword.test', () => {
    test('Get password', () => {
        const state: DeepPartial<StateScheme> = {
            login: {
                password: '123'
            }
        };
        expect(getLoginPassword(state as StateScheme)).toEqual('123');
    });

    test('Get password without state', () => {
        const state: DeepPartial<StateScheme> = {
            login: {}
        };
        expect(getLoginPassword(state as StateScheme)).toEqual('');
    });
});