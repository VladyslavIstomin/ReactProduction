import { StateScheme } from 'app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

describe('getProfileError.test', () => {
    const error = 'Error';

    test('Get error', () => {
        const state: DeepPartial<StateScheme> = {
            profile: {
                error: 'Error'
            }
        };
        expect(getProfileError(state as StateScheme)).toEqual(error);
    });

    test('Get error without state', () => {
        const state: DeepPartial<StateScheme> = {
            profile: {}
        };
        expect(getProfileError(state as StateScheme)).toEqual(undefined);
    });
});