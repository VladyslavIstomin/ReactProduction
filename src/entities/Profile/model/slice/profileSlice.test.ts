import { DeepPartial } from '@reduxjs/toolkit';
import { ProfileScheme, ValidateProfileErrors } from '../type/ProfileScheme';
import { profileReducer, profileActions } from './profileSlice';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

describe('profileSlice.test', () => {
    const data = {
        first: 'sef',
        lastname: 'sds',
        age: 23,
        currency: Currency.RUB,
        country: Country.UKRAINE,
        city: 'Lviv',
        username: 'lol',
        avatar: ''
    };
    test('setReadyOnly', () => {
        const state: DeepPartial<ProfileScheme> = { readonly: false };
        expect(profileReducer(
            state as ProfileScheme,
            profileActions.setReadyOnly(true))
        ).toEqual({ readonly: true });
    });

    test('cancelEdit', () => {
        const state: DeepPartial<ProfileScheme> = { data, form: { username: 'wef' } };
        expect(profileReducer(
            state as ProfileScheme,
            profileActions.cancelEdit())
        ).toEqual({
            readonly: true,
            validateErrors: undefined,
            data,
            form: data
        });
    });

    test('updateProfile', () => {
        const state: DeepPartial<ProfileScheme> = { form: { username: 'wef' } };
        expect(profileReducer(
            state as ProfileScheme,
            profileActions.updateProfile({ username: '123' }))
        ).toEqual({
            form: { username: '123' }
        });
    });

    test('updateProfileData pending', () => {
        const state: DeepPartial<ProfileScheme> = {
            isLoading: false,
            validateErrors: [ValidateProfileErrors.SERVER_ERROR]
        };
        expect(profileReducer(
            state as ProfileScheme,
            updateProfileData.pending
        )).toEqual({
            isLoading: true,
            validateErrors: undefined
        });
    });

    test('updateProfileData fulfilled', () => {
        const state: DeepPartial<ProfileScheme> = {
            isLoading: true,
        };
        expect(profileReducer(
            state as ProfileScheme,
            updateProfileData.fulfilled(data, '')
        )).toEqual({
            isLoading: false,
            validateErrors: undefined,
            readonly: true,
            data,
            form: data
        });
    });
});