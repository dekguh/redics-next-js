import React from 'react'
import FormRegister from '../organisms/FormRegister'
import Head from 'next/head'
import PublicWrapper from '../../utils/wrapper/PublicWrapper'

const Register : React.FC = () => {
    return (
    <>
        <Head>
            <title>Redics - Register</title>
        </Head>

        <PublicWrapper>
            <FormRegister />
        </PublicWrapper>
    </>
    )
}

export default Register
