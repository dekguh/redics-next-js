import React from 'react'
import { singleCalculatePrice } from '../../../utils/other'
import { IListPricing } from '../../../utils/types'

const ListPricing : React.FC<IListPricing> = ({ classes, pricePerDay = 0 }) => {
    return (
        <ul className={classes}>
            <li className='flex flex-row flex-nowrap border-b border-gray-200 pb-2 mb-2'>
                <span className='flex-grow flex-shrink text-sm'>{singleCalculatePrice(pricePerDay, 1, 'hari')}</span>
                <span className='flex-grow-0 flex-shrink text-sm'>1 hari</span>
            </li>

            <li className='flex flex-row flex-nowrap border-b border-gray-200 pb-2 mb-2'>
                <span className='flex-grow flex-shrink text-sm'>{singleCalculatePrice(pricePerDay, 7, 'hari')}</span>
                <span className='flex-grow-0 flex-shrink text-sm'>7 hari</span>
            </li>

            <li className='flex flex-row flex-nowrap border-b border-gray-200 pb-2 mb-2'>
                <span className='flex-grow flex-shrink text-sm'>{singleCalculatePrice(pricePerDay, 30, 'bulan')}</span>
                <span className='flex-grow-0 flex-shrink text-sm'>1 bulan</span>
            </li>

            <li className='flex flex-row flex-nowrap border-b border-gray-200 pb-2 mb-2'>
                <span className='flex-grow flex-shrink text-sm'>{singleCalculatePrice(pricePerDay, 183, 'bulan')}</span>
                <span className='flex-grow-0 flex-shrink text-sm'>6 bulan</span>
            </li>

            <li className='flex flex-row flex-nowrap'>
                <span className='flex-grow flex-shrink text-sm'>{singleCalculatePrice(pricePerDay, 365, 'tahun')}</span>
                <span className='flex-grow-0 flex-shrink text-sm'>1 tahun</span>
            </li>
        </ul>
    )
}

export default ListPricing
