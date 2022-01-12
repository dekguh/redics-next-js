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

export async function apiUploadImage(jwt: string | null, formData : FormData) : Promise<void> {
    try {
        const response = await Api.post('/upload',
            formData,{
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        const result = response.data
        return result
    } catch (err : any) {
        return err.response.data
    }
}

export async function apiCreateIklan(jwt : string | null, data : {}, formData : FormData) : Promise<void | string> {
    try {
        const uploadImage : any = await apiUploadImage(jwt, formData)
        if(!uploadImage[0].id) return 'gagal upload, periksa kembali gambar'

        const create = await Api.post('/create-iklan-by-jwt', {
            ...data,
            thumbnail: uploadImage[0].id
        },{
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        const result = create.data
        return result
    } catch (err : any) {
        return err.response.data.message
    }
}

export async function apiGetListMyIklan(jwt : string | null) : Promise<void> {
    try {
        const response = await Api.get('/get-iklan-by-jwt', {
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

export async function getSingleIklanById(jwt : string | null, id : string | number | null | undefined) : Promise<void> {
    try {
        const response = await Api.get(`/get-iklan-by-jwt/${id}`, {
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

export async function apiUpdateIklanByJwt(jwt : string | null, data : {}, selectedImage : FileList | Array<any> | null, latestThumbnail : number | string) : Promise<void | string> {
    try {
        let uploadImage : any = latestThumbnail
        if(selectedImage != null) {
            const formData = new FormData()
            formData.append('files', selectedImage[0])

            uploadImage = await apiUploadImage(jwt, formData)
            if(!uploadImage[0].id) return 'gagal upload, periksa kembali gambar'
        }

        const update = await Api.put('/update-iklan-by-jwt', {
            ...data,
            thumbnail: uploadImage
        },{
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        const result = update.data
        return result
    } catch (err : any) {
        return err.response
    }
}

export async function apiGetAllIklan() : Promise<void> {
    try {
        const response = await Api.get('/get-all-iklan')
        const result = response.data
        return result
    } catch(err : any) {
        return err.response
    }
}

export async function apiGetSingleIklanNoJwt(id : number | string) : Promise<void | {}> {
    try {
        const response = await Api.get(`/iklans/${id}`)
        return response.data
    } catch (err : any) {
        return err.response.data.message
    }
}

export async function apiGetOwnIklanBilling(id : number | string) : Promise<void | {}> {
    try {
        const response = await Api.get(`/get-iklan-own-billing/${id}`)
        return response.data
    } catch (err : any) {
        return err.response.data.message
    }
}

export async function apiCreateMessage(jwt : string | null, user2 : number) : Promise<void> {
    try {
        const response = await Api.post('/create-message-by-user', {
            user2,
        }, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        return response.data
    } catch (err : any) {
        return err.response
    }
}

export async function apiGetAllListMessage(jwt : string | null) : Promise<void> {
    try {
        const response = await Api.get('/get-all-message-by-user', {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        return response.data
    } catch (err : any) {
        return err.response
    }
}

export async function apiGetMessageDetail(messageId : string | number | string[] | undefined, jwt : string | null) : Promise<void> {
    try {
        const response = await Api.get(`/get-single-message-by-user/${messageId}`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        const result = response.data
        return result
    } catch(err : any) {
        return err.response
    }
}

export async function apiGetTextAllMessage(messageId : string | number | string[] | undefined, jwt : string | null) : Promise<void> {
    try {
        const response = await Api.get(`/get-list-text-message-by-id/${messageId}`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })

        return response.data
    } catch (err : any) {
        return err.response
    }
}

export async function apiCreateTextMessage(messageId : string | number | string[] | undefined,
    userId : number |  undefined,
    content : String,
    jwt : string | null
) : Promise<void> {
    try {
        const response = await Api.post('/create-text-message', {
            messageId,
            userId,
            content
        }, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
    } catch (err : any) {
        return err.response
    }
}