import React from 'react'
import { ICardListPesan } from '../../../utils/types'
import ButtonPrimary from '../../atoms/control/ButtonPrimary'
import Link from 'next/link'

const CardListPesan : React.FC<ICardListPesan> = ({ name, message, url ='#', onClick }) => {
    return (
        <div className='p-3 rounded-lg border border-gray-200 flex flex-row flex-nowrap items-center'>
            <div className='flex-grow flex-shrink pr-2'>
                <h5>{name}</h5>
                <p>{message.length >= 32 ? `${message.substring(0, 32)}...` : message}</p>
            </div>

            <div>
                <Link href={url}>
                    <a>
                        <ButtonPrimary
                            text='chat'
                            onClick={onClick}
                        />
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default CardListPesan
