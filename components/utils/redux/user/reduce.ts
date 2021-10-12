import { AnyAction } from 'redux'
import { TUserInitState } from '../../types'
import { UPDATE_IS_LOGIN, UPDATE_BILLING, UPDATE_LIST_MY_IKLAN } from './action'

const initState : TUserInitState = {
    billing: null,
    isLogin: false,
    dataMyIklan: null
}

export const reduce = (state = initState, action : AnyAction) => {
    switch(action.type) {
        case UPDATE_IS_LOGIN:
            return {
                ...state,
                isLogin: action.payload
            }
        case UPDATE_LIST_MY_IKLAN:
            return {
                ...state,
                dataMyIklan: action.payload
            }
        case UPDATE_BILLING:
            return {
                ...state,
                billing: action.payload
            }
        default:
            return state
    }
}