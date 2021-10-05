import { AnyAction } from 'redux'
import { TUserInitState } from '../../types'
import { UPDATE_IS_LOGIN, UPDATE_BILLING } from './action'

const initState : TUserInitState = {
    billing: null,
    isLogin: false
}

export const reduce = (state = initState, action : AnyAction) => {
    switch(action.type) {
        case UPDATE_IS_LOGIN:
            return {
                ...state,
                isLogin: action.payload
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