import React from 'react'
import { ICardOwnerIklan } from '../../../utils/types'
import ButtonPrimary from '../../atoms/control/ButtonPrimary'

const CardOwnerIklan : React.FC<ICardOwnerIklan> = ({ name, isOnline = false, onClick }) => {
    return (
        <div className='border border-gray-200 p-3 rounded-lg flex flex-row flex-nowrap items-center'>
            <div className='flex-grow flex-shrink'>
                <h5>{name}</h5>
                <div className='flex flex-row flex-nowrap items-center mt-1'>
                    <span className={`${isOnline ? 'bg-green-500' : 'bg-red-500'} rounded-full h-2 w-2 block mr-1`}></span>
                    <span>{isOnline ? 'online' : 'offline'}</span>
                </div>
            </div>

            <div>
                <ButtonPrimary
                    text='chat'
                    onClick={onClick}
                />
            </div>
        </div>
    )
}

export default CardOwnerIklan
