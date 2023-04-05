import { initArticlePage } from './initArticlePage';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('initArticlePage.test', () => {
    test('success fetch', async () => {
        const thunk = new TestAsyncThunk(initArticlePage, {
            articlesPage: {
                isLoading: false,
                page: 1,
                hasMore: true,
                limit: 9,
                ids: [],
                entities: {},
                _inited: false
            }
        });
        const result = await thunk.callThunk({ get: (name:string) => name } as URLSearchParams);

        expect(fetchArticlesList).toHaveBeenCalledWith({ });
        expect(thunk.dispatch).toHaveBeenCalledTimes(8);
    });

    test('reject fetch if state was inited', async () => {
        const thunk = new TestAsyncThunk(initArticlePage, {
            articlesPage: {
                isLoading: false,
                page: 1,
                hasMore: false,
                limit: 9,
                ids: [],
                entities: {},
                _inited: true
            }
        });
        const result = await thunk.callThunk({ get: (name:string) => name } as URLSearchParams);

        expect(fetchArticlesList).not.toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    });
});