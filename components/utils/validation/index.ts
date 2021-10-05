/**
 * @function emailValidation
 * @param email
 * @returns true if valid
 */
export function emailValidation(email : string) : boolean {
    const pattern : RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(pattern.test(email))
        return true
    else
        return false
}

/**
 * @function usernameValidation
 * @param username
 * @returns true if valid
 */
export function usernameValidation(username : string) : boolean {
    const pattern : RegExp = /^[a-zA-Z0-9]+$/
    if(pattern.test(username))
        return true
    else
        return false
}