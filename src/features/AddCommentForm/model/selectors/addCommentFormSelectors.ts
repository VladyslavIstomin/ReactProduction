import { StateScheme } from 'app/providers/StoreProvider';

export const getAddCommentFormError = (state: StateScheme) => state.addCommentForm?.error || undefined;
export const getAddCommentFormText = (state: StateScheme) => state.addCommentForm?.text || '';