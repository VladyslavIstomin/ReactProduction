import { StateScheme } from 'app/providers/StoreProvider';
import { getProfileReadonly } from './getProfileReadonly';

describe('getProfileReadonly.test', () => {
    const readonly = true;

    test('Get error', () => {
        const state: DeepPartial<StateScheme> = {
            profile: {
                readonly: true
            }
        };
        expect(getProfileReadonly(state as StateScheme)).toEqual(readonly);
    });

    test('Get error without state', () => {
        const state: DeepPartial<StateScheme> = {
            profile: {}
        };
        expect(getProfileReadonly(state as StateScheme)).toEqual(undefined);
    });
});