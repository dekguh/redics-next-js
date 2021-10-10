export function singleCalculatePrice(
    pricePerHour : number,
    totalDay : number,
    unit : 'hari' | 'minggu' | 'bulan' | 'tahun'
) : string {
        return `${Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(pricePerHour*totalDay)}`
}