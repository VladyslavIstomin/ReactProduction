import { StateScheme } from 'app/providers/StoreProvider';

export const getUserInitialized = (state: StateScheme) => state.user._initialized;