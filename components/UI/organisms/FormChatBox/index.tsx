import React from 'react'
import { IFormChatBox } from '../../../utils/types'
import CardOwnerIklan from '../../molecules/card/CardOwnerIklan'
import FormInput from '../../molecules/FormGroup/FormInput'
import HeadingButtonBack from '../../molecules/heading/HeadingButtonback'
import { FaPaperPlane } from 'react-icons/fa'

const FormChatBox : React.FC<IFormChatBox> = ({ messageId, userId, ownIklanId }) => {
    return (
        <div className='p-4 relative'>
            <HeadingButtonBack
                classes='mb-2'
                toPath='/pesan'
            />
            <CardOwnerIklan
                userId={ownIklanId}
            />

            <div className='overflow-y-scroll bg-gray-50 h-65vh my-3 rounded-lg p-4'>
                <ul>
                    <li className='mb-3'>
                        <div className='text-right'>
                            <div>
                                <span className='mr-3 text-xs'>12.00</span>
                                <span className='text-gray-800'>Waitsi tuya</span>
                            </div>

                            <p className='mt-1 inline-block bg-blue-500 rounded-lg py-2 px-3 text-white max-w-3/4'>
                                just lorem gone from side to side with ambition of you all
                            </p>
                        </div>
                    </li>

                    <li className='mb-3'>
                        <div className='text-left'>
                            <div>
                                <span className='text-gray-800'>Dont Call Me</span>
                                <span className='ml-3 text-xs'>12.03</span>
                            </div>

                            <p className='mt-1 inline-block bg-gray-200 rounded-lg py-2 px-3 text-gray-500 max-w-3/4'>
                                just lorem gone
                            </p>
                        </div>
                    </li>
                </ul>
            </div>

            <div className='relative'>
                <FormInput
                    placeholder='message'
                    classesInput='rounded-full pr-14'
                />

                <button className='text-blue-500 text-lg absolute right-5 top-2/4 transform -translate-y-2/4'>
                    <i><FaPaperPlane /></i>
                </button>
            </div>
        </div>
    )
}

export default FormChatBox
