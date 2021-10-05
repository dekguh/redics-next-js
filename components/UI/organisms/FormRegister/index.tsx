import React, { ChangeEvent, FormHTMLAttributes, HTMLInputTypeAttribute, InputHTMLAttributes, MouseEvent, useState } from 'react'
import FormButton from '../../molecules/FormGroup/FormButton'
import FormInput from '../../molecules/FormGroup/FormInput'
import FormPassword from '../../molecules/FormGroup/FormPassword'
import HeadingAuth from '../../molecules/heading/HeadingAuth'
import BoxAlert from '../BoxAlert'
import { TDataRegister } from '../../../utils/types'
import { emailValidation, usernameValidation } from '../../../utils/validation'
import { apiRegister } from '../../../utils/api'

const FormRegister : React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [dataRegister, setDataRegister] = useState<TDataRegister>({
        username: '',
        email: '',
        password: '',
        rePassword: '',
        typeUser: 'customer'
    })
    const [isValid, setIsValid] = useState<any>({
        username: { valid: false, message: '' },
        email: { valid: false, message: '' },
        password: { valid: false, message: '' },
        rePassword: { valid: false, message: '' },
        global: { valid: false, message: '', type: 'danger' }
    })

    const handleChangeEmail = (e : ChangeEvent<HTMLInputElement>) => {
        if(!emailValidation(e.target.value)) return setIsValid({
            ...isValid,
            email: {
                valid: false,
                message: 'format email tidak valid'
            }
        })

        setDataRegister({
            ...dataRegister,
            email: e.target.value
        })

        return setIsValid({
            ...isValid,
            email: {
                valid: true,
                message: ''
            }
        })
    }

    const handleChangeUsername = (e : ChangeEvent<HTMLInputElement>) => {
        if(!usernameValidation(e.target.value)) return setIsValid({
            ...isValid,
            username: {
                valid: false,
                message: 'gunakan huruf dan angka saja tanpa spasi'
            }
        })

        if(e.target.value.length < 6) return setIsValid({
            ...isValid,
            username: {
                valid: false,
                message: 'username minimal 6 karakter'
            }
        })

        setDataRegister({
            ...dataRegister,
            username: e.target.value
        })

        return setIsValid({
            ...isValid,
            username: {
                valid: true,
                message: ''
            }
        })
    }

    const handleChangePassword = (e : ChangeEvent<HTMLInputElement>) => {
        if(e.target.value.length < 6) return setIsValid({
            ...isValid,
            password: {
                valid: false,
                message: 'password minimal 6 karakter'
            }
        })

        setDataRegister({
            ...dataRegister,
            password: e.target.value
        })

        return setIsValid({
            ...isValid,
            password: {
                valid: true,
                message: ''
            }
        })
    }

    const handleChangeRePassword = (e : ChangeEvent<HTMLInputElement>) => {
        if(e.target.value.length < 6) return setIsValid({
            ...isValid,
            rePassword: {
                valid: false,
                message: 're-password minimal 6 karakter'
            }
        })

        if(e.target.value !== dataRegister.password) return setIsValid({
            ...isValid,
            rePassword: {
                valid: false,
                message: 'password dan re-password harus sama'
            }
        })

        setDataRegister({
            ...dataRegister,
            rePassword: e.target.value
        })

        return setIsValid({
            ...isValid,
            rePassword: {
                valid: true,
                message: ''
            }
        })
    }

    const handleClickSubmit = (e : MouseEvent) : void => {
        const { username, email, password } = dataRegister
        setIsLoading(true)

        async function registerAccount() : Promise<void> {
            const response : any = await apiRegister({
                username: username,
                email: email,
                password: password
            })
            setIsLoading(false)
            if(response?.jwt) return setIsValid({
                ...isValid,
                global: {
                    valid: true,
                    message: 'berhasil melakukan pendaftaran, silahkan login',
                    type: 'success'
                }
            })

            return setIsValid({
                ...isValid,
                global: {
                    valid: false,
                    message: response,
                    type: 'danger'
                }
            })
        }

        if(isValid.username.valid
            && isValid.email.valid
            && isValid.password.valid
            && isValid.rePassword.valid) {
                registerAccount()
        }
    }

    return (
        <div className='p-3'>
            <div className='mb-20'>
                <HeadingAuth
                    isLogin={false}
                    isRegister={true}
                />
            </div>

            <div className='mb-5'>
                <h1 className='text-xl font-bold'>Daftar Akun,</h1>
                <h2 className='text-lg text-blue-500'>Untuk Akses</h2>
            </div>

            <div>
                {isValid.global.message.length >= 1 && (
                    <BoxAlert
                        text={isValid.global.message}
                        type={isValid.global.type}
                        classes='mb-4'
                    />
                )}

                <form>
                    <FormInput
                        label='e-mail'
                        inputType='email'
                        required={true}
                        classes='mb-3'
                        placeholder='e-mail'
                        onChange={handleChangeEmail}
                    />
                    {isValid.email.message.length >= 1 && (
                        <BoxAlert
                            text={isValid.email.message}
                            type='danger'
                            classes='mb-4'
                        />
                    )}

                    <FormInput
                        label='username'
                        inputType='text'
                        required={true}
                        classes='mb-3'
                        placeholder='username'
                        onChange={handleChangeUsername}
                    />
                    {isValid.username.message.length >= 1 && (
                        <BoxAlert
                            text={isValid.username.message}
                            type='danger'
                            classes='mb-4'
                        />
                    )}

                    <FormPassword
                        label='password'
                        required={true}
                        classes='mb-3'
                        placeholder='password'
                        onChange={handleChangePassword}
                    />
                    {isValid.password.message.length >= 1 && (
                        <BoxAlert
                            text={isValid.password.message}
                            type='danger'
                            classes='mb-4'
                        />
                    )}

                    <FormPassword
                        label='re-password'
                        required={true}
                        classes='mb-3'
                        placeholder='password'
                        onChange={handleChangeRePassword}
                    />
                    {isValid.rePassword.message.length >= 1 && (
                        <BoxAlert
                            text={isValid.rePassword.message}
                            type='danger'
                            classes='mb-4'
                        />
                    )}

                    <FormButton
                        text={isLoading ? 'loading...' : 'Daftar Akun'}
                        type='button'
                        onClick={handleClickSubmit}
                    />
                </form>
            </div>
        </div>
    )
}

export default FormRegister
