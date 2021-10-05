import axios from 'axios'
import { MdEmail } from 'react-icons/md'
import { TDataRegister } from '../types'

const Api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL
})

export async function apiLogin(email : string, password : string) : Promise<void> {
    try {
        const response = await Api.post('local/auth', {
            identifier: email,
            password: password
        })
        const result = response.data
        return result
    } catch (err : any) {
        console.log(err.response)
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

export async function apiGetBillingUser(jwt : string) : Promise<void> {
    try {
        const response = await Api.get('')
    } catch (err) {

    }
}