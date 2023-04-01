import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollPositionSchema } from '../types/ScrollPositionSchema';

const initialState: ScrollPositionSchema = {
    scroll: {}
};

export const scrollPositionSlice = createSlice({
    name: 'scrollPosition',
    initialState,
    reducers: {
        setScrollPosition: (state, action: PayloadAction<{path: string, position: number}>) => {
            state.scroll[action.payload.path] = action.payload.position;
        },
    },
});

export const {
    actions: scrollPositionActions,
    reducer: scrollPositionReducer
} = scrollPositionSlice;