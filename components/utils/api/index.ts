import axios from 'axios'
import { MdEmail } from 'react-icons/md'
import { TDataRegister } from '../types'

const Api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL
})

export async function apiLogin(email : string, password : string) : Promise<void> {
    try {
        const response = await Api.post('auth/local', {
            identifier: email,
            password: password
        })
        const result = response.data
        return result
    } catch (err : any) {
        return err.response.data.message[0].messages[0].message
    }
}

export async function apiRegister(data : TDataRegister) : Promise<void> {
    try {
        const response = await Api.post('auth/local/register', {
            username: data.username,
            email: data.email,
            password: data.password,
            typeUser: 'customer',
        })
        const result = response.data
        return result
    } catch (err : any) {
        return err.response.data.message[0].messages[0].message
    }
}

export async function apiGetBillingUser(jwt : string | null) : Promise<void> {
    try {
        const response = await Api.get('billing-get-by-jwt', {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        const result = response.data
        return result
    } catch (err : any) {
        return err.response.data.message[0].messages[0].message
    }
}

export async function apiUpdateBillingUser(jwt: string | null, data : {}) : Promise<void> {
    try {
        const response = await Api.put('billing-update-by-jwt', data, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        const result = response.data
        return result
    } catch (err : any) {
        return err.response.data.message
    }
}

export async function apiUpdatePasswordUser(jwt: string | null, data : {}) : Promise<void> {
    try {
        const response = await Api.put('update-user-password-by-jwt', data, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        const result = response.data
        return result
    } catch (err : any) {
        return err.response.data.message
    }
}