import React from 'react'
import { IDetailIklanContainer } from '../../../utils/types'
import CardOwnerIklan from '../../molecules/card/CardOwnerIklan'
import HeadingButtonBack from '../../molecules/heading/HeadingButtonback'
import ListPricing from '../../molecules/list/ListPricing'

const DetailIklanContainer : React.FC<IDetailIklanContainer> = ({ dataSingleIklan }) => {
    return (
        <div>
            <HeadingButtonBack toPath='/pencarian' />

            <div className='mt-3 pb-3 border-b border-gray-200'>
                <img src={dataSingleIklan ? dataSingleIklan?.thumbnail?.url : '/nocontentyet.jpg'} className='w-full h-36 rounded object-cover' alt="detail" />
                <h2 className='font-bold text-lg mt-3'>{dataSingleIklan?.judul}</h2>

                <ul className='flex flex-row flex-wrap'>
                    <li className='mr-3'>
                        <span className='text-xs'>{Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(dataSingleIklan?.pricePerDay * 30)}/bulan</span>
                    </li>

                    <li>
                       <span className='text-xs'>{dataSingleIklan?.kecamatan}, {dataSingleIklan?.kabupaten}, {dataSingleIklan?.provinsi}</span>
                    </li>
                </ul>
            </div>

            <div className='mt-3'>
                <p>
                    {dataSingleIklan?.deskripsi}
                </p>

                <ListPricing
                    pricePerDay={dataSingleIklan?.pricePerDay}
                    classes='mt-3'
                />
            </div>

            <div className='mt-3'>
                <CardOwnerIklan
                    userId={dataSingleIklan?.id}
                />
            </div>
        </div>
    )
}

export default DetailIklanContainer
