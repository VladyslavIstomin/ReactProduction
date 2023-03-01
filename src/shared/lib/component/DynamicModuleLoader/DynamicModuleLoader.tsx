import { FC, useEffect } from 'react';
import { useStore } from 'react-redux';
import { StoreWithReducerManager } from 'app/providers/StoreProvider';
import { StateSchemeKey } from 'app/providers/StoreProvider/config/StateScheme';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
    [name in StateSchemeKey]?: Reducer
}

type ReducersListItem = [StateSchemeKey, Reducer];

interface DynamicModuleLoader {
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoader> = (props) => {
    const {
        children,
        reducers,
        removeAfterUnmount
    } = props;
    const store = useStore() as StoreWithReducerManager;

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]: ReducersListItem) => {
            store.reducerManager.add(name, reducer);
        });

        return () => {
            Object.entries(reducers).forEach(([name, reducer]: ReducersListItem) => {
                if (removeAfterUnmount) {
                    store.reducerManager.remove(name);
                }
            });
        };
        // eslint-disable-next-line
    }, []);

    return (
        <>
            {children}
        </>
    );
};