import React from 'react'
import CardTransaksi from '../../molecules/card/CardTransaksi'

const TransaksiPenyewa : React.FC = () => {
    return (
        <div>
            <ul className='list-none mt-4'>
                <li className='mb-3'>
                    <CardTransaksi
                        orderId={12345}
                        statusTransaksi='sedang diproses'
                        totalPembayaran={400000}
                        urlDetail='/transaksi-sewa/12345'
                    />
                </li>

                <li className='mb-3'>
                    <CardTransaksi
                        orderId={12345}
                        statusTransaksi='berhasil'
                        totalPembayaran={400000}
                        urlDetail='/transaksi-sewa/12345'
                    />
                </li>
            </ul>
        </div>
    )
}

export default TransaksiPenyewa
