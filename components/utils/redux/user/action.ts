import { AnyAction } from 'redux'

export const UPDATE_IS_LOGIN : string = 'UPDATE_IS_LOGIN'
export const GET_IS_LOGIN : string = 'GET_IS_LOGIN'
export const UPDATE_BILLING : string = 'UPDATE_BILLING'

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