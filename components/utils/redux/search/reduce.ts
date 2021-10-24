import { AnyAction } from 'redux'
import { TSearchInitState } from '../../types'
import { UPDATE_SEARCH_KABUPATEN, UPDATE_SEARCH_KECAMATAN, UPDATE_SEARCH_PROVINSI, UPDATE_SEARCH_TEXT } from './action'

const initState : TSearchInitState = {
    text: '',
    provinsi: '',
    kabupaten: '',
    kecamatan: ''
}

export const reduce = (state  = initState, action : AnyAction) => {
    switch(action.type) {
        case UPDATE_SEARCH_TEXT:
            return { ...state, text: action.payload }
        case UPDATE_SEARCH_PROVINSI:
            return { ...state, provinsi: action.payload }
        case UPDATE_SEARCH_KABUPATEN:
            return { ...state, kabupaten: action.payload }
        case UPDATE_SEARCH_KECAMATAN:
            return { ...state, kecamatan: action.payload }
        default:
            return state
    }
}