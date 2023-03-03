export enum Currency {
    RUB = 'RUB',
    UA = 'UA',
    USD = 'USD',
    EUR = 'EUR'
}

export enum Country {
    UKRAINE = 'Ukraine',
    BELARUS = 'Belarus',
    KAZAKHSTAN = 'Kazakhstan',
    RUSSIA = 'Russia',
    ARMENIA = 'Armenia'
}

export interface Profile {
    first: string,
    lastname: string,
    age: 34,
    currency: Currency,
    country: Country,
    city: string,
    username: string,
    avatar: string
}

export interface ProfileScheme {
    data?: Profile;
    error?: string,
    isLoading: boolean;
    readonly: boolean;
}