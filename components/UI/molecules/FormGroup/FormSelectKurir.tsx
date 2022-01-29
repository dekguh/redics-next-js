import React, { ChangeEvent, useEffect, useState } from 'react'
import { getKecamatanIdOngkir, getPriceOngkir } from '../../../utils/api'
import { getKabupatenIdOngkir } from '../../../utils/other'
import TextTitleSection from '../../atoms/text/TextTitleSection'
import FormSelect from './FormSelect'

// todo implement dimension ongkir
const FormSelectKurir : React.FC<{
    billingPemilik?: any;
    billingPenyewa?: any;
    dataSingleIklan?: any;
}> = ({ billingPemilik, billingPenyewa, dataSingleIklan }) => {
    const [listLayanan, setListLayanan] = useState<any>(null)
    const [pilihKurir, setPilihKurir] = useState<string | null>(null)

    useEffect(() => {
        const getPrice = async () => {
            const kabupatenidPemilik = billingPemilik && getKabupatenIdOngkir(billingPemilik.kabupaten)
            const kabupatenidPenyewa = billingPenyewa && getKabupatenIdOngkir(billingPenyewa.kabupaten)

            const kecamatanIdPemilik = kabupatenidPemilik && await getKecamatanIdOngkir(billingPemilik.kecamatan, kabupatenidPemilik.kabupatenId)
            const kecamatanIdPenyewa = kabupatenidPenyewa && await getKecamatanIdOngkir(billingPenyewa.kecamatan, kabupatenidPenyewa.kabupatenId)

            const cekHarga = (dataSingleIklan && kecamatanIdPemilik && kecamatanIdPenyewa && pilihKurir) && await getPriceOngkir(
                pilihKurir,
                kecamatanIdPemilik.kecamatan_id,
                kecamatanIdPenyewa.kecamatan_id,
                (dataSingleIklan.berat * 1000).toString(),
                dataSingleIklan.width,
                dataSingleIklan.height,
                dataSingleIklan.dimension
            )

            const reMappingOngkir = cekHarga && cekHarga.map((data : any) => {
                return {
                    kurir: `${data.name}`,
                    listLayanan: data.costs.map((list : any) => ({
                        deskripsi: list.description,
                        harga: list.cost
                    }))
                }
            })
            if(reMappingOngkir) setListLayanan(reMappingOngkir)
        }
        getPrice()
    }, [pilihKurir])
    return (
        <div>
            <TextTitleSection text='kurir'/>

            <FormSelect
                label='pilih kurir'
                classes='mt-3'
                list={[
                    {
                        value: 'jnt',
                        text: 'J&T'
                    },
                    {
                        value: 'jne',
                        text: 'JNE'
                    }
                ]}
                defaultVal={{
                    value: 'pilih kurir',
                    text: 'pilih kurir'
                }}
                onChange={(e : ChangeEvent<HTMLSelectElement>) => {
                    setPilihKurir(e.target.value)
                }}
            />

            {listLayanan && (<FormSelect
                label='pilih layanan'
                classes='mt-3'
                list={listLayanan && listLayanan[0].listLayanan.map((data : any) => ({
                    value: data.harga[0].value,
                    text: `${data.deskripsi} (${data.harga[0].etd} hari) - ${Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(data.harga[0].value)}`
                }))}
            />)}
        </div>
    )
}

export default FormSelectKurir
