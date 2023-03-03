import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import { AnyAction, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { CombinedState } from 'redux';
import { createReduxStore } from './store';
import { ProfileScheme } from 'entities/Profile';

export interface StateScheme {
    counter: CounterSchema;
    user: UserSchema;

    // Async reducers
    login?: LoginSchema;
    profile?: ProfileScheme
}

export type StateSchemeKey  = keyof StateScheme;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateScheme>;
    reduce: (state: StateScheme, action: AnyAction) => CombinedState<StateScheme>;
    add: (key: StateSchemeKey, reducer: Reducer) => void;
    remove: (key: StateSchemeKey) => void;
}

export interface StoreWithReducerManager extends EnhancedStore<StateScheme> {
    reducerManager: ReducerManager
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']