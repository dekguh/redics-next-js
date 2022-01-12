import React, { ChangeEvent, useEffect, useState } from 'react'
import { IFormChatBox } from '../../../utils/types'
import CardOwnerIklan from '../../molecules/card/CardOwnerIklan'
import FormInput from '../../molecules/FormGroup/FormInput'
import HeadingButtonBack from '../../molecules/heading/HeadingButtonback'
import { FaPaperPlane } from 'react-icons/fa'
import { apiCreateTextMessage, apiGetTextAllMessage } from '../../../utils/api'
import { socket } from '../../../utils/socket'

/*
** bug
error on endpoint GET https://redics.herokuapp.com/get-iklan-own-billing/undefined 500 (Internal Server Error)
when receiver user gonna to offline
*/
const FormChatBox : React.FC<IFormChatBox> = ({ messageId, userId, messageWithId, billing }) => {
    const [dataTextMessage, setDataTextMessage] = useState<Array<any> | undefined>([])
    const [messageReply, setMessageReply] = useState<String>('')

    useEffect(() => {
        const getListTextMessage = async () => {
            const response : any = await apiGetTextAllMessage(messageId, localStorage.getItem('jwt'));
            setDataTextMessage(response)
        }

        getListTextMessage()
    }, [messageId])

    const handleSendMessage = () => {
        const createMsg = async () => {
            const response = await apiCreateTextMessage(messageId, userId, messageReply, localStorage.getItem('jwt'))
            /* socket emit to backend */
            socket.emit('sendNewReply', {
                messageId: messageId
            })
        }
        createMsg()
    }

    // run this event when have same messageId
    socket.on('updateNewReply', (res) => {
        console.log('updateNewReply data: ', res.data)
        setDataTextMessage(JSON.parse(res.data))
    })

    return (
        <div className='p-4 relative'>
            <HeadingButtonBack
                classes='mb-2'
                toPath='/pesan'
            />
            <CardOwnerIklan
                userId={messageWithId}
            />

            <div className='overflow-y-scroll bg-gray-50 h-65vh my-3 rounded-lg p-4'>
                <ul>
                    {dataTextMessage && dataTextMessage.map((data, i) => {
                        if(data.user.username == billing.user.username) {
                            return (
                                <li className='mb-3' key={i}>
                                    <div className='text-right'>
                                        <div>
                                            <span className='mr-3 text-xs'>12.00</span>
                                            <span className='text-gray-800'>{data.user.username}</span>
                                        </div>

                                        <p className='mt-1 inline-block bg-blue-500 rounded-lg py-2 px-3 text-white max-w-3/4'>
                                            {data.content}
                                        </p>
                                    </div>
                                </li>
                            )
                        }

                        if(data.user.username != billing.user.username) {
                            return (
                                <li className='mb-3' key={i}>
                                    <div className='text-left'>
                                        <div>
                                            <span className='text-gray-800'>{data.user.username}</span>
                                            <span className='ml-3 text-xs'>12.03</span>
                                        </div>

                                        <p className='mt-1 inline-block bg-gray-200 rounded-lg py-2 px-3 text-gray-500 max-w-3/4'>
                                            {data.content}
                                        </p>
                                    </div>
                                </li>
                            )
                        }
                    })}
                </ul>
            </div>

            <div className='relative'>
                <FormInput
                    placeholder='message'
                    classesInput='rounded-full pr-14'
                    onChange={(e : ChangeEvent<HTMLInputElement>) => setMessageReply(e.target.value)}
                />

                <button
                    className='text-blue-500 text-lg absolute right-5 top-2/4 transform -translate-y-2/4'
                    onClick={handleSendMessage}
                >
                    <i><FaPaperPlane /></i>
                </button>
            </div>
        </div>
    )
}

export default FormChatBox
