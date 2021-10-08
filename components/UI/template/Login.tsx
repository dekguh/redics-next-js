import React from 'react'
import FormLogin from '../organisms/FormLogin'
import Head from 'next/head'
import PublicWrapper from '../../utils/wrapper/PublicWrapper'
import { useRouter } from 'next/router'

const Login : React.FC = () => {
    const Router = useRouter()

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
