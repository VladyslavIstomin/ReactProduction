import { StateScheme } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { getCounter } from 'entities/Counter/model/selector/getCounter/getCounter';

describe('getCounter', () => {
    test('should return counter value', () => {
        const state: DeepPartial<StateScheme> = {
            counter: {
                value: 10
            }
        };
        expect(getCounter(state as StateScheme)).toEqual({ value: 10 });
    });
});
