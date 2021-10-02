import React from 'react'
import FormLogin from '../organisms/FormLogin'
import Head from 'next/head'

const Login : React.FC = () => {
    return (
    <>
        <Head>
            <title>Redics - Login</title>
        </Head>

        <FormLogin />
    </>
    )
}

export default Login
