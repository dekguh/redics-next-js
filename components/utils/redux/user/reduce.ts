import { AnyAction } from 'redux'
import { TUserInitState } from '../../types'

const initState : TUserInitState = {
    billing: {},
    isLogin: true
}

export const reduce = (state = initState, action : AnyAction) => {
    switch(action.action) {
        default:
            return state
    }
}