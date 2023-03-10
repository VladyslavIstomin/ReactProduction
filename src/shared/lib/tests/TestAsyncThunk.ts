import { StateScheme } from 'app/providers/StoreProvider';
import { AsyncThunkAction, Dispatch } from '@reduxjs/toolkit';
import axios, { AxiosStatic } from 'axios';

type ActionCreatorType<Returned, ThunkArg, ThunkApiConfig>
    = (arg: ThunkArg) => AsyncThunkAction<Returned, ThunkArg, { rejectValue: ThunkApiConfig }>

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

export class TestAsyncThunk<Returned, ThunkArg, ThunkApiConfig> {
    dispatch: Dispatch;
    getState: () => StateScheme;
    actionCreator: ActionCreatorType<Returned, ThunkArg, ThunkApiConfig>;

    api:  jest.MockedFunctionDeep<AxiosStatic>;
    navigate: jest.MockedFn<any>;

    constructor(
        actionCreator: ActionCreatorType<Returned, ThunkArg, ThunkApiConfig>,
        state?: DeepPartial<StateScheme>
    ) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn(() => state as StateScheme);

        this.api = mockedAxios;
        this.navigate = jest.fn();
    }

    async callThunk(arg: ThunkArg) {
        const action = this.actionCreator(arg);
        const result = await action(
            this.dispatch,
            this.getState,
            { api: this.api, navigate: this.navigate }
        );
        return result;
    }
}