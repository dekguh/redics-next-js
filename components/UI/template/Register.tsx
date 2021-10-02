import React from 'react'
import FormRegister from '../organisms/FormRegister'
import Head from 'next/head'

const Register : React.FC = () => {
    return (
    <>
        <Head>
            <title>Redics - Register</title>
        </Head>

        <FormRegister />
    </>
    )
}

export default Register
