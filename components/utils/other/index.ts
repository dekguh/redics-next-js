import axios from "axios";

export function singleCalculatePrice(
    pricePerHour : number,
    totalDay : number,
    unit : 'hari' | 'minggu' | 'bulan' | 'tahun'
) : string {
        return `${Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(pricePerHour*totalDay)}`
}

export function getKabupatenIdOngkir(kabupaten: string) {
    const listKabupatenBali = [
        {
            city_id: 17,
            province_id: 1,
            province: "Bali",
            type: "Kabupaten",
            city_name: "Badung",
            postal_code: "80351"
        },
        {
            city_id: 32,
            province_id: 1,
            province: "Bali",
            type: "Kabupaten",
            city_name: "Bangli",
            postal_code: "80619"
        },
        {
            city_id: 94,
            province_id: 1,
            province: "Bali",
            type: "Kabupaten",
            city_name: "Buleleng",
            postal_code: "81111"
        },
        {
            city_id: 114,
            province_id: 1,
            province: "Bali",
            type: "Kota",
            city_name: "Denpasar",
            postal_code: "80227"
        },
        {
            city_id: 128,
            province_id: 1,
            province: "Bali",
            type: "Kabupaten",
            city_name: "Gianyar",
            postal_code: "80519"
        },
        {
            city_id: 161,
            province_id: 1,
            province: "Bali",
            type: "Kabupaten",
            city_name: "Jembrana",
            postal_code: "82251"
        },
        {
            city_id: 170,
            province_id: 1,
            province: "Bali",
            type: "Kabupaten",
            city_name: "Karangasem",
            postal_code: "80819"
        },
        {
            city_id: 197,
            province_id: 1,
            province: "Bali",
            type: "Kabupaten",
            city_name: "Klungkung",
            postal_code: "80719"
        },
        {
            city_id: 447,
            province_id: 1,
            province: "Bali",
            type: "Kabupaten",
            city_name: "Tabanan",
            postal_code: "82119"
        }
    ]

    const getId : any = listKabupatenBali.filter(data => data.city_name.toLowerCase() == kabupaten.toLowerCase());
    return {
        provinsiId: getId.province_id,
        kabupatenId: getId.city_id,
    }
}

export async function getKecamatanIdOngkir(kecamatan : string, kabupatenId : number) {
    try {
        const response = await axios.get(`https://pro.rajaongkir.com/api/subdistrict?city=${kabupatenId}`, {
            headers: {
                key: process.env.NEXT_PUBLIC_RAJA_ONGKIR_KEY
            }
        })
        const result = response.data.rajaongkir.results
        const getId = result && result.filter((data : any) => data.subdistrict_name == kecamatan)
        return {
            provinsiId: getId.province_id,
            kabupatenId: getId.city_id,
            kecamatanId: getId.subdistrict_name,
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
) {
    try {
        const formData = new FormData()
        formData.append('origin', kecamatanOrigin)
        formData.append('originType', 'subdistrict')
        formData.append('destination', kecamatanDestination)
        formData.append('destinationType', 'subdistrict')
        formData.append('weight', weight)
        formData.append('courier', kurir)


        const response = await axios.post('https://pro.rajaongkir.com/api/cost',
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
                key: process.env.NEXT_PUBLIC_RAJA_ONGKIR_KEY
            }
        })

        return response.data
    } catch (err : any) {
        return err
    }
}