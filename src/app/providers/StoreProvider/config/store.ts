import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateScheme } from './StateScheme';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';

export function createReduxStore(initialState?: StateScheme) {
    const rootReducers: ReducersMapObject<StateScheme> = {
        counter: counterReducer,
        user: userReducer
    };

    return configureStore<StateScheme>({
        reducer: rootReducers,
        preloadedState: initialState,
        devTools: __IS_DEV__
    });
}