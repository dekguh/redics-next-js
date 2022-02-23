import { useRouter } from 'next/router'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { updatePasswordByEmail, verifikasiTokenResetPassword } from '../../utils/api'
import FormButton from '../molecules/FormGroup/FormButton'
import FormPassword from '../molecules/FormGroup/FormPassword'
import HeadingAuth from '../molecules/heading/HeadingAuth'
import BoxAlert from '../organisms/BoxAlert'
import LoadingFullScreen from '../organisms/Loading/LoadingFullScreen'

const GantiPassword : React.FC<{
    query : any;
}> = ({ query }) => {
    const Router = useRouter()
    const [isLoading, setIsloading] = useState<boolean>(false)
    const [isLoadingScreen, setIsLoadingScreen] = useState<boolean>(true)
    const [isValid, setIsValid] = useState<boolean | undefined>()
    const [dataUpdate, setDataUpdate] = useState<any>({
        newPassword: '',
        rePassword: ''
    })
    const [message, setMessage] = useState<any>({
        text: '',
        type: ''
    })

    const validToken = async (email : any, token : any) => {
        const response = await verifikasiTokenResetPassword(email, token)
        setIsValid(response.valid)
    }

    const changePassword = async () => {
        setIsloading(true)
        setIsLoadingScreen(true)
        const response = await updatePasswordByEmail(query.email, dataUpdate.newPassword)
        setIsloading(false)
        setTimeout(() => {
            Router.push('/login')
        }, 1000)
    }

    useEffect(() => {
        if(Object.keys(query).length == 2) {
            validToken(query.email, query.token)
        }
    }, [query])

    useEffect(() => {
        if(isValid) {
            setIsLoadingScreen(false)
        }
    }, [isValid])

  return (
    <>
        {isLoadingScreen && (<LoadingFullScreen />)}

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
                    <h2 className='text-lg text-blue-500'>disini</h2>
                </div>

                {message.text.length >= 1 && (<BoxAlert
                    text={message.text}
                    type={message.type}
                    classes='mb-3'
                />)}

                <FormPassword
                    placeholder='password'
                    classes='mb-3'
                    onChange={(e : ChangeEvent<HTMLInputElement>) => {
                        if(e.target.value.length < 6) return setMessage({ text: 'password minimal 6 karakter', type: 'danger' })
                        setMessage({ text: '', type: '' })
                        setDataUpdate({
                            ...dataUpdate,
                            newPassword: e.target.value
                        })
                    }}
                />

                <FormPassword
                    placeholder='ulangi password'
                    classes='mb-3'
                    onChange={(e : ChangeEvent<HTMLInputElement>) => {
                        if(e.target.value != dataUpdate.newPassword) return setMessage({ text: 'password harus sama', type: 'danger' })
                        setMessage({ text: '', type: '' })
                        setDataUpdate({
                            ...dataUpdate,
                            rePassword: e.target.value
                        })
                    }}
                />

                <FormButton
                    classes='mt-3'
                    text={isLoading ? 'proses...' : 'reset password'}
                    onClick={() => {
                        changePassword()
                    }}
                />
            </div>
        </div>
    </>
  )
}

export default GantiPassword