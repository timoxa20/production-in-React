import { StateSchema } from '@/app/providers/StoreProvider';

export const addCommentFormSelectorText = (state: StateSchema) =>
    state.addCommentForm?.text ?? '';
export const addCommentFormSelectorError = (state: StateSchema) =>
    state.addCommentForm?.error;
