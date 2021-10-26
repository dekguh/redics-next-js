import React from 'react'
import { IDetailIklanContainer } from '../../../utils/types'
import CardOwnerIklan from '../../molecules/card/CardOwnerIklan'
import HeadingButtonBack from '../../molecules/heading/HeadingButtonback'
import ListPricing from '../../molecules/list/ListPricing'

const DetailIklanContainer : React.FC<IDetailIklanContainer> = () => {
    return (
        <div>
            <HeadingButtonBack toPath='/pencarian' />

            <div className='mt-3 pb-3 border-b border-gray-200'>
                <img src="/default-preview.jpg" className='w-full h-36 rounded object-cover' alt="detail" />
                <h2 className='font-bold text-lg mt-3'>Kursi Roda Besi Nyaman</h2>

                <ul className='flex flex-row flex-wrap'>
                    <li className='mr-3'>
                        <span className='text-xs'>{Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(400 * 30)}/bulan</span>
                    </li>

                    <li>
                       <span className='text-xs'>kuta selatan, badung, bali</span>
                    </li>
                </ul>
            </div>

            <div className='mt-3'>
                <p>
                    disewakan kursi roda merk rotato, kursi roda ini berbahan aluminium sehingga kuat. kursi roda ini juga empuk dan nyaman.
                </p>

                <ListPricing
                    pricePerDay={400}
                    classes='mt-3'
                />
            </div>

            <div className='mt-3'>
                <CardOwnerIklan
                    name='Dek Guh Mahesa'
                    isOnline={true}
                />
            </div>
        </div>
    )
}

export default DetailIklanContainer
