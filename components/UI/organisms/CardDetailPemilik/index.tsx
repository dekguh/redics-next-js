import React, { MouseEventHandler, useEffect, useState } from 'react'
import { batalkanPesananById, getSingleDataPesananById } from '../../../utils/api'
import TextTitleSection from '../../atoms/text/TextTitleSection'
import CardBillingPesanan from '../../molecules/card/CardBillingPesanan'
import FormButton from '../../molecules/FormGroup/FormButton'
import FormInput from '../../molecules/FormGroup/FormInput'
import ListTotalPembayaranPesanan from '../../molecules/list/ListTotalPembayaranPesanan'

const MenungguPembayaranPemilik : React.FC<{
    onClickBatalkan?: MouseEventHandler;
    dateCreated?: any;
    dataPesanan?: any;
    onComplete?: any;
}> = ({ onClickBatalkan, dateCreated, dataPesanan, onComplete }) => {
    return(
        <div>
            <FormButton text='batalkan pesanan' classes='mb-3'/>
        </div>
    )
}

const FormInputResiPemilik : React.FC = () => {
    return(
        <div>
            <FormInput placeholder='masukan resi' classes='mb-3' />
            <FormButton text='update resi' />
        </div>
    )
}

const MenungguDikembalikan : React.FC = () => {
    return(
        <div>
            <TextTitleSection text='pengembalian'/>

            <div className='border border-gray-200 rounded flex flex-row flex-nowrap items-center p-2 mt-3'>
                <span className='flex-grow flex-shrink pr-5 text-lg'>TRX12345667890</span>
                <div>
                    <FormButton text='copy' onClick={() => {
                        navigator.clipboard.writeText('TRX12345667890')
                    }}/>
                </div>
            </div>

            <div className='mt-4'>
                <FormButton text='barang dikembalikan'/>
            </div>
        </div>
    )
}

const TanggalMulaiAhir : React.FC<{
    mulai : string;
    akhir: string;
}> = ({ mulai, akhir }) => {
    return (
        <div>
            <div className='flex flex-row flex-nowrap'>
                <div className='flex-grow flex-shrink w-2/4 pr-2'>
                    <TextTitleSection text='mulai'/>
                    <span className='block mt-3'>{mulai}</span>
                </div>

                <div className='flex-grow flex-shrink w-2/4 pl-2'>
                    <TextTitleSection text='akhir'/>
                    <span className='block mt-3'>{akhir}</span>
                </div>
            </div>
        </div>
    )
}

const CardDetailPemilik : React.FC<{
    orderId?: string | number | string[] }> = ({ orderId }) => {
     const [dataPesanan, setDataPesanan] = useState<any>()

     const getSingleData = async (id : string | number | string[]) => {
        const response = await getSingleDataPesananById(id)
        setDataPesanan(response)
    }

    const batalkanPesanan = async () => {
        const response = orderId && await batalkanPesananById(orderId)
        setDataPesanan(response)
    }

    useEffect(() => {
        if(orderId) {
            getSingleData(orderId)
        }
    }, [orderId])

    console.log(dataPesanan)

    useEffect(() => {
        if(dataPesanan && dataPesanan.statusPemesanan == 'menunggu pembayaran') {
            const datePlus2Hour = (new Date(dataPesanan.created_at).getTime()+7200000)/1000
            const currentTime = Date.now()/1000

            if(datePlus2Hour <= currentTime) { // waktu sekarang melewati waktu pembuat + 2 jam
                batalkanPesanan()
            }
        }
    }, [dataPesanan])

    return (
        <div>
            <div className='flex flex-row flex-nowrap mt-5'>
                <h2 className='border-r border-gray-300 pr-5'>#{dataPesanan ? dataPesanan.id : '-'}</h2>
                <span className='ml-5'>{dataPesanan && dataPesanan.statusPemesanan}</span>
            </div>

            <div className='mb-4'>
                <CardBillingPesanan
                    billingPemilik={dataPesanan && dataPesanan.billingPemilik}
                    billingPenyewa={dataPesanan && dataPesanan.billingPenyewa}
                />
            </div>

            <div className='border-t border-gray-300 my-5'></div>

            <div>
                <TextTitleSection text='kurir'/>
                <p className='mt-3'>{dataPesanan && dataPesanan.kurir}</p>
            </div>

            {(dataPesanan && dataPesanan.tanggalSewa.length >= 1) && (
            <>
                <div className='border-t border-gray-300 my-5'></div>

                <div>
                    <TanggalMulaiAhir
                        mulai={dataPesanan && dataPesanan.tanggalSewa[0].mulai}
                        akhir={dataPesanan && dataPesanan.tanggalSewa[0].akhir}
                    />
                </div>
            </>)}

            <div className='border-t border-gray-300 my-5'></div>

            <div>
                <ListTotalPembayaranPesanan
                    namaBarang={dataPesanan && dataPesanan.iklan.judul}
                    ongkosKirim={dataPesanan && dataPesanan.hargaKurir}
                    totalHari={dataPesanan && dataPesanan.hargaTotalDurasi/dataPesanan.hargaPerHari}
                    totalBayar={dataPesanan && Number(dataPesanan.hargaKurir) + Number(dataPesanan.hargaTotalDurasi)}
                    hargaTotalDurasi={dataPesanan && dataPesanan.hargaTotalDurasi}
                />
            </div>

            {(dataPesanan && dataPesanan.statusPemesanan) == 'menunggu pembayaran' && (
            <>
            <div className='border-t border-gray-300 my-5'></div>

            <div>
                <MenungguPembayaranPemilik
                    onClickBatalkan={() => {
                        batalkanPesanan()
                    }}
                    dateCreated={dataPesanan && dataPesanan.created_at}
                    onComplete={() => {
                        batalkanPesanan()
                    }}
                    dataPesanan={dataPesanan}
                />
            </div>
            </>)}

            {(dataPesanan && dataPesanan.statusPemesanan) == 'menunggu dikirim' && (
            <>
                <div className='border-t border-gray-300 my-5'></div>

                <div>
                    <FormInputResiPemilik />
                </div>
            </>)}


            <div className='border-t border-gray-300 my-5'></div>

            <div>
                <MenungguDikembalikan />
            </div>
        </div>
    )
}

export default CardDetailPemilik
