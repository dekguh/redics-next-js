import React, { ChangeEvent, useEffect, useState, useRef } from 'react'
import { IFormChatBox } from '../../../utils/types'
import CardOwnerIklan from '../../molecules/card/CardOwnerIklan'
import FormInput from '../../molecules/FormGroup/FormInput'
import HeadingButtonBack from '../../molecules/heading/HeadingButtonback'
import { FaPaperPlane } from 'react-icons/fa'
import { apiCreateTextMessage, apiGetTextAllMessage } from '../../../utils/api'
import { socket } from '../../../utils/socket'

/* next to do make list text message from oldest to newest */
const FormChatBox : React.FC<IFormChatBox> = ({ messageId, userId, messageWithId, billing }) => {
    const [dataTextMessage, setDataTextMessage] = useState<Array<any> | undefined>([])
    const [messageReply, setMessageReply] = useState<String>('')
    const resetBtnRef : any = useRef(null)

    const getListTextMessage = async () => {
        const response : any = await apiGetTextAllMessage(messageId, localStorage.getItem('jwt'));
        setDataTextMessage(response)
    }

    useEffect(() => {
        getListTextMessage()
    }, [messageId])

    const handleSendMessage = () => {
        const createMsg = async () => {
            const response = await apiCreateTextMessage(messageId, userId, messageReply, localStorage.getItem('jwt'))
            /* socket emit to backend */
            socket.emit('sendNewReply', {
                messageId: messageId
            })

            getListTextMessage()
        }
        messageReply && createMsg()
        console.log(resetBtnRef?.current?.click())
    }

    // run this event when user have same messageId
    socket.on('updateNewReply', (res) => {
        const parseRes = JSON.parse(res)
        console.log('updateNewReply data: ', parseRes.data)
        setDataTextMessage(parseRes.data)
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
                    {dataTextMessage && dataTextMessage.sort((a, b) => a.id - b.id).map((data, i) => {
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

            <form method='post' onLoad={(e) => e.preventDefault()}>
                <div className='relative'>
                    <FormInput
                        placeholder='message'
                        classesInput='rounded-full pr-14'
                        onChange={(e : ChangeEvent<HTMLInputElement>) => setMessageReply(e.target.value)}
                        id='inputReply'
                    />

                    <button
                        className='text-blue-500 text-lg absolute right-5 top-1/3 transform -translate-y-2/4'
                        onClick={handleSendMessage}
                        type='button'
                    >
                        <i><FaPaperPlane /></i>
                    </button>
                    <button ref={resetBtnRef} type='reset' className='invisible'>reset</button>
                </div>
            </form>
        </div>
    )
}

export default FormChatBox
