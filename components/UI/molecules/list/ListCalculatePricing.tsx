import React, { useState } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { singleCalculatePrice } from '../../../utils/other'
import { IListCalculatePricing } from '../../../utils/types'
import IconLink from '../../atoms/control/IconLink'
import TextLink from '../../atoms/text/TextLink'

const ListCalculatePricing : React.FC<IListCalculatePricing> = ({ pricePerDay = 0 }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <div>
            <TextLink
                text='kalkulasi harga'
                toPath='#'
                isActive={true}
                onClick={() => setIsOpen(!isOpen)}
            />

            <div className={`fixed top-0 right-0 left-0 bottom-0 z-50 bg-black-transparent-0.7 duration-300 ${isOpen ? 'opacity-1 visible' : 'opacity-0 invisible'}`}>
                <div className='bg-white p-4 rounded-md w-72 absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4'>
                    <div>
                        <IconLink
                            icon={BsArrowLeft}
                            toPath='#'
                            onClick={() => setIsOpen(!isOpen)}
                        />
                    </div>

                    <ul className='mt-3'>
                        <li className='flex flex-row flex-nowrap border-b border-gray-200 pb-2 mb-2'>
                            <span className='flex-grow flex-shrink'>{singleCalculatePrice(pricePerDay, 1, 'hari')}</span>
                            <span className='flex-grow-0 flex-shrink'>1 hari</span>
                        </li>

                        <li className='flex flex-row flex-nowrap border-b border-gray-200 pb-2 mb-2'>
                            <span className='flex-grow flex-shrink'>{singleCalculatePrice(pricePerDay, 7, 'hari')}</span>
                            <span className='flex-grow-0 flex-shrink'>7 hari</span>
                        </li>

                        <li className='flex flex-row flex-nowrap border-b border-gray-200 pb-2 mb-2'>
                            <span className='flex-grow flex-shrink'>{singleCalculatePrice(pricePerDay, 30, 'bulan')}</span>
                            <span className='flex-grow-0 flex-shrink'>1 bulan</span>
                        </li>

                        <li className='flex flex-row flex-nowrap border-b border-gray-200 pb-2 mb-2'>
                            <span className='flex-grow flex-shrink'>{singleCalculatePrice(pricePerDay, 183, 'bulan')}</span>
                            <span className='flex-grow-0 flex-shrink'>6 bulan</span>
                        </li>

                        <li className='flex flex-row flex-nowrap'>
                            <span className='flex-grow flex-shrink'>{singleCalculatePrice(pricePerDay, 365, 'tahun')}</span>
                            <span className='flex-grow-0 flex-shrink'>1 tahun</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ListCalculatePricing
