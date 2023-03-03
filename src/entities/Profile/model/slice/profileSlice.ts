import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProfileScheme } from 'entities/Profile';

const initialState: ProfileScheme = {
    data: undefined,
    isLoading: false,
    error: undefined,
    readonly: true
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {}
});

export const {
    actions: profileActions,
    reducer: profileReducer
} = profileSlice;