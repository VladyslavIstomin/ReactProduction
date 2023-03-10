import { StateScheme } from 'app/providers/StoreProvider';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading.test', () => {
    const isLoading = true;

    test('Get error', () => {
        const state: DeepPartial<StateScheme> = {
            profile: {
                isLoading: true
            }
        };
        expect(getProfileIsLoading(state as StateScheme)).toEqual(isLoading);
    });

    test('Get error without state', () => {
        const state: DeepPartial<StateScheme> = {
            profile: {}
        };
        expect(getProfileIsLoading(state as StateScheme)).toEqual(undefined);
    });
});