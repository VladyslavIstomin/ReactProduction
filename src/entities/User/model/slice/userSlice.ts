import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserSchema } from '../type/UserSchema';
import { USER_LOCALSTORAGE_KEY } from 'shared/config/const/localstorage';

const initialState: UserSchema = {};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authUser = action.payload;
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(action.payload));
        },
        getAuthDataFromStorage: (state) => {
            const authData = localStorage.getItem(USER_LOCALSTORAGE_KEY);
            if (authData) {
                state.authUser = JSON.parse(authData);
            }
        },
        logout: (state) => {
            state.authUser = undefined;
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        },
    }
});

export const {
    actions: userActions,
    reducer: userReducer
} = userSlice;