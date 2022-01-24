import { AnyAction } from 'redux'
import { IPesananInitState } from '../../types'

const initState : IPesananInitState = {
    pesananIklanId: null
}

export const reduce = (state = initState, action : AnyAction) => {
    switch(action.type) {
        case 'UPDATE_PESANAN_IKLAN_ID':
            return {
                pesananIklanId: action.payload
            }
        default:
            return state
    }
}