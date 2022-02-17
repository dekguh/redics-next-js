import React from 'react'
import FormButton from '../molecules/FormGroup/FormButton'
import FormInput from '../molecules/FormGroup/FormInput'
import HeadingAuth from '../molecules/heading/HeadingAuth'

const LupaPassword : React.FC = () => {
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
                <h2 className='text-lg text-blue-500'>disini</h2>
            </div>

            <FormInput
                inputType={'email'}
                placeholder='email anda'
            />

            <FormButton
                classes='mt-3'
                text='reset password'
            />
        </div>
    </div>
  )
}

export default LupaPassword