import { counterActions, counterReducer } from './counterSlice';
import { CounterSchema } from '../type/CounterSchema';

describe('counterSlice.test', () => {
    test('increment', () => {
        const state: CounterSchema = {
            value: 10
        };
        expect(counterReducer(state, counterActions.increment)).toEqual({ value: 11 });
    });
    test('decrement', () => {
        const state: CounterSchema = {
            value: 10
        };
        expect(counterReducer(state, counterActions.decrement)).toEqual({ value: 9 });
    });
    test('should be 1 if no state', () => {
        expect(counterReducer(undefined, counterActions.increment)).toEqual({ value: 1 });
    });
});