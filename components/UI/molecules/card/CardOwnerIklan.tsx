import React, { useState, useEffect } from 'react'
import { apiGetOwnIklanBilling } from '../../../utils/api'
import { socket } from '../../../utils/socket'
import { ICardOwnerIklan } from '../../../utils/types'
import ButtonPrimary from '../../atoms/control/ButtonPrimary'

const CardOwnerIklan : React.FC<ICardOwnerIklan> = ({ userId, onClick }) => {
    const [dataBilling, setDataBilling] = useState<any>({})
    const [dataBillingOnline, setDataBillingOnline] = useState<any>({})

    useEffect(() => {
        const getBilling = async () => {
            const response = await apiGetOwnIklanBilling(userId)
            setDataBilling(response)
        }
        getBilling()
    }, [userId])

    socket.on('sendInfoOnline', async (res) => {
        console.log('called sendInfoOnline ', res.message)
        const response = await apiGetOwnIklanBilling(userId)
        setDataBillingOnline(response)
    })
console.log(dataBilling)
    return (
        <div className='border border-gray-200 p-3 rounded-lg flex flex-row flex-nowrap items-center'>
            <div className='flex-grow flex-shrink'>
                <h5>{dataBillingOnline ? dataBillingOnline.username : dataBilling.username}</h5>
                <div className='flex flex-row flex-nowrap items-center mt-1'>
                    <span className={`${dataBillingOnline?.isOnline ? 'bg-green-500' : 'bg-red-500'} rounded-full h-2 w-2 block mr-1`}></span>
                    <span>{dataBillingOnline?.isOnline ? 'online' : 'offline'}</span>
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
