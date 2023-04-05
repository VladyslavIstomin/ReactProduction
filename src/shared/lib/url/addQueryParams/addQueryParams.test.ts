import { getQueryParams } from './addQueryParams';

describe('AddQueryParams.ts', () => {
    test('with ony one param', () => {
        const params = getQueryParams({
            test: 'test'
        });
        expect(params).toBe('?test=test');
    });

    test('with ony two params', () => {
        const params = getQueryParams({
            test: 'test',
            value: 'value'
        });
        expect(params).toBe('?test=test&value=value');
    });
});