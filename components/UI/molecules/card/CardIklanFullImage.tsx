import React from 'react'
import Link from 'next/link'
import TextBackground from '../../atoms/text/TextBackground'
import { ICardIklanFullImage } from '../../../utils/types'

const CardIklanFullImage : React.FC<ICardIklanFullImage> = ({ image, title, pricePerDay = 0, location }) => {
    return (
        <div>
            <div
                className='bg-no-repeat bg-center bg-cover h-24 w-full rounded-lg'
                style={{ backgroundImage: `url('${image}')` }}
            >
                <TextBackground classes='absolute top-3 left-3' text={location?.kecamatan}/>
            </div>
            <div className='mt-2'>
                <Link href='#'>
                    <a className='font-semibold text-gray-800 hover:text-blue-500 duration-300'>{title}</a>
                </Link>
                <div>
                    <span className='text-xs'>{Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(pricePerDay * 30)}/bulan</span>
                </div>
            </div>
        </div>
    )
}

export default CardIklanFullImage
