import { Story } from '@storybook/react';
import { StateScheme, StoreProvider } from 'app/providers/StoreProvider';
import { ReducersMapObject } from '@reduxjs/toolkit';

export const StoreDecorator = (
    state: DeepPartial<StateScheme>,
    reducers?: DeepPartial<ReducersMapObject<StateScheme>>
) => (StoryComponent: Story) => {
    return (
        <StoreProvider
            initialState={state as StateScheme}
            asyncReducers={reducers as ReducersMapObject<StateScheme>}
        >
            <StoryComponent />
        </StoreProvider>
    );
};