import { StateScheme } from 'app/providers/StoreProvider';
import { getArticleData, getArticleError, getArticleIsLoading } from './getArticleDetails';

describe('getArticleDetails.test', () => {
    test('should return data', () => {
        const data = {
            id: '1',
            title: 'title'
        };
        const state: DeepPartial<StateScheme> = {
            articles : { data }
        };
        expect(getArticleData(state as StateScheme)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateScheme> = {};
        expect(getArticleData(state as StateScheme)).toEqual(undefined);
    });

    test('should return isLoading', () => {
        const state: DeepPartial<StateScheme> = {
            articles : { isLoading: true }
        };
        expect(getArticleIsLoading(state as StateScheme)).toEqual(true);
    });
    test('should work with empty state isLoading', () => {
        const state: DeepPartial<StateScheme> = {};
        expect(getArticleIsLoading(state as StateScheme)).toEqual(false);
    });

    test('should return error', () => {
        const state: DeepPartial<StateScheme> = {
            articles : { error: 'error' }
        };
        expect(getArticleError(state as StateScheme)).toEqual('error');
    });
    test('should work with empty state Error', () => {
        const state: DeepPartial<StateScheme> = {};
        expect(getArticleError(state as StateScheme)).toEqual(undefined);
    });
});