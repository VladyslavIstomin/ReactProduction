import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateScheme } from './StateScheme';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { loginReducer } from 'features/AuthByUsername';

export function createReduxStore(initialState?: StateScheme) {
    const rootReducers: ReducersMapObject<StateScheme> = {
        counter: counterReducer,
        user: userReducer,
        login: loginReducer
    };

    return configureStore<StateScheme>({
        reducer: rootReducers,
        preloadedState: initialState,
        devTools: __IS_DEV__
    });
}