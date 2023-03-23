import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

export enum ValidateProfileErrors {
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_AGE = 'INCORRECT_AGE',
    INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
    SERVER_ERROR = 'SERVER_ERROR',
}

export interface Profile {
    id?: string;
    first?: string,
    lastname?: string,
    age?: number,
    currency?: Currency,
    country?: Country,
    city?: string,
    username?: string,
    avatar?: string
}

export interface ProfileScheme {
    data?: Profile;
    form?: Profile;
    error?: string,
    isLoading: boolean;
    readonly: boolean;
    validateErrors?: ValidateProfileErrors[];
}