import { AnyAction } from 'redux'
import { TSearchInitState } from '../../types'
import { UPDATE_SEARCH_TEXT } from './action'

const initState : TSearchInitState = {
    text: ''
}

export const reduce = (state  = initState, action : AnyAction) => {
    switch(action.type) {
        case UPDATE_SEARCH_TEXT:
            return { ...state, text: action.payload }
        default:
            return state
    }
}