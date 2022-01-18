import React from 'react'
import { ICardTransaksi } from '../../../utils/types'
import Link from 'next/link'
import ButtonPrimary from '../../atoms/control/ButtonPrimary'

const CardTransaksi : React.FC<ICardTransaksi> = ({
    orderId,
    totalPembayaran = 0,
    statusTransaksi,
    urlDetail
}) => {
    return (
        <div className='p-3 rounded-lg border border-gray-200 flex flex-row flex-nowrap items-center'>
            <div className='flex-grow flex-shrink pr-2'>
                <div className='flex flex-row flex-nowrap'>
                    <span className='font-bold text-black pr-3 border-r border-gray-200'>#{orderId}</span>
                    <span className='pl-3'>{Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(totalPembayaran)}</span>
                </div>

                <div className='mt-1'>
                    <span className='text-xs'>{statusTransaksi}</span>
                </div>
            </div>

            {urlDetail && (<div>
                <Link href={urlDetail}>
                    <a>
                        <ButtonPrimary
                            text='detail'
                        />
                    </a>
                </Link>
            </div>)}
        </div>
    )
}

export default CardTransaksi
