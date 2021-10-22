import { AnyAction } from 'redux'

export const UPDATE_SEARCH_TEXT = 'UPDATE_SEARCH_TEXT'

export function updateSearchTextAction(text: string) : AnyAction {
    return {
        type: UPDATE_SEARCH_TEXT,
        payload: text
    }
}