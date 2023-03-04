import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider';
import { StateScheme } from 'app/providers/StoreProvider/config/StateScheme';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';

interface StoreProviderProps {
    children: ReactNode;
    initialState?: StateScheme;
    asyncReducers?: ReducersMapObject<StateScheme>
}

export const StoreProvider = ({ children, initialState, asyncReducers }: StoreProviderProps) => {
    const navigation = useNavigate();

    const store = createReduxStore(initialState, asyncReducers, navigation);
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};