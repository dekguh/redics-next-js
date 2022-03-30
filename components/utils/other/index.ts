export function singleCalculatePrice(
    pricePerHour : number,
    totalDay : number,
    unit : 'hari' | 'minggu' | 'bulan' | 'tahun'
) : string {
        return `${Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(pricePerHour*totalDay)}`
}

export function toCapitalizeCase(str : string) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }

    return splitStr.join(' ');
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
        provinsiId: getId[0].province_id,
        kabupatenId: getId[0].city_id,
    }
}