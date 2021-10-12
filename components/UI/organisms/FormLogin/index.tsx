import React, { ChangeEvent, MouseEvent, useState } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { apiLogin } from '../../../utils/api'
import { RootState } from '../../../utils/redux/store'
import { updateBillingAction, updateIsLoginAction } from '../../../utils/redux/user/action'
import { TDataLogin } from '../../../utils/types'
import { emailValidation } from '../../../utils/validation'
import FormButton from '../../molecules/FormGroup/FormButton'
import FormInput from '../../molecules/FormGroup/FormInput'
import FormPassword from '../../molecules/FormGroup/FormPassword'
import HeadingAuth from '../../molecules/heading/HeadingAuth'
import BoxAlert from '../BoxAlert'

const mapState = (state : RootState) => {

}

const mapDispatch = {
 actUpdateIsLogin: (status: boolean) => (updateIsLoginAction(status)),
 actUpdateBilling: (data: {} | null) => (updateBillingAction(data)),
}

const connector = connect(null , mapDispatch)
type PropsFromRedux = ConnectedProps<typeof connector>

const FormLogin : React.FC<PropsFromRedux> = ({ actUpdateIsLogin, actUpdateBilling }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [dataLogin, setDataLogin] = useState<TDataLogin>({
        email: '',
        password: ''
    })
    const [isValid, setIsValid] = useState<any>({
        email: { valid: false, message: '' },
        password: { valid: false, message: '' },
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

        setDataLogin({
            ...dataLogin,
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

    const handleChangePassword = (e : ChangeEvent<HTMLInputElement>) => {
        if(e.target.value.length < 6) return setIsValid({
            ...isValid,
            password: {
                valid: false,
                message: 'password minimal 6 karakter'
            }
        })

        setDataLogin({
            ...dataLogin,
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

    const handleClickSubmit = (e : MouseEvent) : void => {
        const { email, password } = dataLogin
        setIsLoading(true)

        async function registerAccount() : Promise<void> {
            const response : any = await apiLogin(
                email,
                password
            )
            setIsLoading(false)
            if(response?.jwt) {
                localStorage.setItem('jwt', response.jwt)
                actUpdateBilling(response.user.billing)
                actUpdateIsLogin(true)
            }

            return setIsValid({
                ...isValid,
                global: {
                    valid: false,
                    message: response,
                    type: 'danger'
                }
            })
        }

        if(isValid.email.valid
            && isValid.password.valid) {
                registerAccount()
        } else {
            setIsLoading(false)
            return setIsValid({
                ...isValid,
                global: {
                    valid: false,
                    message: 'periksa kembali form input',
                    type: 'danger'
                }
            })
        }
    }

    return (
        <div className='p-3'>
            <div className='mb-20'>
                <HeadingAuth
                    isLogin={true}
                    isRegister={false}
                />
            </div>

            <div className='mb-5'>
                <h1 className='text-xl font-bold'>Selamat Datang,</h1>
                <h2 className='text-lg text-blue-500'>Kembali</h2>
            </div>

            <div>
                {isValid.global.message.length >= 1 && (
                    <BoxAlert
                        text={isValid.global.message}
                        type={isValid.global.type}
                        classes='mb-4'
                    />
                )}

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

                <FormButton
                    text={isLoading ? 'Proses...' : 'Login'}
                    type='button'
                    onClick={handleClickSubmit}
                />
            </div>
        </div>
    )
}

export default connector(FormLogin)
