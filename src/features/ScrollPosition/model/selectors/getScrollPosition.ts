import { StateScheme } from 'app/providers/StoreProvider';

export const getScrollPosition = (state: StateScheme) => state.scroll.scroll || {};