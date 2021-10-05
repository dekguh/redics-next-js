export const UPDATE_IS_LOGIN : string = 'UPDATE_IS_LOGIN'
export const GET_IS_LOGIN : string = 'GET_IS_LOGIN'

export function updateIsLoginAction(status : boolean) : {} {
    return {
        action: UPDATE_IS_LOGIN,
        payload: status
    }
}