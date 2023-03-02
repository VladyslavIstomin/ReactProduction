import { StateScheme } from 'app/providers/StoreProvider';
import { AsyncThunkAction, Dispatch } from '@reduxjs/toolkit';

type ActionCreatorType<Returned, ThunkArg, ThunkApiConfig>
    = (arg: ThunkArg) => AsyncThunkAction<Returned, ThunkArg, { rejectValue: ThunkApiConfig }>

export class TestAsyncThunk<Returned, ThunkArg, ThunkApiConfig> {
    dispatch: Dispatch;
    getState: () => StateScheme;
    actionCreator: ActionCreatorType<Returned, ThunkArg, ThunkApiConfig>;

    constructor(actionCreator: ActionCreatorType<Returned, ThunkArg, ThunkApiConfig>) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn();
    }

    async callThunk(arg: ThunkArg) {
        const action = this.actionCreator(arg);
        const result = await action(this.dispatch, this.getState, undefined);
        return result;
    }
}