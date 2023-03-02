import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/config/const/localstorage';

export interface loginByUserNameProps {
    username: string;
    password: string;
}

export const loginByUserName = createAsyncThunk<User, loginByUserNameProps, { rejectValue: string }>(
    'login/loginByUserName',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<User>('http://localhost:8000/login', authData);
            if(!response.data) {
                throw new Error();
            }

            thunkAPI.dispatch(userActions.setAuthData(response.data));

            return response.data;
        } catch(e) {
            console.log(e);
            return thunkAPI.rejectWithValue('error');
        }
    }
);