import React from 'react'
import Link from 'next/link'
import { ICardIklanFullWidth } from '../../../utils/types'

const CardIklanFullWidth : React.FC<ICardIklanFullWidth> = ({ image, title, pricePerDay = 0, location, id }) => {
    return (
        <div className='flex flex-row flex-nowrap items-center rounded-lg border border-gray-200 p-3'>
            <div className='flex-grow-0 flex-shrink'>
                <img src={image} alt="iklan" className='w-20 h-16 rounded-lg object-cover' />
            </div>

            <div className='flex-grow flex-shrink pl-3'>
                <Link href={`/detail/${id}-${title?.toLowerCase().replaceAll(' ', '-')}`}>
                    <a className='font-semibold text-gray-800 hover:text-blue-500 duration-300'>{title}</a>
                </Link>
                <ul className='flex flex-row flex-wrap'>
                    <li className='mr-3'>
                        <span className='text-xs'>{Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(pricePerDay * 30)}/bulan</span>
                    </li>

                    <li>
                       <span className='text-xs'>{location?.kabupaten}, {location?.provinsi}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CardIklanFullWidth
