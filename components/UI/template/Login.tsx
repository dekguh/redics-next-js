import React from 'react'
import FormLogin from '../organisms/FormLogin'
import Head from 'next/head'
import PublicWrapper from '../../utils/wrapper/PublicWrapper'

const Login : React.FC = () => {
    return (
    <>
        <Head>
            <title>Redics - Login</title>
        </Head>

        <PublicWrapper>
            <FormLogin />
        </PublicWrapper>
    </>
    )
}

export default Login
