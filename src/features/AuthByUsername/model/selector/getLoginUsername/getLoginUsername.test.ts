import { StateScheme } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername.test', () => {
    test('Get username', () => {
        const state: DeepPartial<StateScheme> = {
            login: {
                username: 'admin'
            }
        };
        expect(getLoginUsername(state as StateScheme)).toEqual('admin');
    });
    test('Get username without state', () => {
        const state: DeepPartial<StateScheme> = {
            login: {}
        };
        expect(getLoginUsername(state as StateScheme)).toEqual('');
    });
});