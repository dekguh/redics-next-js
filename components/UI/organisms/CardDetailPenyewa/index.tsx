import React, { MouseEventHandler, useEffect, useState } from 'react'
import { batalkanPesananById, getSingleDataPesananById } from '../../../utils/api'
import TextTitleSection from '../../atoms/text/TextTitleSection'
import CardBillingPesanan from '../../molecules/card/CardBillingPesanan'
import FormButton from '../../molecules/FormGroup/FormButton'
import FormInput from '../../molecules/FormGroup/FormInput'
import ListTotalPembayaranPesanan from '../../molecules/list/ListTotalPembayaranPesanan'
import CustomCountdown from '../../molecules/other/CustomCountdown'
import BoxAlert from '../BoxAlert'

/** todo (menunggu pembayaran)
 * - auto pesanan "dibatalkan" ketika countdown berakhir (done)
 * - button batalkan pesanan (done)
 * - integrasi pembayaran midtrans
 */

const MenungguPembayaranPenyewa : React.FC<{
    onClickBayar?: MouseEventHandler;
    onClickBatalkan?: MouseEventHandler;
    dateCreated?: any;
    onComplete?: any;
}> = ({ onClickBayar, onClickBatalkan, dateCreated, onComplete }) => {
    return(
        <div>
            <div className='mb-3'>
                <CustomCountdown
                    dateCreated={dateCreated}
                    onComplete={onComplete}
                />
            </div>
            <FormButton text='bayar sekarang' classes='mb-3' onClick={onClickBayar}/>
            <FormButton text='batalkan pesanan' classes='mb-3' onClick={onClickBatalkan}/>
        </div>
    )
}

const FormInputResiPengembalian : React.FC = () => {
    return(
        <div>
            <FormInput placeholder='masukan resi' classes='mb-3' />
            <FormButton text='update resi' />
        </div>
    )
}

const BarangDikirim : React.FC = () => {
    return(
        <div>
            <TextTitleSection text='Pengiriman'/>

            <div className='border border-gray-200 rounded flex flex-row flex-nowrap items-center p-2 mt-3'>
                <span className='flex-grow flex-shrink pr-5 text-lg'>TRX12345667890</span>
                <div>
                    <FormButton text='copy' onClick={() => {
                        navigator.clipboard.writeText('TRX12345667890')
                    }}/>
                </div>
            </div>

            <div className='mt-4'>
                <FormButton text='barang sampai'/>
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

const CardDetailPenyewa : React.FC<{
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

    useEffect(() => {
        if(dataPesanan && dataPesanan.statusPemesanan == 'menunggu pembayaran') {
            const datePlus2Hour = (new Date(dataPesanan.created_at).getTime()+7200000)/1000
            const currentTime = Date.now()/1000

            console.log({ datePlus2Hour, currentTime })
            console.log(datePlus2Hour <= currentTime)

            if(datePlus2Hour <= currentTime) { // waktu sekarang melewati waktu pembuat + 2 jam
                batalkanPesanan()
            }
        }
    }, [dataPesanan])

    console.log(dataPesanan)
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
                <MenungguPembayaranPenyewa
                    onClickBatalkan={() => {
                        batalkanPesanan()
                    }}
                    dateCreated={dataPesanan && dataPesanan.created_at}
                    onComplete={() => {
                        batalkanPesanan()
                    }}
                />
            </div>
            </>)}

            {(dataPesanan && dataPesanan.statusPemesanan == 'menunggu dikirim') && (
            <>
                <div className='border-t border-gray-300 my-5'></div>

                <div>
                    menunggu dikirim
                </div>
            </>)}

            {(dataPesanan && dataPesanan.statusPemesanan == 'barang dikirim') && (
            <>
                <div className='border-t border-gray-300 my-5'></div>

                <div>
                    <BarangDikirim />
                </div>
            </>)}

            {(dataPesanan && dataPesanan.statusPemesanan == 'telah sampai') && (
            <>
                <div className='border-t border-gray-300 my-5'></div>

                <div>
                    telah sampai
                </div>
            </>)}

            {(dataPesanan && dataPesanan.statusPemesanan == 'menunggu dikembalikan') && (
            <>
                <div className='border-t border-gray-300 my-5'></div>

                <div>
                    <FormInputResiPengembalian />
                </div>
            </>)}

            {(dataPesanan && dataPesanan.statusPemesanan == 'dibatalkan') && (
            <>
                <div className='border-t border-gray-300 my-5'></div>

                <div>
                    <BoxAlert
                        type='danger'
                        text='pesananan anda sudah dibatalkan'
                    />
                </div>
            </>)}
        </div>
    )
}

export default CardDetailPenyewa