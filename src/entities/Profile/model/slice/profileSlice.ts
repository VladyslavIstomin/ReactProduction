import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Profile, ProfileScheme } from '../type/ProfileSchema';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const initialState: ProfileScheme = {
    data: undefined,
    isLoading: false,
    error: undefined,
    readonly: true
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadyOnly(state, action: PayloadAction<boolean>) {
            state.readonly = action.payload;
        },
        cancelEdit(state) {
            state.readonly = true;
            state.form = state.data;
        },
        updateProfile(state, action: PayloadAction<Profile>) {
            state.form = {
                ...state.form,
                ...action.payload
            };
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.isLoading = false;
                state.data = action.payload;
                state.form = action.payload;
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(updateProfileData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.isLoading = false;
                state.data = action.payload;
                state.form = action.payload;
                state.readonly = true;
            })
            .addCase(updateProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const {
    actions: profileActions,
    reducer: profileReducer
} = profileSlice;