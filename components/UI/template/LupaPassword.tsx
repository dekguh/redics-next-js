import React, { ChangeEvent, useState } from 'react'
import { createResetPasswordToken } from '../../utils/api'
import FormButton from '../molecules/FormGroup/FormButton'
import FormInput from '../molecules/FormGroup/FormInput'
import HeadingAuth from '../molecules/heading/HeadingAuth'
import BoxAlert from '../organisms/BoxAlert'

const LupaPassword : React.FC = () => {
    const [email, setEmail] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const [isLoading, setIsloading] = useState<boolean>(false)

    const createResetPassword = async () => {
        setIsloading(true)
        const response = await createResetPasswordToken(email)
        setMessage(response.message)
        setIsloading(false)
    }

    return (
        <div className='p-3'>
            <div className='mb-32'>
                <HeadingAuth
                    isLogin={false}
                    isRegister={false}
                />
            </div>

            <div>
                <div className='mb-5'>
                    <h1 className='text-xl font-bold'>Reset password,</h1>
                    <h2 className='text-lg text-blue-500'>di sini</h2>
                </div>

                {message.length >= 1 && (<BoxAlert
                    text={message}
                    type='information'
                    classes='mb-3'
                />)}

                <FormInput
                    inputType={'email'}
                    placeholder='email anda'
                    onChange={(e : ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                />

                <FormButton
                    classes='mt-3'
                    text={isLoading ? 'proses...' : 'reset password'}
                    onClick={() => createResetPassword()}
                />
            </div>
        </div>
    )
}

export default LupaPassword