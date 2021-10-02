import React from 'react'
import FormButton from '../../molecules/FormGroup/FormButton'
import FormInput from '../../molecules/FormGroup/FormInput'
import FormPassword from '../../molecules/FormGroup/FormPassword'
import HeadingAuth from '../../molecules/heading/HeadingAuth'

const FormLogin : React.FC = () => {
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
                <FormInput
                    label='e-mail'
                    inputType='email'
                    required={true}
                    classes='mb-3'
                    placeholder='e-mail'
                />

                <FormPassword
                    label='password'
                    required={true}
                    classes='mb-3'
                    placeholder='password'
                />

                <FormButton
                    text='Login'
                    type='button'
                />
            </div>
        </div>
    )
}

export default FormLogin
