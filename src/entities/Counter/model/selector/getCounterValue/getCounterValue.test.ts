import { getCounterValue } from './getCounterValue';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateScheme } from 'app/providers/StoreProvider';

describe('getCounterValue.test', () => {
    test('should return value', () => {
        const state: DeepPartial<StateScheme> = {
            counter: {
                value: 10
            }
        };
        expect(getCounterValue(state as StateScheme)).toEqual(10);
    });
});