import { ReactNode } from 'react';
import { MapDispatchToProps, Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider';
import { StateScheme } from 'app/providers/StoreProvider/config/StateScheme';
import { ReducersMapObject } from '@reduxjs/toolkit';

interface StoreProviderProps {
    children: ReactNode;
    initialState?: StateScheme;
    asyncReducers?: ReducersMapObject<StateScheme>
}

export const StoreProvider = ({ children, initialState, asyncReducers }: StoreProviderProps) => {
    const store = createReduxStore(initialState, asyncReducers);
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};