import React from 'react'
import TextTitleSection from '../../atoms/text/TextTitleSection'

const ListTotalPembayaranPesanan : React.FC<{
    namaBarang: string,
    totalHari: number,
    ongkosKirim: number,
    totalBayar: number,
    hargaTotalDurasi: number
}> = ({ namaBarang, totalBayar, totalHari, ongkosKirim, hargaTotalDurasi }) => {
    return (
        <div>
            <TextTitleSection text='total pembayaran'/>

            <ul className='mt-3 list-none'>
                <li className='flex flex-row flex-nowrap items-center mb-3'>
                    <span className='flex-grow-0 flex-shrink w-36 pr-2'>{namaBarang} ({totalHari} hari)</span>
                    <span className='flex-grow flex-shrink text-right'>
                        {Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(hargaTotalDurasi)}
                    </span>
                </li>

                <li className='flex flex-row flex-nowrap items-center mb-3'>
                    <span className='flex-grow-0 flex-shrink w-36 pr-2'>ongkos kirim</span>
                    <span className='flex-grow flex-shrink text-right'>
                        {Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(ongkosKirim)}
                    </span>
                </li>

                <li className='flex flex-row flex-nowrap items-center mb-3'>
                    <span className='flex-grow-0 flex-shrink w-36 pr-2 font-bold text-black'>total bayar</span>
                    <span className='flex-grow flex-shrink text-right font-bold text-black'>
                        {Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(totalBayar)}
                    </span>
                </li>
            </ul>
        </div>
    )
}

export default ListTotalPembayaranPesanan
