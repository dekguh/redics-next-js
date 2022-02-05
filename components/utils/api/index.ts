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

export async function apigetBookedDateIklan(iklanId: number | undefined) : Promise<void> {
    try {
        const response = await Api.post('/get-booked-date-by-iklan', {
            iklan: iklanId
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('jwt')}`
            }
        })
        return response.data
    } catch(err : any) {
        return err.response
    }
}

export async function getKecamatanIdOngkir(kecamatan : string, kabupatenId : number) {
    try {
        const response = await Api.post(`/get-kecamatan-id-ongkir`, {
            kabupatenId,
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('jwt')}`
            }
        })
        const result = response.data.rajaongkir.results
        const getId = result && result.filter((data : any) => data.subdistrict_name.toLowerCase() == kecamatan.toLowerCase())
        if(getId.length <= 0) return null
        return {
            provinsi_id: getId[0].province_id,
            kabupaten_id: getId[0].city_id,
            kecamatan_id: getId[0].subdistrict_id,

        }
    } catch(err : any) {
        return err
    }
}

export async function getPriceOngkir(
    kurir : string,
    kecamatanOrigin : string,
    kecamatanDestination : string,
    weight : string,
    width: number,
    height: number,
    dimension: number,
) {
    try {
        const response = await Api.post('/cek-ongkir', {
            courier : kurir,
            kecamatanOrigin,
            kecamatanDestination,
            weight, // in grams
            width,
            height,
            dimension
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('jwt')}`
            }
        })
        return response.data.rajaongkir.results
    } catch(err : any) {
        return err
    }
}

export async function checkDateHadBooked(
    tanggalMulai : string | null,
    tanggalAkhir : string | null,
    iklan : string | number
) {
    try {
        const response = await Api.post('/check-date-had-booked', {
            tanggalMulai,
            tanggalAkhir,
            iklan
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('jwt')}`
            }
        })
        return {
            message: response.data.message,
            status: true
        }
    } catch(err : any) {
        return {
            message: err.response.data.message,
            status: false
        }
    }
}

export async function createPesananByUser(
    data: any
) {
    try {
        const response = await Api.post('/create-pesanan-by-user',
        data, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('jwt')}`
            }
        })
        return response.data
    } catch (err : any) {
        return err.response.data
    }
}

export async function getListPesananPenyewaByJwt() {
    try {
        const response = await Api.post('/get-list-pesanan-penyewa-by-jwt',
        null, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('jwt')}`
            }
        })
        return response.data
    } catch (err : any) {
        return err.response.data
    }
}

export async function getListPesananPemilikByJwt() {
    try {
        const response = await Api.post('/get-list-pesanan-pemilik-by-jwt',
        null, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('jwt')}`
            }
        })
        return response.data
    } catch (err : any) {
        return err.response.data
    }
}

export async function getSingleDataPesananById(id : string | number | string[]) {
    try {
        const response = await Api.get(`/get-single-data-pesanan/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('jwt')}`
            }
        })
        return response.data
    } catch (err : any) {
        return err.response.data
    }
}

export async function batalkanPesananById(id : string | number | string[]) {
    try {
        const response = await Api.put('/batalkan-status-pesanan', {
            pesanan: id
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('jwt')}`
            }
        })
        return response.data
    } catch (err : any) {
        return err.response.data
    }
}

export async function buatPembayaran(data : any) {
    const response = await axios.post('https://redics-payment.herokuapp.com/buat-pembayaran', {
        method: data.method,
        merchant_ref: data.merchant_ref,
        amount: data.amount,
        customer_name: data.customer_name,
        customer_email: data.customer_email,
        customer_phone: data.customer_phone,
        order_items: [
            {
                sku: data.order_items.sku,
                name: data.order_items.name,
                price: data.order_items.price,
                quantity: data.order_items.quantity,
                product_url: data.order_items.product_url,
                image_url: data.order_items.image_url
            }
        ],
        return_url: data.return_url
    })
    return response.data
}

export async function detailPembayaran(payment_reference?: any) {
    const response = await axios.post('https://redics-payment.herokuapp.com/detail-pembayaran', {
        reference: payment_reference
    })
    return response.data
}

export async function updateReferencePayment(id?: string | number | string[], payment_reference?: any) {
    try {
        const response = await Api.put('/update-payment-reference', {
            pesanan: id,
            payment_reference: payment_reference,
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('jwt')}`
            }
        })
        return response.data
    } catch (err) {
        return err
    }
}