import React from 'react'
import { ICardMyIklan } from '../../../utils/types'
import Link from 'next/link'
import { BsCalendar, BsEye } from 'react-icons/bs'

const CardMyIklan : React.FC<ICardMyIklan> = ({ name, date, status, totalView, toPath = '#' }) => {
    return (
        <div className='rounded-lg bg-white border border-gray-200 p-4'>
            <div className='flex flex-row flex-nowrap items-center'>
                <div className='flex-grow flex-shrink'>
                    <Link href={toPath}>
                        <a className='font-semibold hover:text-blue-500 duration-300'>{name}</a>
                    </Link>

                    <ul className='flex flex-row flex-wrap mt-1'>
                        <li className='flex-grow-0 flex-shrink mr-3'>
                            <div className='flex flex-row flex-nowrap items-center'>
                                <i className='text-blue-500 flex-grow-0 flex-shrink mr-1'><BsEye /></i>
                                <span className='text-xs flex-grow-0 flex-shrink'>{totalView}</span>
                            </div>
                        </li>

                        <li className='flex-grow-0 flex-shrink mr-3'>
                            <div className='flex flex-row flex-nowrap items-center'>
                                <i className='text-blue-500 flex-grow-0 flex-shrink mr-1'><BsCalendar /></i>
                                <span className='text-xs flex-grow-0 flex-shrink'>{date}</span>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className='flex-grow-0 flex-shrink'>
                    {status
                    ? (<span className='text-xs bg-green-500 py-1 px-2 rounded-full text-white inline-block'>aktif</span>)
                    : (<span className='text-xs bg-red-500 py-1 px-2 rounded-full text-white inline-block'>tidak aktif</span>)}
                </div>
            </div>
        </div>
    )
}

export default CardMyIklan
