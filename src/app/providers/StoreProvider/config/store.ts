import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateScheme } from './StateScheme';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { createReducerManager } from 'app/providers/StoreProvider/config/reducerManager';
import { $api } from 'shared/api/api';
import { CombinedState, Reducer } from 'redux';
import { scrollPositionReducer } from 'features/ScrollPosition';

export function createReduxStore(
    initialState?: StateScheme,
    asyncReducers?: ReducersMapObject<StateScheme>
) {
    const rootReducers: ReducersMapObject<StateScheme> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
        scroll: scrollPositionReducer,
    };
    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateScheme>>,
        preloadedState: initialState,
        devTools: __IS_DEV__,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: $api
                }
            }
        })
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}