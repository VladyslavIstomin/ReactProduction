import { DeepPartial } from '@reduxjs/toolkit';
import { loginActions, loginReducer } from './loginSlice';
import { LoginSchema } from '../type/LoginSchema';

describe('loginSlice.test', () => {
    test('username', () => {
        const state: DeepPartial<LoginSchema> = {};
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setUsername('admin'))
        ).toEqual({ username: 'admin' });
    });

    test('password', () => {
        const state: DeepPartial<LoginSchema> = {};
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setPassword('123'))
        ).toEqual({ password: '123' });
    });
});