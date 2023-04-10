import { StateScheme } from 'app/providers/StoreProvider';
import { getProfileValidateErrors } from './getProfileValidateErrors';
import { ValidateProfileErrors } from '../../type/ProfileScheme';

describe('getProfileValidateErrors.test', () => {
    const validateErrors = [ValidateProfileErrors.SERVER_ERROR];

    test('Get error', () => {
        const state: DeepPartial<StateScheme> = {
            profile: {
                validateErrors: [ValidateProfileErrors.SERVER_ERROR]
            }
        };
        expect(getProfileValidateErrors(state as StateScheme)).toEqual(validateErrors);
    });

    test('Get error without state', () => {
        const state: DeepPartial<StateScheme> = {
            profile: {}
        };
        expect(getProfileValidateErrors(state as StateScheme)).toEqual(undefined);
    });
});