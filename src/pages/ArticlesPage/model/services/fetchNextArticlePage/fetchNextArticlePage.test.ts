import { fetchNextArticlePage } from './fetchNextArticlePage';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('fetchNextArticlePage.test', () => {
    test('success fetch', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlePage, {
            articlesPage: {
                isLoading: false,
                page: 1,
                hasMore: true,
                limit: 9,
                ids: [],
                entities: {}
            }
        });
        const result = await thunk.callThunk();

        expect(fetchArticlesList).toHaveBeenCalledWith({ });
        expect(thunk.dispatch).toHaveBeenCalledTimes(4);
    });

    test('reject fetch if hasMore false', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlePage, {
            articlesPage: {
                isLoading: false,
                page: 1,
                hasMore: false,
                limit: 9,
                ids: [],
                entities: {}
            }
        });
        const result = await thunk.callThunk();

        expect(fetchArticlesList).not.toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    });

    test('reject fetch if Loading', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlePage, {
            articlesPage: {
                isLoading: true,
                page: 1,
                hasMore: true,
                limit: 9,
                ids: [],
                entities: {}
            }
        });
        const result = await thunk.callThunk();

        expect(fetchArticlesList).not.toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    });
});