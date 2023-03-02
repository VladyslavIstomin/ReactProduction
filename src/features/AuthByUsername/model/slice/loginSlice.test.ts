import { DeepPartial } from '@reduxjs/toolkit';
import { loginReducer, LoginSchema } from 'features/AuthByUsername';
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice';

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