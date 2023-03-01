import { StateScheme } from 'app/providers/StoreProvider';

export const getLoginIsLoading = (state: StateScheme) => state?.login?.isLoading || false;