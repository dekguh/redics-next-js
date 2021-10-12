import { AnyAction } from 'redux'

export const UPDATE_IS_LOGIN : string = 'UPDATE_IS_LOGIN'
export const GET_IS_LOGIN : string = 'GET_IS_LOGIN'
export const UPDATE_BILLING : string = 'UPDATE_BILLING'
export const GET_BILLING : string = 'GET_BILLING'
export const UPDATE_LIST_MY_IKLAN : string = 'UPDATE_LIST_MY_IKLAN'
export const GET_LIST_MY_IKLAN : string = 'GET_LIST_MY_IKLAN'

export function updateIsLoginAction(status : boolean) : AnyAction {
    return {
        type: UPDATE_IS_LOGIN,
        payload: status
    }
}

export function updateBillingAction(data : {} | null) : AnyAction {
    return {
        type: UPDATE_BILLING,
        payload: data
    }
}

export function updateListMyIklanAction(data : {} | null) : AnyAction {
    return {
        type: UPDATE_LIST_MY_IKLAN,
        payload: data
    }
}